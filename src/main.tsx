
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/critical.css'; // Load critical CSS first
import './index.css';

// Create a root container if it doesn't exist yet
const rootElement = document.getElementById("root");

// Add a loading state before React initializes
if (!rootElement?.innerHTML) {
  const loadingDiv = document.createElement('div');
  loadingDiv.className = 'initial-loader';
  rootElement?.appendChild(loadingDiv);
}

// Preload key fonts
const preloadFont = (url: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'font';
  link.href = url;
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
};

// Preload Inter font
preloadFont('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

// Render the app once DOM is ready
if (rootElement) {
  // Use requestIdleCallback for non-critical initialization
  const renderApp = () => {
    const root = createRoot(rootElement);
    root.render(<App />);
  };

  if (window.requestIdleCallback) {
    window.requestIdleCallback(renderApp);
  } else {
    setTimeout(renderApp, 1);
  }
} else {
  console.error("Root element not found");
}
