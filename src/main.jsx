import { createRoot } from 'react-dom/client';
import { App } from './components/app/component.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/index.js';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
