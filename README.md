# Unit Conversion App

## Overview
The Unit Conversion App is a web application designed to convert between metric and imperial units. It provides a user-friendly interface for converting lengths, volumes, and masses. The app is built using HTML, CSS, and JavaScript.

## Features
- **Length Conversion**: Convert between meters and feet.
- **Volume Conversion**: Convert between liters and gallons.
- **Mass Conversion**: Convert between kilograms and pounds.
- **Real-time Conversion**: Input a value and see the converted results instantly.
- **Error Handling**: Displays error messages for invalid inputs.

## Usage
1. **Input Value**: Enter a numeric value in the input field.
2. **Convert**: Click the "CONVERT" button to see the converted values for length, volume, and mass.
3. **Error Messages**: If the input is invalid, an error message will be displayed.

## CSS
The CSS styles are defined in the [index.css](index.css) file. Key styles include:
- **Layout**: Flexbox is used to center and align elements.
- **Colors**: Background and text colors are chosen to provide a visually appealing interface.
- **Fonts**: The "Inter" font is used for text elements.
- **Responsive Design**: The layout adjusts to different screen sizes.

## JavaScript
The JavaScript logic is implemented in the [index.js](index.js) file. Key functionalities include:
- **Event Listener**: Listens for the "click" event on the "CONVERT" button.
- **Conversion Logic**: Converts the input value to the corresponding units and updates the DOM with the results.
- **Error Handling**: Validates the input and displays error messages for invalid inputs.

## Example
Here is an example of the HTML structure:
```html
<div class="container">
    <div class="unit_insert">
        <h1>Metric/Imperial Unit Conversion</h1>
        <input id="input-el" type="text">
        <button id="convert-el">CONVERT</button>
    </div>
    <div class="unit_transform">
        <div class="unit length">
            <h2>Length (Meter/Feet)</h2>
            <p id="length-el">0 meters = 0 feet | 0 feet = 0 meters</p>
        </div>
        <div class="unit volume">
            <h2>Volume (Liters/Gallons)</h2>
            <p id="volume-el">0 liters = 0 gallons | 0 gallons = 0 liters</p>
        </div>
        <div class="unit mass">
            <h2>Mass (Kilograms/Pounds)</h2>
            <p id="kilogram-el">0 kilos = 0 pounds | 0 pounds = 0 kilos</p>
        </div>
    </div>
    <div class="error-msg">
        <p id="message-el"></p>
    </div>
</div>