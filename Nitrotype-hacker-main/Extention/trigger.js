console.log("trigger.js successfully injected!");

// Read the sentence from the page
const letters = Array.from(document.querySelectorAll('.dash-copy .dash-letter'))
    .map(span => {
        let char = span.textContent;
        // Convert non-breaking space to normal space
        if (char === "\xa0") return " ";
        return char;
    });

// Join letters into a full sentence
const sentence = letters.join('');
console.log("Sentence to type:", sentence);

// Send sentence to Python server
fetch('http://127.0.0.1:5000/type', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sentence: sentence })
})
.then(response => response.json())
.then(data => console.log("Server response:", data))
.catch(err => console.error("Error sending sentence:", err));
