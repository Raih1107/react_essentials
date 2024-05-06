Day 1 🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹




➡️ React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

➡️ React component names must always start with a capital letter, while HTML tags must be lowercase.






❓How do app.jsx and index.jsx work together?

➡️index.jsx is responsible for setting up the React environment, importing and rendering the root component (App), and attaching it to the DOM. On the other hand, App.jsx defines the structure and behavior of the main application component, which may include other components, hooks, context providers, or any other React features needed for your application.


1) index.jsx:
index.jsx is the entry point of your React application. It usually resides in the src directory of your project.
This file is responsible for rendering the root component of your application into the DOM.
It imports necessary dependencies, such as React and ReactDOM.
It imports the main component of your application (often called App or similar).
It renders the root component using ReactDOM.render().

Code:
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


2) App.jsx (or App.js):
App.jsx (or App.js) is a React component that serves as the root component of your application.
It can contain other components, handle routing, manage state, and handle application logic.
It typically imports other components, libraries, or assets needed for the application.

Code:
import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;





➡️ Using and outputting dynamic values
Use parenthese to do so