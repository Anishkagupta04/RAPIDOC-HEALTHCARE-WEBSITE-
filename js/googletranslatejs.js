document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('translatePopup');
    var btn = document.getElementById('translateButton');
    var span = document.getElementsByClassName('close')[0];
    var translateBtn = document.getElementById('performTranslation');

    btn.onclick = function() {
        popup.style.display = 'block';
    }

    span.onclick = function() {
        popup.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }

    translateBtn.onclick = function() {
        var text = document.getElementById('textToTranslate').value;

        fetch('https://translation.googleapis.com/language/translate/v2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_ACCESS_TOKEN' // Replace with your OAuth 2.0 token
            },
            body: JSON.stringify({
                q: text,
                target: 'en', // Replace with the desired target language code
                source: 'auto' // Detects the source language automatically
            })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('translatedText').innerText = data.data.translations[0].translatedText;
        })
        .catch(error => {
            console.error('Error translating text:', error);
            document.getElementById('translatedText').innerText = 'Translation failed.';
        });
    }
});
