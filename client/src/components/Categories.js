import Badge from './ui/Badge.styled';
import List from './ui/List';
import ListItem from './ui/ListItem.styled';
import Sidebar from './ui/Sidebar.styled';
import ToggleButton from './ui/ToggleButton';

function Categories({
  categories,
  filterCategory,
  setFilterCategory,
  displayCompletedTask,
  onToggleCompleted,
}) {
  const categoryItems = categories.map((category) => (
    <ListItem
      key={category.name}
      selected={filterCategory === category.name}
      onClick={() => {
        if (category.name === filterCategory) {
          // remove category filter if double click
          setFilterCategory(undefined);
        } else {
          setFilterCategory(category.name);
        }
      }}
    >
      <p>{category.name}</p>
      <Badge>{category.count}</Badge>
    </ListItem>
  ));

  return (
    <Sidebar>
      <h2>Categories</h2>
      <List>{categoryItems}</List>
      <ToggleButton width="100%" onClick={onToggleCompleted}>
        {displayCompletedTask ? 'Hide completed' : 'Show completed'}
      </ToggleButton>
    </Sidebar>
  );
}
export default Categories;
