import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1. Import Provider from react-redux
import { Provider } from 'react-redux'

// 2. Import the Redux store
import store from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 3. Wrap App with Provider and pass store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
