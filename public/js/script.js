document.addEventListener('DOMContentLoaded', function() {
    // Update the date and time
    function updateDateTime() {
        const dateTimeElement = document.getElementById('datetime');
        if (dateTimeElement) {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
            dateTimeElement.innerText = now.toLocaleDateString('en-US', options);
        }
    }

    setInterval(updateDateTime, 1000); // Update date and time every second
    updateDateTime();

    // Function to update weather icon and temperature
    function updateWeather(condition, temperature) {
        const weatherIcon = document.getElementById('weather-icon');
        const tempElement = document.getElementById('temperature');

        if (weatherIcon && tempElement) {
            switch (condition) {
                case 'sunny':
                    weatherIcon.className = 'fas fa-sun ml-2';
                    break;
                case 'rainy':
                    weatherIcon.className = 'fas fa-cloud-showers-heavy ml-2';
                    break;
                case 'thunderstorm':
                    weatherIcon.className = 'fas fa-bolt ml-2';
                    break;
                default:
                    weatherIcon.className = 'fas fa-sun ml-2';
            }

            tempElement.innerText = temperature + '°C';
        }
    }

    // Example usage (replace with actual weather data)
    updateWeather('sunny', 28);
});

// ...Structure part...

//JavaScript to Copy Link
    function copyLink() {
        const dummy = document.createElement('input');
        const text = window.location.href;
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        alert('Link copied to clipboard!');
    }

//Javascript to share a link of news
function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: 'Arya Prawah',
            url: window.location.href
        }).catch(console.error);
    } else {
        alert('Share not supported on this browser.');
    }
}