document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('translatePopup');
    var btn = document.getElementById('translateButton');
    var span = document.getElementsByClassName('close')[0];
    
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
});