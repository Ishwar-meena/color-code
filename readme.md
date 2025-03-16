# Random Color Plate Generator

This project is a simple web application that generates random color plates. Each plate displays a random color and its corresponding hex code. Users can copy the hex code to the clipboard by clicking on the copy icon.

## Project Structure

```
copy.svg
index.html
script.js
style.css
```

- `index.html`: The main HTML file that structures the web page.
- `script.js`: The JavaScript file that contains the logic for generating random colors and handling user interactions.
- `style.css`: The CSS file that styles the web page.
- `copy.svg`: The SVG icon used for the copy button.

## Features

- Generates random color plates with hex codes.
- Allows users to copy the hex code to the clipboard.
- Infinite scroll to load more color plates as the user scrolls down.

## How to Use

1. Open `index.html` in a web browser.
2. The page will display a set of random color plates.
3. Click on the copy icon next to a color hex code to copy it to the clipboard.
4. Scroll down to load more color plates.

## Code Overview

### HTML (`index.html`)

The HTML file sets up the structure of the web page, including a navigation bar, a container for the color plates, and links to the CSS and JavaScript files.

### CSS (`style.css`)

The CSS file styles the web page, including the layout of the navigation bar, the color plates, and the copy icon.

### JavaScript (`script.js`)

The JavaScript file contains the following functions:

- `randomBackgroundColor()`: Generates a random hex color code.
- `addBoxes(num)`: Adds a specified number of color plates to the container.
- `setColor()`: Sets the background color and hex code for each color plate and adds an event listener to the copy icon.

The script also includes an event listener for infinite scroll, which loads more color plates as the user scrolls down.

## License

This project is open source and available under the [MIT License](LICENSE).