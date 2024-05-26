import { createRoot } from 'react-dom/client';
import { restaurants } from './mocks/mock.js';
import { Header } from './components/header/component';
import { Footer } from './components/footer/component';
import { Restaurants } from './components/restaurants/component';

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <Header>Главная</Header>
    <main>
      { Boolean(restaurants.length) && <Restaurants restaurants={restaurants} />}
    </main>
    <Footer>Футер</Footer>
  </>
);
