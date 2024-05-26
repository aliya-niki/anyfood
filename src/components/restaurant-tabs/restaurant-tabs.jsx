/* eslint-disable react/jsx-key */
import { Tab } from "../tab/tab";

export const RestaurantTabs = ({ restaurants, onTabClick, activeTabId }) => {
  return (
    <div>
      {restaurants?.map(({name, id}) => {
        return (
          <Tab 
            name={name} 
            onTabClick={() => onTabClick(id)} 
            isActive={activeTabId === id}
          />
        );
      })}
    </div>
  );
};
