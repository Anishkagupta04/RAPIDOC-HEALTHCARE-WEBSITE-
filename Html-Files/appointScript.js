document.addEventListener("DOMContentLoaded", function() {
    const existingPatientCheckbox = document.getElementById('existing-patient');
    const patientIdInput = document.getElementById('patient-id');
    const appointmentForm = document.getElementById('appointment-form');
    const previewSection = document.getElementById('preview-section');
    const previewDetails = document.getElementById('preview-details');
    const doctorSelect = document.getElementById('doctor-select');
    const appointmentDate = document.getElementById('appointment-date');
    const timeSlotsDiv = document.getElementById('time-slots');
    existingPatientCheckbox.addEventListener('change', function() {
        if (this.checked) {
            patientIdInput.style.display = 'block';
        } else {
            patientIdInput.style.display = 'none';
        }
    });

    window.previewAppointment = function() {
        if (appointmentForm.checkValidity()) {
            const formData = new FormData(appointmentForm);
            
            let details = `
    
                <strong>Name:</strong> ${formData.get('full-name')}<br>
                <strong>Date of Birth:</strong> ${formData.get('dob')}<br>
                <strong>Email:</strong> ${formData.get('email')}<br>
                <strong>Phone:</strong> ${formData.get('phone')}<br><br>
                <strong>Doctor:</strong> ${formData.get('doctor')}<br>
                <strong>Appointment Date:</strong> ${formData.get('date')}<br>
                <strong>Time:</strong> ${formData.get('time-slot')}<br>
                <strong>Reason for Visit:</strong> ${formData.get('reason')}<br><br>
                <strong>Existing Patient:</strong> ${formData.get('existing-patient') ? 'Yes' : 'No'}<br>
                <strong>Patient ID:</strong> ${formData.get('patient-id')}
            `;
            previewDetails.innerHTML = details;
            previewSection.style.display = 'block';
            appointmentForm.style.display = 'none';
        } else {
            appointmentForm.reportValidity();
        }
    };

    window.confirmAppointment = function() {
        alert('Submitted successfully');
        appointmentForm.reset();
        previewSection.style.display = 'none';
        appointmentForm.style.display = 'block';
    };

    window.editAppointment = function() {
        previewSection.style.display = 'none';
        appointmentForm.style.display = 'block';
    };
    function togglePatientID() {
        const patientID = document.getElementById('patient-id');
        const existingPatient = document.getElementById('existing-patient');
        if (existingPatient.checked) {
            patientID.style.display = 'block';
        } else {
            patientID.style.display = 'none';
        }
    };
});

