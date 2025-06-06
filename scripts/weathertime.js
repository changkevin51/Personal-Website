
const API_KEY = '82005d27a116c2880c8f0fcb866998a0';
const CITY = 'Ottawa';
const COUNTRY_CODE = 'CA';

const weatherIcons = {
    '01d': '☀️', '01n': '🌙',
    '02d': '⛅', '02n': '☁️',
    '03d': '☁️', '03n': '☁️',
    '04d': '☁️', '04n': '☁️',
    '09d': '🌧️', '09n': '🌧️',
    '10d': '🌦️', '10n': '🌧️',
    '11d': '⛈️', '11n': '⛈️',
    '13d': '🌨️', '13n': '🌨️',
    '50d': '🌫️', '50n': '🌫️'
};

function updateTime() {
    const now = new Date();
    const timeOptions = {
        timeZone: 'America/Toronto',
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit'
    };
    
    const timeString = now.toLocaleTimeString('en-US', timeOptions);
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

async function fetchWeather() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY_CODE}&appid=${API_KEY}&units=metric`
        );
        
        if (!response.ok) {
            throw new Error('Weather data not available');
        }
        
        const data = await response.json();
        updateWeatherDisplay(data);
    } catch (error) {
        console.error('Error fetching weather:', error);
        displayWeatherError();
    }
}

function updateWeatherDisplay(data) {
    const weatherContainer = document.getElementById('weather-info');
    if (!weatherContainer) return;
    
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const humidity = data.main.humidity;
    const feelsLike = Math.round(data.main.feels_like);
    
    const weatherIcon = weatherIcons[iconCode] || '🌤️';
    
    weatherContainer.innerHTML = `
        <div class="weather-main">
            <span class="weather-icon">${weatherIcon}</span>
            <span class="temperature">${temperature}°C</span>
        </div>
        <div class="weather-details">
            <div class="weather-description">${description}</div>
            <div class="weather-extra">
                <span>Feels like ${feelsLike}°C</span>
                <span>Humidity ${humidity}%</span>
            </div>
        </div>
    `;
}

function displayWeatherError() {
    const weatherContainer = document.getElementById('weather-info');
    if (weatherContainer) {
        weatherContainer.innerHTML = `
            <div class="weather-error">
                <span>🌡️</span>
                <span>Weather unavailable</span>
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateTime();
    setInterval(updateTime, 1000);
    
    fetchWeather();
    setInterval(fetchWeather, 600000); 
});