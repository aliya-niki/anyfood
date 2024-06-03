import { createRoot } from 'react-dom/client';
import { restaurants } from './mocks/mock.js';
import { Restaurants } from './components/restaurants/component';
import { Layout } from './components/layout/component.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <Layout>
      { Boolean(restaurants.length) && <Restaurants restaurants={restaurants} />}
    </Layout>
  </>
);
