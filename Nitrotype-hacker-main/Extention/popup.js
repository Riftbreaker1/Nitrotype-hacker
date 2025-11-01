document.getElementById('readBtn').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const letters = document.querySelectorAll('.dash-copy .dash-letter');
      if (!letters.length) return "No text found on this page.";
      return Array.from(letters).map(span => span.textContent).join('');
    },
  }, (results) => {
    const text = results[0]?.result || "Error: could not read text.";
    document.getElementById('text').textContent = text;
  });
});


// 🆕 Add this for the new button
document.getElementById('triggerBtn').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Inject a separate JS file into the current page
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['trigger.js']
  });
});
