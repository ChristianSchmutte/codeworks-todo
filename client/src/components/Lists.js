import Badge from './ui/Badge.styled';
import List from './ui/List';
import ListItem from './ui/ListItem.styled';
import Sidebar from './ui/Sidebar.styled';
import ToggleButton from './ui/ToggleButton';

function Lists({
  lists,
  selectedList,
  setSelectedList,
  showDone,
  setShowDone,
}) {
  const listItems = lists.map((list) => (
    <ListItem
      key={list.name}
      selected={selectedList === list.name}
      onClick={() => {
        if (list.name === selectedList) {
          setSelectedList();
        } else {
          setSelectedList(list.name);
        }
      }}
    >
      <p>{list.name}</p>
      <Badge>{list.count}</Badge>
    </ListItem>
  ));

  return (
    <Sidebar>
      <h2>Categories</h2>
      <List>{listItems}</List>
      <ToggleButton width="100%" onClick={() => setShowDone((prior) => !prior)}>
        {showDone ? 'Hide completed' : 'Show completed'}
      </ToggleButton>
    </Sidebar>
  );
}
export default Lists;
