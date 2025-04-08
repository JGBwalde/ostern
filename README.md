# PWA App

This project is a Progressive Web App (PWA) that features a main index page with 9 buttons, each linking to a separate subpage. The functionality of each button is dependent on whether the corresponding subpage has been visited, which is tracked using `localStorage`.

## Project Structure

```
pwa-app
├── public
│   ├── index.html        # Main entry point of the application
│   ├── manifest.json     # Metadata about the PWA
│   └── sw.js             # Service worker for offline capabilities
├── src
│   ├── pages
│   │   ├── page1.html    # First subpage
│   │   ├── page2.html    # Second subpage
│   │   ├── page3.html    # Third subpage
│   │   ├── page4.html    # Fourth subpage
│   │   ├── page5.html    # Fifth subpage
│   │   ├── page6.html    # Sixth subpage
│   │   ├── page7.html    # Seventh subpage
│   │   ├── page8.html    # Eighth subpage
│   │   └── page9.html    # Ninth subpage
│   └── styles
│       └── styles.css     # Styles for the application
├── package.json           # Configuration file for npm
└── README.md              # Documentation for the project
```

## Features

- **Dynamic Button Activation**: Each button on the main page becomes active only after the corresponding subpage has been visited.
- **Local Storage Tracking**: The app uses `localStorage` to track which subpages have been visited.
- **Offline Capabilities**: The service worker enables offline access and caching for a better user experience.

## Getting Started

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies using `npm install`.
4. Start the application using your preferred method (e.g., using a local server).

## License

This project is licensed under the MIT License.