import time
from flask import Flask, jsonify, request, abort

app = Flask(__name__)

@app.route('/api/v1/get-placeholder')
def get_placeholder_route():
    return jsonify({
        "time": time.time()
    })

if __name__ == '__main__':
    app.run(debug=True)