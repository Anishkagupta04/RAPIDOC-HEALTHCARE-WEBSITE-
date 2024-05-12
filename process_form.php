<?php
// Database configuration
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$database = "your_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$date = $_POST['date'];
$age = $_POST['age'];
$doctor = $_POST['doctor'];
$message = $_POST['message'];

// Prepare SQL statement
$stmt = $conn->prepare("INSERT INTO appointments (name, email, phone, appointment_date, age_group, location, message) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssss", $name, $email, $phone, $date, $age, $doctor, $message);

// Execute SQL statement
if ($stmt->execute() === TRUE) {
    echo "Appointment made successfully.";
} else {
    echo "Error: " . $conn->error;
}

// Close connection
$stmt->close();
$conn->close();
?>
