const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
let appointmentStep = 0; // Variable to track the appointment scheduling steps
let selectedDoctor = null; // Variable to store the selected doctor
let appointmentDetails = {}; // Object to store appointment details
const API_KEY = "PASTE-YOUR-API-KEY"; // Paste your API key here
const inputInitHeight = chatInput.scrollHeight;

const predefinedQA = {
    "Hi": "Hello",
    "Hey":"Hello",
    "How are you?": "I'm just a bot, but I'm doing great! How can I assist you today?",
    "What is your name?": "I am a chatbot created to assist you.",
    "Tell me a joke.": "Why don't scientists trust atoms? Because they make up everything!",
    "What is RapiDoc?": "RapiDoc is an online platform which enables you to get information about your nearest hospitals and healthcare facilities. It aims to address health-related issues. It is a one-stop destination for all your medical needs.",
    "How can RapiDoc help me?": "RapiDoc helps you find the nearest hospitals and healthcare facilities, ensuring you have access to necessary medical information and services quickly and easily.",
    "What services does RapiDoc provide?": "RapiDoc provides information on nearby hospitals, healthcare facilities, and various medical services to address your health-related needs.",
    "Make an appointment": "Sure, here are some doctors available for appointments:\n1. Dr. Vikas Chopra\n2. Dr. Ajay Aggarwal\n3. Dr. Soni Gupta\nPlease type the number of the doctor you want to make an appointment with."
};

const doctorsList = {
    "1": "Dr. Vikas Chopra",
    "2": "Dr. Ajay Aggarwal",
    "3": "Dr. Soni Gupta"
};

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

const generateResponse = (chatElement) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = chatElement.querySelector("p");

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userMessage }],
        })
    }

    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content.trim();
    }).catch(() => {
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleAppointment = (userMessage) => {
    if (appointmentStep === 0) {
        selectedDoctor = doctorsList[userMessage];
        if (!selectedDoctor) {
            chatbox.appendChild(createChatLi("Invalid doctor number. Please try again.", "incoming"));
            return;
        }
        chatbox.appendChild(createChatLi(`You selected ${selectedDoctor}. Please enter the date for your appointment (YYYY-MM-DD).`, "incoming"));
        appointmentStep++;
    } else if (appointmentStep === 1) {
        const date = userMessage;
        if (!date.match(/^\d{4}-\d{2}-\d{2}$/)) {
            chatbox.appendChild(createChatLi("Invalid date format. Please enter the date in YYYY-MM-DD format.", "incoming"));
            return;
        }
        appointmentDetails.date = date;
        chatbox.appendChild(createChatLi("Please enter the time for your appointment (HH:MM).", "incoming"));
        appointmentStep++;
    } else if (appointmentStep === 2) {
        const time = userMessage;
        if (!time.match(/^\d{2}:\d{2}$/)) {
            chatbox.appendChild(createChatLi("Invalid time format. Please enter the time in HH:MM format.", "incoming"));
            return;
        }
        appointmentDetails.time = time;
        chatbox.appendChild(createChatLi(`Appointment scheduled with ${selectedDoctor} on ${appointmentDetails.date} at ${appointmentDetails.time}.`, "incoming"));
        appointmentStep = 0;
        selectedDoctor = null;
        appointmentDetails = {};
    }
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    if (appointmentStep > 0) {
        handleAppointment(userMessage);
    } else if (predefinedQA[userMessage]) {
        setTimeout(() => {
            const incomingChatLi = createChatLi(predefinedQA[userMessage], "incoming");
            chatbox.appendChild(incomingChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 600);
    } else if (Object.keys(doctorsList).includes(userMessage)) {
        setTimeout(() => {
            handleAppointment(userMessage);
        }, 600);
    } else {
        setTimeout(() => {
            const incomingChatLi = createChatLi("Thinking...", "incoming");
            chatbox.appendChild(incomingChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
            generateResponse(incomingChatLi);
        }, 600);
    }
}

chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
