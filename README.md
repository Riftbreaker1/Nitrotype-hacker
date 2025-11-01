# Nitrotype-hacker

Uses a web extension and Python program to automatically type during a Nitrotype race.
It does this by transmitting the Nitrotype sentence to http://127.0.0.1:5000/type on the user's local network.

## Usage

1. If not already installed, install 'flask', 'flask_cors' and 'pyautogui' using 'pip install flask flask_cors pyautogui'
2. Run the server.py program (python 3.7 or higher is recommended)
3. Go to the Nitrotype website and start your race
4. Click on the extension in your browser
5. Click the "Get text" button and then click the "Begin typing" button
6. In the Python console, messages similar to these should appear:
```
   127.0.0.1 - - [01/Nov/2025 02:38:41] "OPTIONS /type HTTP/1.1" 200 -
   127.0.0.1 - - [01/Nov/2025 02:38:48] "POST /type HTTP/1.1" 200 -
```
7. At a speed of around 120wpm, the sentence will type itself!

## Notice 

The usage, creation or distribution of this tool is completely independent - www.nitrotype.com, Nitrotype, or the Nitrotype name/company is not affiliated with this project whatsoever.

## Security note

This tool runs a server on the user's local network capable of receiving input. Make sure to only use this when on trusted networks and is stopped when not in use.
