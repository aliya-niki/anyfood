/* eslint-disable react/jsx-key */
import { DishContainer } from "../dish/container";

export const Menu = ({ dishesIds }) => {
  return (
    <ul>
      {dishesIds?.map((dishId) => (
        <li>
          <DishContainer dishId={dishId} />
        </li>
      ))}
    </ul>
  );
};
