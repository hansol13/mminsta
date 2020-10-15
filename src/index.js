import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const validate = () => {
  let answer = prompt("when did this couple first meet?", "mmmmdd");
  if (answer === "aug18") {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
  else {
    alert("incorrect - refresh to try again");
  }
}
validate();




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA