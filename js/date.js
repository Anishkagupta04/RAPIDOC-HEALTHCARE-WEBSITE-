/* Date in Appointment Section */
// To set value of minimum date in calendar
var currentDate = new Date();
var year = currentDate.getFullYear();
var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
var day = currentDate.getDate().toString().padStart(2, '0');
var formattedDate = `${year}-${month}-${day}`;
document.getElementById('date').setAttribute('min', formattedDate);


var currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;