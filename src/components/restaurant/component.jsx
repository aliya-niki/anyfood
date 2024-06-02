import { AddReviewForm } from "../add-review-form/component";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return;
  }

  const {name, menu, reviews} = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      {Boolean(menu.length) && (
        <div>
          <h3>Меню</h3>
          <Menu menu={menu} />
        </div>
      )}
      {Boolean(reviews.length) && (
        <div>
        <h3>Отзывы</h3>
        <Reviews reviews={reviews} />
      </div>
      )}
      <AddReviewForm />
    </div>
  );
};
