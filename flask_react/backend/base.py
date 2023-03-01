from flask import Flask

api = Flask(__name__)

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "Kshitij",
        "about" :"Hello! I'm Kshitij, a student at UC Merced!"
    }

    return response_body