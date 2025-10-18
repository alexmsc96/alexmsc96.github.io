# Weather App 2.1

A modern weather application with dynamic backgrounds and glassmorphism design.

## Features

- **Real-time Weather Data**: Uses OpenWeatherMap API to fetch current weather and 5-day forecast
- **Geolocation Support**: Automatically detects user's location
- **Manual Location Search**: Search for any city worldwide
- **Dynamic Backgrounds**: Background image changes based on current weather conditions:
  - Clear/Sunny → Sunny landscape
  - Rainy/Drizzle → Rainy scene
  - Cloudy → Cloudy sky
  - Snow → Snowy landscape
  - Thunderstorm → Rainy scene
- **Modern Glassmorphism UI**: 
  - Semi-transparent cards with backdrop blur
  - Smooth animations and transitions
  - Enhanced readability with text shadows
  - Responsive design for mobile and desktop

## Usage

1. Open `index.html` in a web browser
2. Allow location access when prompted, or
3. Type a city name in the input field and press Enter

## Design Updates

### Glassmorphism Elements
- Cards use `backdrop-filter: blur(10px)` for a frosted glass effect
- Semi-transparent backgrounds: `rgba(255, 255, 255, 0.1)`
- Rounded corners (20px border-radius)
- Subtle borders and shadows for depth

### Dynamic Weather Backgrounds
The app automatically switches between different background images based on the current weather condition, providing a more immersive user experience.

## Technologies

- HTML5
- CSS3 (with modern features like backdrop-filter)
- Vanilla JavaScript
- OpenWeatherMap API
