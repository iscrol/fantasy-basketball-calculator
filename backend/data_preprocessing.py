import pandas as pd

# Load data
df = pd.read_csv('nba_data.csv', delimiter=';')

# Columns to drop
columns_to_drop = ['Age', 'GS', 'FG', 'FGA', '3PA', '3P%', '2P', '2PA', '2P%', 'eFG%', 'FT', 'FTA', 'ORB', 'DRB', 'PF']
df = df.drop(columns_to_drop, axis=1)

# Identify players with multiple and single entries
player_counts = df['Player'].value_counts()
multiple_players = player_counts[player_counts > 1].index
single_players = player_counts[player_counts == 1].index

# Filter for players with multiple entries who have a 'TOT' row
df_multiple_tot = df[(df['Player'].isin(multiple_players)) & (df['Tm'] == 'TOT')]

# Filter for players with only one entry, regardless of team
df_single = df[df['Player'].isin(single_players)]

# Combine and ensure no duplicates from improper overlap
final_df = pd.concat([df_multiple_tot, df_single]).drop_duplicates(subset=['Player', 'Tm']).reset_index(drop=True)

# Display the result
print(len(final_df))
