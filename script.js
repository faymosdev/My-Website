window.addEventListener('DOMContentLoaded' , (event) => {
    // Function to update the current time in UTC
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString();
        const dayofWeek = now.toLocaleDateString('en-US', {weekday: 'long'});

        document.getElementById('current-time').textContent = utcTime;
        document.getElementById('current-day').textContent = dayofWeek;
    }

    // Update the time once when the page loads
    updateTime();

    // Update the time every minute
    setInterval(updateTime, 60000);
});