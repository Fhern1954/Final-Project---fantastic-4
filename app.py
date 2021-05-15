from flask import Flask, render_template, redirect, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS, cross_origin
from bson.json_util import dumps
from bson.json_util import loads
import joblib

# Create an instance of Flask
app = Flask(__name__)
CORS(app, resources={
    r"/*": {
        "origins": "*"
    }
})
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['CORS_ORIGINS'] = '*'
app.config['DEBUG'] = True


@app.route("/ingredients")
def ingredients():
    import csv
    with open('data/cat_finalingredients.csv') as csv_file:
        data = csv.reader(csv_file, delimiter=',')
        first_line = True
        ingredients = []
        for row in data:
            if not first_line:
                ingredients.append({
                "Basics": row[0],
                "Dairy": row[1],
                "Flavor":row[2],
                "Toppings":row[3]    
                })
            else:
                first_line = False
    return jsonify(ingredients)          
    # return render_template("index.html", ingredients=ingredients)

# @app.route("/model")
@app.route("/model", methods=["POST", "GET"])
@cross_origin(origin='*', headers=['Access-Control-Allow-Origin', 'Content-Type'])
def model():
    resp = request.get_json()
    print(resp)
    loaded_rf = joblib.load("code/rf.joblib")
    result = loaded_rf.predict([resp])
    return jsonify({"result":list(result)})


if __name__ == "__main__":
    app.run(debug=True)