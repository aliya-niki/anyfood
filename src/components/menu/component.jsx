/* eslint-disable react/jsx-key */
import { MenuItem } from "../menu-item/component";

export const Menu = ({ menu }) => {
  return (
    <ul>
      {menu.map((item) => (
        <li>
          <MenuItem menuItem={item} />
        </li>
      ))}
    </ul>
  );
};
