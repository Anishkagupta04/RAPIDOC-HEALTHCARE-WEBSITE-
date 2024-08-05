document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close');
    const popupContent = document.getElementById('popupContent');

    // Blood type data
    const bloodTypeData = {
        'A+': {
            donors: [
                { name: 'John Doe', amount: 0.5 },
                { name: 'Jane Smith', amount: 0.7 }
            ],
            recipients: [
                { name: 'Alice Johnson', amount: 0.6 },
                { name: 'Bob Williams', amount: 0.8 }
            ]
        },
        'O+': {
            donors: [
                { name: 'Emily Brown', amount: 0.6 },
                { name: 'Michael Davis', amount: 0.5 }
            ],
            recipients: [
                { name: 'Sarah Miller', amount: 0.7 },
                { name: 'David Wilson', amount: 0.4 }
            ]
        },
        'B+': {
            donors: [
                { name: 'Jennifer Lee', amount: 0.4 },
                { name: 'Robert Taylor', amount: 0.8 }
            ],
            recipients: [
                { name: 'William Anderson', amount: 0.5 },
                { name: 'Lisa Martinez', amount: 0.6 }
            ]
        },
        'AB+': {
            donors: [
                { name: 'Jessica Brown', amount: 0.7 },
                { name: 'Thomas Moore', amount: 0.5 }
            ],
            recipients: [
                { name: 'Karen White', amount: 0.4 },
                { name: 'Daniel Clark', amount: 0.8 }
            ]
        },
        'A': {
            donors: [
                { name: 'Patricia Garcia', amount: 0.6 },
                { name: 'James Rodriguez', amount: 0.5 }
            ],
            recipients: [
                { name: 'Nancy Lewis', amount: 0.7 },
                { name: 'Christopher Lee', amount: 0.3 }
            ]
        },
        'O': {
            donors: [
                { name: 'Margaret Wilson', amount: 0.5 },
                { name: 'Joseph Thompson', amount: 0.6 }
            ],
            recipients: [
                { name: 'Barbara Martin', amount: 0.4 },
                { name: 'Richard Harris', amount: 0.7 }
            ]
        },
        'B': {
            donors: [
                { name: 'Elizabeth Hall', amount: 0.7 },
                { name: 'Charles Young', amount: 0.4 }
            ],
            recipients: [
                { name: 'Susan Allen', amount: 0.6 },
                { name: 'Kevin Scott', amount: 0.5 }
            ]
        },
        'AB': {
            donors: [
                { name: 'Dorothy King', amount: 0.5 },
                { name: 'Mark Baker', amount: 0.6 }
            ],
            recipients: [
                { name: 'Linda Green', amount: 0.4 },
                { name: 'Paul Adams', amount: 0.7 }
            ]
        }
    };

    // Function to generate popup content
    function generatePopupContent(bloodType) {
        const data = bloodTypeData[bloodType];
        let content = `<h2>${bloodType} Blood</h2>`;

        content += `<h3>Donors</h3><div class="list">`;
        let totalDonation = 0;
        data.donors.forEach(donor => {
            content += `<p>${donor.name}: ${donor.amount} L</p>`;
            totalDonation += donor.amount;
        });
        content += `</div><p><strong>Total Donation: ${totalDonation.toFixed(2)} L</strong></p>`;

        content += `<h3>Recipients</h3><div class="list">`;
        let totalNeeded = 0;
        data.recipients.forEach(recipient => {
            content += `<p>${recipient.name}: ${recipient.amount} L</p>`;
            totalNeeded += recipient.amount;
        });
        content += `</div><p><strong>Total Needed: ${totalNeeded.toFixed(2)} L</strong></p>`;

        return content;
    }

    // Add click event listeners to all "Get List" buttons
    document.querySelectorAll('.get-list-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const bloodType = this.id.split('-')[1];
            popupContent.innerHTML = generatePopupContent(bloodType);
            popup.style.display = 'block';
        });
    });

    // Close popup when clicking the close button
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Close popup when clicking outside the popup content
    window.addEventListener('click', function(e) {
        if (e.target == popup) {
            popup.style.display = 'none';
        }
    });
});