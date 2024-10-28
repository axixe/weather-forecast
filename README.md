# Weather Forecast

[Check out the live demo here](https://axixe.github.io/weather-forecast).

This project is a simple weather forecast website built using React. It allows users to get the current weather and a 5-day forecast for different cities. The data is fetched from the [WeatherAPI](https://www.weatherapi.com/), and the application is styled using Sass.

## Features

- **Real-time Weather Data**: Get up-to-date weather information using the WeatherAPI.
- **5-Day Forecast**: See the forecast for the next 5 days.
- **Responsive Design**: The application is fully responsive, adapting to different screen sizes.
- **Context API**: Used for state management to manage global data in the app.
- **Sass for Styling**: Styles are written in Sass, allowing for better organization and maintainability of the CSS.
- **Local Storage**: Stores the selected city for future visits.

## Technologies Used

The project uses several core technologies and concepts from React, including:

1. **React Functional Components**: The app is built using functional components to create a modular and reusable codebase.

2. **Hooks**:
   - `useState` for state management.
   - `useEffect` for managing side effects, such as fetching data.

3. **Context API**:
   - Used to manage and share state across multiple components without having to pass props manually.
   - Allows for centralizing the management of weather data and other global states.

4. **Error Handling**:
   - Proper error handling for network requests to display user-friendly messages in case of errors.

5. **Prop Drilling vs Context API**:
   - Instead of passing data through multiple components (prop drilling), the Context API is used for managing global state, making the codebase cleaner and easier to maintain.

## Additional Libraries

- **Sass (Syntactically Awesome Stylesheets)**: Used for better structuring and organizing the CSS with variables, nesting, and mixins.
- **WeatherAPI**: Fetching real-time weather data.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/axixe/weather-forecast.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-forecast
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm start
   ```

The application will open in your default browser at `http://localhost:3000`.

## File Structure

The project follows a modular folder structure:

- `src/components`: Contains the React components for the application.
- `src/context`: Holds the context and state management logic.
- `src/service`: Contains API-related services, including functions to fetch weather data.
- `public`: Contains static assets and the `index.html` file.

## Future Enhancements

Possible improvements and features to add:

- **Unit and Integration Testing**: Implement testing using Jest and React Testing Library.
- **Additional Weather Details**: Include more weather details such as wind speed, humidity, and UV index.
- **Dark Mode**: Add support for a dark theme.
- **Multi-language Support**: Allow the app to support multiple languages for a wider audience.
