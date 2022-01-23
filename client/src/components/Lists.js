import Badge from './ui/Badge.styled';
import ListItem from './ui/ListItem.styled';
import Sidebar from './ui/Sidebar.styled';

function Lists({ lists, selectedList, setSelectedList }) {
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
      {listItems}
    </Sidebar>
  );
}
export default Lists;
