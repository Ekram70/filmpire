import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';

const rootElement = document.getElementById('root') as HTMLDivElement;

if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

const theme = createTheme({});

root.render(
  <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>
);
