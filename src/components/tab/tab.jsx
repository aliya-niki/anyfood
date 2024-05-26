export const Tab = ({ name, onTabClick, isActive }) => {
  return (
    <button type="button" onClick={() => onTabClick()} disabled={isActive}>
      {name}
    </button>
  );
};
