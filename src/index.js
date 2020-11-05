import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const validate = () => {
  let answer = '';
  do {
    answer = prompt("when did this couple first meet?", "mmmmdd");
  } while (answer !== "aug18");
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
validate();




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA