from flask import Flask
from flask_cors import CORS, cross_origin

api = Flask(__name__)
cors = CORS(api, resources={r"/foo": {"origins": "http://127.0.0.1:5000"}})
api.config['CORS_HEADERS'] = 'Content-Type'

@api.route('/profile', methods = ['GET'])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def my_profile():
    response_body = {
        "name": "Kshitij",
        "about" :"Hello! I'm Kshitij, a student at UC Merced!"
    }
    return response_body

if __name__ == '__main__':
    api.run()