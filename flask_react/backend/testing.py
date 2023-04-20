import ndjson

file = "db.ndjson"



with open ("db.ndjson", "r") as json_file:
    
    data = ndjson.load(json_file)
print(data)
