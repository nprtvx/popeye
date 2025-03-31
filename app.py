from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/endpoint', methods=['GET', 'POST'])
def handle_request():
    if request.method == 'GET':
        # Handle GET request
        return jsonify({"message": "This is a GET request", "data": request.args})
    elif request.method == 'POST':
        # Handle POST request
        data = request.get_json()
        return jsonify({"message": "This is a POST request", "data": data})

if __name__ == '__main__':
    app.run(debug=False)
