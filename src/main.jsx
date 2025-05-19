import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  ScrollButton  from './ScrollButton.jsx'

createRoot(document.getElementById('scroll-button')).render(
  <StrictMode>
    <ScrollButton />
  </StrictMode>
)
