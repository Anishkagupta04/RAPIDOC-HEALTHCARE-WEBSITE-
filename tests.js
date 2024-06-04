function filterTests() {
    const category = document.getElementById('test-category').value;
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    
    // This is where you'd normally filter your tests based on the search query and category
    alert(`Filtering tests by category: ${category} and search query: ${searchQuery}`);
}

function bookTest() {
    const category = document.getElementById('test-category').value;
    const date = document.getElementById('test-date').value;
    const timeSlot = document.getElementById('time-slot').value;
    const sampleMethod = document.getElementById('sample-method').value;

    // This is where you'd normally handle the booking logic
    alert(`Booking test in category: ${category} on date: ${date} during ${timeSlot} with sample method: ${sampleMethod}`);
}

// Add event listeners to update pricing and instructions based on selected test category
document.getElementById('test-category').addEventListener('change', function() {
    const category = this.value;
    let pricing;
    let instructions;

    switch (category) {
        case 'hematology':
            pricing = '$50';
            instructions = 'Fast for 8 hours before the test.';
            break;
        case 'biochemistry':
            pricing = '$75';
            instructions = 'No special preparation required.';
            break;
        case 'immunology':
            pricing = '$100';
            instructions = 'Avoid certain medications before the test.';
            break;
        case 'microbiology':
            pricing = '$120';
            instructions = 'Provide a sample first thing in the morning.';
            break;
        default:
            pricing = 'Please select a test category to see the pricing.';
            instructions = 'Please select a test category to see the preparation instructions.';
            break;
    }
    

    document.getElementById('pricing').innerText = pricing;
    document.getElementById('instructions').innerText = instructions;
});
