import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ParallaxProvider } from 'react-scroll-parallax';

const rootElement = document.getElementById( 'root' );
const root = createRoot( rootElement );

root.render(
  <StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </StrictMode>
);
