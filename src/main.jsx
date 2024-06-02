import { createRoot } from 'react-dom/client';
import { restaurants } from './mocks/mock.js';
import { Header } from './components/header/component';
import { Footer } from './components/footer/component';
import { Restaurants } from './components/restaurants/component';
import { ScrollProgressBar } from './components/scroll-progress-bar/component';

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <Header>
      <ScrollProgressBar />
      Главная
    </Header>
    <main>
      { Boolean(restaurants.length) && <Restaurants restaurants={restaurants} />}
    </main>
    <Footer>Футер</Footer>
  </>
);
