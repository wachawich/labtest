from pymongo import MongoClient
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb+srv://guywpth:fyVxukotBvtVMVLb@ezpay.cnk35.mongodb.net/")
db = client['Ezpay']
collection = db['LabTest']

def schemaFormat(data):
    format = {
            "UserName" : data['UserName'],
            "DisplayName" : data['DisplayName'],
            "Detail" : {
                "Following" : data['Following'],
                "Follower" : data['Follower'],
                "Likes" : data['Likes'],
                "Description" : data['Description'],
                "Contact" : data['Contact'],
            }
        }
    

    return format

@app.route('/addUser', methods=['POST'])
def add_document():

    data = request.json 
    formatData = schemaFormat(data)
    print(formatData)
    collection.insert_one(formatData)

    return jsonify({"message": "Document added successfully!"}), 201


@app.route('/getUserByName/<username>', methods=['GET'])
def get_documents(username):
    print(username)
    documents = list(collection.find({"UserName" : username} , {'_id': 0}))
    return jsonify(documents[0]), 200


# @app.route('/*')
# def Error():
#     return jsonify({"message": "You are lost in the 404 galaxy."}), 404

if __name__ == '__main__':
    app.run(debug=True)