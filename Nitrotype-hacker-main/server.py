from flask import Flask, request
from flask_cors import CORS
import pyautogui
import time

app = Flask(__name__)
CORS(app)  # <-- enable CORS for all domains

@app.route('/type', methods=['POST'])
def type_text():
    data = request.json
    sentence = data.get('sentence', '')
    if not sentence:
        return {'status': 'error', 'message': 'No sentence provided'}, 400

    # Give you 2 seconds to focus the window where you want to type
    time.sleep(2)

    for letter in sentence:
        pyautogui.typewrite(letter)
        time.sleep(0.001)  # adjust typing speed here

    return {'status': 'success', 'typed': sentence}, 200

if __name__ == '__main__':
    app.run(port=5000)
