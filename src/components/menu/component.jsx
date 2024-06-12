/* eslint-disable react/jsx-key */
import { DishContainer } from "../dish/container";

export const Menu = ({ menuIds }) => {
  return (
    <ul>
      {menuIds?.map((dishId) => (
        <li>
          <DishContainer dishId={dishId} />
        </li>
      ))}
    </ul>
  );
};
