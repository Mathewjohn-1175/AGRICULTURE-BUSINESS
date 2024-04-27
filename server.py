from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@cross_origin()
@app.route('/lol', methods = ['POST'])
def lol():
    # post call for sell
    print(request.json)
    return f"{request.form.get}"

@cross_origin()
@app.route('/sell', methods = ['POST'])
def sell_product():
    print(request.json)
    return f"{request.form.get}"

@cross_origin()
@app.route('/data', methods = ['GET'])
def datadb():
    return [
    { 'FERTILIZERS': ['TFY FERTILIZER', 778] },  
    { 'FERTILIZERS': ['ABC FERTILIZER', 200] },
    {'FERTILIZERS':['XYZ FERTILIZER',100]},
    { 'FERTILIZERS': ['TFY FERTILIZER', 778] },  
    { 'FERTILIZERS': ['ABC FERTILIZER', 200] },
    {'FERTILIZERS':['XYZ FERTILIZER',100]},
    { 'FERTILIZERS': ['TFY FERTILIZER', 778] },  
    { 'FERTILIZERS': ['ABC FERTILIZER', 200] },
    {'FERTILIZERS':['XYZ FERTILIZER',900]},
    { 'MACHINERY' : ['WWW TRACTOR', 5000]}
  ]