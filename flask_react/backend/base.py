from flask import Flask
from flask_cors import CORS, cross_origin
import ndjson
import json

cors = CORS(api, resources={r"/foo": {"origins": "http://127.0.0.1:5000"}})
api.config['CORS_HEADERS'] = 'Content-Type'

# TASK 1: Send the ndjson data to the frontend
'''
Create an endpoint similar to profile: "/members"

    with open ("db.ndjson", "r") as json_file:
        data = ndjson.load(json_file)
        print(data)
        arr = []
        for x in data:
            arr.append(x)
    return {"data" : arr}

'''

# TASK 2: Get the new user data at the backend and add it to ndjson file
'''
Create an endpoint similar to profile: "/addUser" (it is not completely similar, you need to get the data in this endpoint instead of sending.
SEARCH: GET AND POST endpoints Flask
- setup endpoint
- grab the new user data
- save the new user data as a new json object in ndjson
'''


@api.route('/profile', methods = ['GET'])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def my_profile():
    response_body = {
        "name": "Kshitij",
        "about" :"Hello! I'm Kshitij, a student at UC Merced!",
    }
    return response_body

if __name__ == '__main__':
    api.run()
    
