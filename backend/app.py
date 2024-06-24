from flask import Flask, request, jsonify
from database import db  
import models
import click
from flask.cli import with_appcontext

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

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
