import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StarRaeng from './StarRaeng';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />
    {/*<StarRaeng maxReting={5} messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} />
     <StarRaeng size={24} color="red" className="test" defaultRating={2} />*/}

  </React.StrictMode>
);

