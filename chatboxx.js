const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message

const inputInitHeight = chatInput.scrollHeight;

const predefinedAnswers = {
    "What types of health checkup packages does Rapidoc offer?": "Rapidoc offers a variety of health checkup packages, including basic health screenings, comprehensive full-body checkups, and specialized tests tailored to specific health concerns.",
    "How can I book a health checkup through Rapidoc?": "You can easily book a health checkup through our platform by selecting your preferred package and scheduling a convenient appointment time. Our user-friendly interface guides you through the booking process.",
    "What should I expect during my health checkup?": "During your health checkup, you will undergo a series of tests and screenings based on the package you selected. Our medical professionals will provide a detailed analysis of your results and personalized recommendations.",
    "How do I find out the availability of emergency wards?": "Rapidoc provides real-time updates on the availability of emergency wards in various hospitals. Simply use our platform to check the current status and find the nearest available ward.",
    "Can I book appointments with specialists through Rapidoc?": "Yes, you can book appointments with a wide range of specialists through Rapidoc. Our platform allows you to select the specialist you need and schedule an appointment at your convenience.",
    "What personalized healthcare services does Rapidoc offer?": "Rapidoc offers personalized healthcare services including tailored treatment plans, ongoing health management, and consultations with various specialists to meet your unique health needs.",
    "How does Rapidoc ensure the quality of its services?": "Rapidoc collaborates with certified medical professionals and accredited hospitals to ensure high-quality healthcare services. Our comprehensive health checkups and personalized care plans are designed to meet rigorous standards.",
    "Is Rapidoc available in my area?": "Rapidoc is continually expanding its network. Please check our platform for the most up-to-date information on available locations and services in your area.",
    "How do I get started with Rapidoc?": "Getting started with Rapidoc is easy. Visit our website, create an account, and explore our range of health services. You can book appointments, check emergency ward availability, and access personalized healthcare all through our platform.",
    "What are the benefits of using Rapidoc for my healthcare needs?": "Rapidoc offers convenient and comprehensive healthcare solutions, including thorough health checkups, real-time emergency ward updates, seamless appointment bookings, and personalized healthcare services—all designed to enhance your well-being and streamline your healthcare experience."
};

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    if (className === "question") {
        chatLi.style.cursor = "pointer";
      }
    return chatLi; // return chat <li> element
}


const generateResponse = (chatElement) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = chatElement.querySelector("p");

    // Define the properties and message for the API request
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: userMessage}],
        })
    }

    // Send POST request to API, get response and set the reponse as paragraph text
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content.trim();
    }).catch(() => {
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if (!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    // Check if the message matches a predefined question
    if (userMessage == "Hi" || userMessage == "hi" || userMessage == "HI")
        showQuestionList(); 
         else {
        setTimeout(() => {
            // Display "Thinking..." message while waiting for the response
            const incomingChatLi = createChatLi("Thinking...", "incoming");
            chatbox.appendChild(incomingChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
            generateResponse(incomingChatLi);
        }, 600);
    }
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window 
    // width is greater than 800px, handle the chat
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

function showWelcomeMessage() {
    const welcomeChatLi = createChatLi("Hi! Welcome to RapiDoc! Chatbot. Say Hi to display menu.");
    chatbox.appendChild(welcomeChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
  }

  // Function to display list of questions
  function showQuestionList() {
    for (const question in predefinedAnswers) {
      const questionChatLi = createChatLi(question, "question");
      questionChatLi.addEventListener("click", () => showAnswer(question));
      questionChatLi.style.cursor = "pointer";
      chatbox.appendChild(questionChatLi);
    }
    chatbox.scrollTo(0, chatbox.scrollHeight);
  }

  // Function to display answer based on clicked question
  function showAnswer(clickedQuestion) {
    const answer = predefinedAnswers[clickedQuestion];
    const answerChatLi = createChatLi(answer, "incoming");
    chatbox.appendChild(answerChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
  }

  // Call showWelcomeMessage and showQuestionList initially
  showWelcomeMessage();
