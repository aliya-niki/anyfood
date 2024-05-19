/* eslint-disable react/jsx-key */
import { createRoot } from 'react-dom/client';
import { restaurants } from './mocks/mock.js';
import { Header } from './components/header/component';
import { Footer } from './components/footer/component';
import { Restaurant } from './components/restaurant/component';

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <Header>Главная</Header>
    <main>
      <ul>
        {restaurants.map((restaurant) => (
          <li>
            <Restaurant restaurant={restaurant}/>
          </li>
        ))}
      </ul>
    </main>
    <Footer>Футер</Footer>
  </>
);
