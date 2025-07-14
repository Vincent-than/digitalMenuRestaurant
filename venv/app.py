from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from frontend

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json()
    print("📩 Contact Form:", data)
    # Here, you can save to a database or send an email
    return jsonify({'message': 'Contact received'}), 200

@app.route('/api/reservation', methods=['POST'])
def reservation():
    data = request.get_json()
    print("📅 Reservation:", data)
    # Save to DB or send confirmation
    return jsonify({'message': 'Reservation received'}), 200

if __name__ == '__main__':
    app.run(debug=True)