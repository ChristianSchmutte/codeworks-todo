import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './components/ui/Theme.styled';
import Page from './components/ui/Page.styled';
import Lists from './components/Lists';
import Todos from './components/Todos';
import { getTodos } from './services/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showDone, setShowDone] = useState(false);
  const [selectedList, setSelectedList] = useState();

  useEffect(() => {
    async function getData() {
      const dbRes = await getTodos();
      if (dbRes?.length) {
        const sorted = dbRes.sort((a, b) => a.id - b.id);
        setTasks(sorted);
      }
    }
    getData();
  }, []);

  const activeTasks = tasks.filter((task) => showDone || !task.done);

  const lists = activeTasks.length > 0 ? getLists(activeTasks) : [];

  const selectedTasks = activeTasks.filter((task) => {
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
          showDone={showDone}
          setShowDone={setShowDone}
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
