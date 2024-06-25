import pandas as pd
from scipy.stats import zscore
from database import db
from models import Player
from app import app

def load_data():
    df = pd.read_csv('nba_data.csv', delimiter=';')
    columns_to_drop = ['Age', 'GS', 'FG', 'FGA', '3PA', '3P%', '2P', '2PA', '2P%', 'eFG%', 'FT', 'FTA', 'ORB', 'DRB', 'PF']
    df = df.drop(columns_to_drop, axis=1)

    # Calculate z-scores
    for col in ['PTS', 'TRB', 'AST', 'STL', 'BLK', 'FT%', 'FG%', '3P', 'TOV']:
        df[f'z_{col.lower()}'] = zscore(df[col])

    # remove tot stats for players who were traded
    df = df[df['Tm'] != 'TOT']  

    # Load cleaned data into the database
    with app.app_context():
        db.drop_all()
        db.create_all()
        for index, row in df.iterrows():
            player = Player(
                name=row['Player'],
                team=row['Tm'],
                position=row.get('Pos', ''),
                games=int(row['G']),
                minutes=float(row['MP']),
                points=float(row['PTS']),
                rebounds=float(row['TRB']),
                assists=float(row['AST']),
                steals=float(row['STL']),
                blocks=float(row['BLK']),
                threes_made=float(row['3P']),
                fg_percentage=float(row['FG%']),
                ft_percentage=float(row['FT%']),
                turnovers=float(row['TOV']),
                z_points=row['z_pts'],
                z_rebounds=row['z_trb'],
                z_assists=row['z_ast'],
                z_steals=row['z_stl'],
                z_blocks=row['z_blk'],
                z_ft_percentage=row['z_ft%'],
                z_fg_percentage=row['z_fg%'],
                z_threes_made=row['z_3p'],
                z_turnovers=row['z_tov']
            )
            db.session.add(player)
        db.session.commit()

if __name__ == '__main__':
    load_data()
    

