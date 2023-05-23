import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ResetStyle from './ResetStyle';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ResetStyle />
    <div className="wrap">
      <div className="home-left-area">Peeps</div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  </React.StrictMode>
);

reportWebVitals();
