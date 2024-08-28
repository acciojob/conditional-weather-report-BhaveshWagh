import React from 'react';

const WeatherDisplay = ({ weather }) => {
    return (
        <div>
            {weather.map((element, index) => (
                <div key={index}>
                    <p >
                        Temperature: <span style={{ color: element.temperature > 20 ? "rgb(255, 0, 0)" : "rgb(0, 128, 0)" }}>{element.temperature}</span>
                    </p>
                    <p>
                        Conditions: {element.conditions}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default WeatherDisplay;