import { useSelector } from "react-redux";
import { AddReviewForm } from "../add-review-form/component";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector((state) => state.restaurant.entities[restaurantId]); 
  
  if (!restaurant) {
    return;
  }

  const { name, menu, reviews } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      {Boolean(menu.length) && (
        <div>
          <h3>Меню</h3>
          <Menu menuIds={menu} />
        </div>
      )}
      {Boolean(reviews.length) && (
        <div>
        <h3>Отзывы</h3>
        <Reviews reviewsIds={reviews} />
      </div>
      )}
      <AddReviewForm />
    </div>
  );
};
