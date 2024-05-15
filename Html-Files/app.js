const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Function to toggle dark mode based on user preference
function toggleDarkMode() {
  if (darkModeToggle.checked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
}

// Event listener for dark mode toggle button
darkModeToggle.addEventListener("change", toggleDarkMode);

// Function to check and set initial dark mode state based on user preferences
function setInitialDarkMode() {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (prefersDarkMode) {
    body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  }
}

// Call the function to set initial dark mode state
//setInitialDarkMode();

// Create XMLHttpRequest Object
const xhr = new XMLHttpRequest();

function sendCategory(index) {
  getNews(newsCategory[index]);
}
getNews("all");

function getNews(newsCategoryName) {
  xhr.open(
    "GET",
    `hhttps://newsapi.org/s/india-health-news-api`,
    true
  );

  xhr.getResponseHeader("Content-type", "application/json");

  xhr.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let data = json.data;

      let newsHTML = "";

      function showSpinner() {
        spinner.style.visibility = "hidden";
        newsBox.style.visibility = "visible";
      }

      xhr.onprogress = showSpinner;

      for (key in data) {
        let news = `<div class="newsCard">
        <div class="imageWrapper">
        <img src="${data[key].imageUrl}"
        class="thumnail" alt="Image">
            </div>
            <div class="card-body">
            <div class="card-date">${data[key].date}</div>
                      <h5 class="card-title">${data[key].title}</h5>
                                <h5 class="card-author">Author: ${data[key].author}</h5>
                                <p class="card-text">${data[key].content}</p>
                                <a target="_blank" href="${data[key].readMoreUrl}" class="btn btn-primary">Read more..</a>
                            </div>
                           
                        </div>`;
        newsHTML += news;
      }

      newsBox.innerHTML = newsHTML;
    } else {
      console.log("Some Error Occurred");
    }
  };

  xhr.send();
}
