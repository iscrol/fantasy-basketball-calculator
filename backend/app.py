from flask import Flask, request, jsonify
from database import db  
import click
from flask.cli import with_appcontext
from flask_cors import CORS
from models import Player


app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

@app.route('/api/players', methods=['GET'])
def get_players():
    players = Player.query.all()  # Fetch all player entries from the database

    #calculate total value
    for player in players:
        player.value = round(
            player.z_points + player.z_rebounds + player.z_assists + 
            player.z_steals + player.z_blocks - player.z_turnovers + # subtract turnovers because it's a negative stat
            player.z_ft_percentage + player.z_fg_percentage + player.z_threes_made, 2
        )

    sorted_players = sorted(players, key=lambda x: x.value, reverse=True)

    players_data = [
        {
            'id': player.id,
            'name': player.name,
            'team': player.team,
            'position': player.position,
            'games': player.games,
            'minutes': player.minutes,
            'points': player.points,
            'rebounds': player.rebounds,
            'assists': player.assists,
            'steals': player.steals,
            'blocks': player.blocks,
            'threePM': player.threes_made,
            'fgPct': player.fg_percentage,
            'ftPct': player.ft_percentage,
            'turnovers': player.turnovers,
            'value': player.value

        } for player in sorted_players
    ]
    return jsonify(players_data)

@app.route('/')
def home():
    return 'Hello, Fantasy Basketball Calculator!'

@app.cli.command("load-data")
@with_appcontext
def load_data_command():
    from data_preprocessing import load_data
    load_data()
    click.echo("Data loaded successfully.")

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
