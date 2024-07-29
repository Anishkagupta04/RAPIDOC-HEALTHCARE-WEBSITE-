emailjs.init("Your_User_ID"); // Replace with your actual EmailJS User ID
    
        // Function to validate email address
       export function isValidEmail(email) {
            // Simple email validation regex
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(email)) {
                return false;
            }
    
            // Extract domain
            const domain = email.split('@')[1].toLowerCase();
            const validDomains = ['gmail.com', 'outlook.com', 'yahoo.com'];
    
            return validDomains.includes(domain);
        }
    
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('subscribeForm').addEventListener('submit', function(event) {
                event.preventDefault();
    
                var email = document.getElementById('emailInput').value;
    
                if (!isValidEmail(email)) {
                    alert('Please enter a valid email address from Gmail, Outlook, or Yahoo.');
                    return;
                }
    
                // Prepare the parameters to send
                var templateParams = {
                    to_email: email, // Set the recipient's email
                    from_name: 'Rapidoc', // Replace with your company or your name
                    to_name: 'Subscriber',
                    message: 'Thank you for subscribing to our newsletter!'
                };
    
                // Send email
                emailjs.send('Your_Service_ID', 'Your_Template_ID', templateParams)
                    .then(function(response) {
                        console.log('Email sent successfully:', response);
                        alert('Successfully subscribed to our newsletter!');
                    }, function(error) {
                        console.error('Error sending email:', error);
                        alert('Failed to send email. Please try again later.');
                    });
            });
        });