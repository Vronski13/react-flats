import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App"

import '../assets/stylesheets/application.scss';

const Root = () => {
  return (
      <App />
  );
};

const root = document.getElementById('root');
ReactDOM.render(<Root/>, root);
