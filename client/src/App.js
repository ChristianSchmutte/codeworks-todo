import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './components/ui/Theme.styled';
import Page from './components/ui/Page.styled';
import Lists from './components/Lists';
import Todos from './components/Todos';
import mockTasks from './mock';

function App() {
  const [tasks, setTasks] = useState(mockTasks);
  const [selectedList, setSelectedList] = useState();

  const lists = getLists(tasks);

  const selectedTasks = tasks.filter((task) => {
    let catName = task.category || 'Other';
    return selectedList ? catName === selectedList : true;
  });

  return (
    <ThemeProvider theme={theme}>
      <Page>
        <Lists
          lists={lists}
          selectedList={selectedList}
          setSelectedList={setSelectedList}
        />
        <Todos tasks={selectedTasks} setTasks={setTasks} />
      </Page>
    </ThemeProvider>
  );
}

export default App;

function getLists(tasks) {
  // return array of task:count based on tasks
  const listCount = {};
  tasks
    .map((task) => task.category)
    .forEach((category) => {
      let catName = category || 'Other';
      if (listCount[catName]) listCount[catName]++;
      else listCount[catName] = 1;
    });

  const listArr = Object.entries(listCount).map((arr) => ({
    name: arr[0],
    count: arr[1],
  }));

  return listArr;
}
