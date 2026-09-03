import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './AppClean.jsx'
import { SeoRouter } from './components/SeoRouter.jsx'
import './index.css'
import './roadmap-fix.css'
import './footer-fix.css'
import './footer-navy-final.css'
import './footer-clean.css'
import './pastel-palette.css'
import './pastel-navy-final.css'
import './footer-social-fix.css'
import './hero-final-fix.css'

function Root(){
  const seoPage=SeoRouter()
  return seoPage || <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><Root /></React.StrictMode>)
