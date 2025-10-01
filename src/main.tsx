import React from 'react'
import './index.css'
import ReactDOM from "react-dom/client";
import AppNavigator from './Navigation/AppNavigator.tsx'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <AppNavigator />
  </React.StrictMode>,
)
