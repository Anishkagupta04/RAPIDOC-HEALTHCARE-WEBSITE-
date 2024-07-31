--> Setting up a Firebase account is a straightforward process. Follow these steps to create and configure your Firebase project:
--> Create a Google Account:
    If you don't already have a Google account, create one at Google Sign Up.
--> Access Firebase:
    Go to the Firebase Console.
--> Create a Firebase Project:
    Click on the "Add project" button.
    Enter a project name and click "Continue".
    (Optional) You can enable Google Analytics for your project. If you do, select the Google Analytics account you want to use. Click "Continue".
    Configure Google Analytics settings (if enabled) and click "Create project".
--> Add Firebase to Your App:
    Once your project is created, you will be taken to the Firebase project overview page.
    Click on the platform icon for the type of app you are building (Web, iOS, Android).
--> Register Your App:
    For a web app, you will need to enter a nickname for your app and optionally set up Firebase Hosting. Click "Register app".
--> Add Firebase SDK:
    After registering your app, you will be provided with a Firebase configuration snippet. Copy this configuration.
    Add the Firebase SDK to your project by including the provided script tags in your HTML file:
-> html code:
    <!-- Firebase App (the core Firebase SDK) -->
    <script src="https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js"></script>
    <!-- Add Firebase products that you want to use -->
    <script src="https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js"></script> 
--> Initialize Firebase in Your Project:
    In your JavaScript file (e.g., login.js), initialize Firebase using the configuration details:
--> javascript code:
    <!--Your web app's Firebase configuration -->
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_PROJECT_ID.appspot.com",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID",
        measurementId: "YOUR_MEASUREMENT_ID"
    };
