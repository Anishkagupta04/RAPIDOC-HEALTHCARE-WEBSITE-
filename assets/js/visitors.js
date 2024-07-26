function getVisitorCount() {
  return localStorage.getItem('visitorCount') || 0;
}

function incrementVisitorCount() {
  let count = parseInt(getVisitorCount()) + 1;
  localStorage.setItem('visitorCount', count);
  return count;
}

function displayVisitorCount() {
  const counterElement = document.querySelector('.website-counter');
  const count = incrementVisitorCount();
  counterElement.textContent = count;
}

document.addEventListener('DOMContentLoaded', displayVisitorCount);