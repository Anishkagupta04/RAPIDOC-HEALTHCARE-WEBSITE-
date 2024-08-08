/* Feedback Message */
    function handleSubmit(event) {
        event.preventDefault();
        const feedbackMessage = document.getElementById('feedback-message');
        feedbackMessage.style.display = 'inline';
        setTimeout(() => {
          feedbackMessage.style.display = 'none';
        }, 3000);
      }

// /* Rating */
let rating = null;

function handleRatingChange(value) {
  rating = value;
  updateStars();
}
      function handleRatingChange(newRating) {
          rating = newRating;
          updateEmojis();
          console.log("Rating selected:", rating);
      }

      function updateEmojis() {
          const buttons = document.querySelectorAll('.rating-container button');
          buttons.forEach((button, index) => {
              button.textContent = getEmoji(index + 1);
          });
      }

// script.js
const emojiGifs = document.querySelectorAll('.emoji-gif');
const selectedEmojiElement = document.getElementById('selected-emoji');
const selectedGifElement = document.getElementById('selected-gif');

emojiGifs.forEach(gif => {
    gif.addEventListener('click', () => {
        const emoji = gif.getAttribute('data-emoji');
        const gifSrc = gif.getAttribute('data-gif-src');
        selectedEmojiElement.textContent = emoji;
        selectedGifElement.src = gifSrc;
    });
});

//       function getEmoji(rating) {
//           switch(rating) {
//               case 1: return '😡';
//               case 2: return '☹️';
//               case 3: return '😐';
//               case 4: return '🙂';
//               case 5: return '😄';
//               default: return '😐';
//           }
//       }

function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const feedback = document.getElementById('feedback').value;

  // For now, we will just simulate email sending success
  console.log('Feedback submitted:', { name, email, rating, feedback });

  // Reset the form fields
  document.getElementById('feedback-form').reset();
  rating = null;
  updateStars();

  // Show the popup
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

const feedbackForm = document.querySelector('.feedback-form');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  if (isElementInViewport(feedbackForm)) {
    feedbackForm.classList.add('animate-feedback');
    window.removeEventListener('scroll', handleScroll);
  }
}

window.addEventListener('scroll', handleScroll);

updateStars();


