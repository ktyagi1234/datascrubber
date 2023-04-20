from flask import Flask
from flask_cors import CORS, cross_origin
import ndjson
import json





# api = Flask(__name__)


# api.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Pass2020!@172.17.0.2/DataScrubber'

# api.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(api)

# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(80), unique=True, nullable=False)
#     email = db.Column(db.String(120), unique=True, nullable=False)

#     def __init__(self, username, email):
#         self.username = username
#         self.email = email

#     def __repr__(self):
#         return '<User %r>' % self.username


# with api.app_context():
#     db.create_all()

# from api import db
# db.create(all) 



cors = CORS(api, resources={r"/foo": {"origins": "http://127.0.0.1:5000"}})
api.config['CORS_HEADERS'] = 'Content-Type'

@api.route('/profile', methods = ['GET'])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def my_profile():
    
    with open ("db.ndjson", "r") as json_file:
        data = ndjson.load(json_file)
        print(data)
        arr = []
        for x in data:
            arr.append(x)
    response_body = {
        "name": "Kshitij",
        "about" :"Hello! I'm Kshitij, a student at UC Merced!",
        "data" : arr
    }
    return response_body

if __name__ == '__main__':
    api.run()
    