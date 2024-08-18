import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App'
import './index.css'

createRoot(document.getElementById("root") as HTMLElement).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
  );
  

  
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
