# Nitrotype-hacker
Uses a web extention and python program to automatically type during a nitrotype race.
It does this by transmitting the nitrotype sentence to http://127.0.0.1:5000/type on the user's local network.

# Usage

Run the server.py after installing flask, flask_cors and pyautogui
Go to the nitrotype website and start your race
Click on the extention in your browser
Click the "Get text" button and then click the "Run script" button
In the python console messages similar to these:
    127.0.0.1 - - [01/Nov/2025 02:38:41] "OPTIONS /type HTTP/1.1" 200 -
    127.0.0.1 - - [01/Nov/2025 02:38:48] "POST /type HTTP/1.1" 200 -

Should appear
A small delay will take place before the sentence completes itself!
