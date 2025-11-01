# Nitrotype-hacker

Uses a web extension and Python program to automatically type during a Nitrotype race.
It does this by transmitting the Nitrotype sentence to http://127.0.0.1:5000/type on the user's local network.

## Usage

1. Run the `server.py` after installing `flask`, `flask_cors`, and `pyautogui`
2. Go to the Nitrotype website and start your race
3. Click on the extension in your browser
4. Click the "Get text" button and then click the "Run script" button
5. In the Python console, messages similar to these should appear:
```
   127.0.0.1 - - [01/Nov/2025 02:38:41] "OPTIONS /type HTTP/1.1" 200 -
   127.0.0.1 - - [01/Nov/2025 02:38:48] "POST /type HTTP/1.1" 200 -
```
6. A small delay will take place before the sentence completes itself!
