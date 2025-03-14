# Popeye React Communication App

## Description
Popeye is a React-based communication application designed to facilitate real-time messaging. It leverages `socket.io` for real-time communication and provides basic authentication features.

## Project Structure
The project directory is structured as follows:

```
nprtvx-popeye/
├── package.json
├── public/
│   └── index.html
├── server/
│   └── index.js
├── src/
│   ├── App.css
│   ├── App.js
│   ├── firebase.js (Removed)
│   ├── index.js
│   ├── components/
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   └── Messages.js
│   ├── contexts/
│   │   └── AuthContext.js
│   └── pages/
│       ├── AboutPage.js
│       ├── HomePage.js
│       ├── LoginPage.js
│       └── SignupPage.js
└── .github/
    └── workflows/
        └── deploy.yml
```

## Installation and Setup

### Prerequisites
- Node.js (v22 or later)
- npm (Node Package Manager)

### Steps

1. **Clone the repository:**
    ```sh
    git clone https://github.com/nprtvx/popeye.git
    cd popeye
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Run the server:**
    ```sh
    cd server
    node index.js
    ```

4. **Start the React application:**
    ```sh
    cd ..
    npm start
    ```

## Deployment
This project uses GitHub Actions for Continuous Deployment to GitHub Pages. The workflow file `.github/workflows/deploy.yml` is configured to deploy the application whenever changes are pushed to the `main` branch.

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run test`: Launches the test runner in the interactive watch mode.
- `npm run eject`: Removes the single build dependency from your project.
- `npm run deploy`: Deploys the build folder to GitHub Pages.

## Authentication
The application uses a simple in-memory authentication system provided by the `AuthContext` context.

## Real-time Messaging
Real-time messaging is facilitated using `socket.io`. The server listens for incoming messages and broadcasts them to all connected clients.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the ISC License. See the `LICENSE` file for details.

## Contact
Author: eightnineteight@gmail.com
