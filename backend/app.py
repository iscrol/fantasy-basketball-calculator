from flask import Flask, request, jsonify
from database import db  

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

import models

@app.route('/')
def home():
    return 'Hello, Fantasy Basketball Calculator!'

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
