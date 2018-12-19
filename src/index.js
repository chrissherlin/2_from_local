// Import react and reactDOM
import React from 'react'; // go find react directory from node modules and get all from there
import ReactDOM from 'react-dom'; //these are ES2015, if you see require, it's a commonJS module

// Create a react component
const App = () => {
    return <div>Hello!</div>
}
// Take the react component and show it on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)