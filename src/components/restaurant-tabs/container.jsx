import { useSelector } from "react-redux";
import { RestaurantTabs } from "./component";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";

export const RestaurantTabsContainer = ({ onTabClick, activeTabId }) => {
  const restaurantsIds = useSelector(selectRestaurantIds);

  return (
    <RestaurantTabs restaurantsIds={restaurantsIds} onTabClick={onTabClick} activeTabId={activeTabId} />
  );
};
