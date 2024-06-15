import { AddReviewForm } from "../add-review-form/component";
import { MenuContainer } from "../menu/container";
import { ReviewsContainer } from "../reviews/container";

export const Restaurant = ({ restaurant }) => {
  const { name, id } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      
      <div>
        <h3>Меню</h3>
        <MenuContainer id={id} />
      </div>
      
      <div>
        <h3>Отзывы</h3>
        <ReviewsContainer id={id} />
      </div>

      <AddReviewForm />
    </div>
  );
};
