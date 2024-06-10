/* eslint-disable react/jsx-key */
import { Dish } from "../dish/component";

export const Menu = ({ menuIds }) => {
  return (
    <ul>
      {menuIds?.map((dishId) => (
        <li>
          <Dish dishId={dishId} />
        </li>
      ))}
    </ul>
  );
};
