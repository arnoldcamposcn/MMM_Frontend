import React from 'react'
import './index.css'
import './i18n'
import ReactDOM from "react-dom/client";
import AppNavigator from './Navigation/AppNavigator.tsx'

// Swiper CSS imports
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <AppNavigator />
  </React.StrictMode>,
)


