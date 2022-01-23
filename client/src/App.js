import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './components/ui/Theme.styled';
import Page from './components/ui/Page.styled';
import Categories from './components/Categories';
import Todos from './components/Todos';
import { getTodos } from './services/api';

function App() {
  const [todos, setTodos] = useState([]);
  const [displayCompletedTask, setDisplayCompletedTask] = useState(false);
  const [filterCategory, setFilterCategory] = useState(undefined);

  useEffect(() => {
    // populate todos from database
    async function getData() {
      const dbRes = await getTodos();
      if (dbRes?.length) {
        const sorted = dbRes.sort((a, b) => a.id - b.id);
        setTodos(sorted);
      }
    }
    getData();
  }, []);

  // show all todos if user selected to show done, otherwise only show not done
  const activeTodos = todos.filter(
    (task) => displayCompletedTask || !task.done
  );

  const categories = activeTodos.length > 0 ? getCategories(activeTodos) : [];

  const filteredTodos = activeTodos.filter((task) => {
    let catName = task.category || 'Other';
    return filterCategory ? catName === filterCategory : true;
  });

  return (
    <ThemeProvider theme={theme}>
      <Page>
        <Categories
          categories={categories}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          displayCompletedTask={displayCompletedTask}
          onToggleCompleted={() =>
            setDisplayCompletedTask(!displayCompletedTask)
          }
        />
        <Todos tasks={filteredTodos} setTasks={setTodos} />
      </Page>
    </ThemeProvider>
  );
}

export default App;

function getCategories(todos) {
  // return array of {namecategory: #tasks}
  const categoryCounts = {};
  todos
    .map((todo) => todo.category)
    .forEach((category) => {
      let catName = category || 'Other';
      if (categoryCounts[catName]) categoryCounts[catName]++;
      else categoryCounts[catName] = 1;
    });

  const categories = Object.entries(categoryCounts).map((arr) => ({
    name: arr[0],
    count: arr[1],
  }));

  return categories;
}
