
import './App.css';
import ListOfTodos from './components/body/ListOftodos'
import SelectedMonth from './components/header/SelectedMonth/SelectedMonth';

function App() {
  return (
    <div>
      <SelectedMonth />
      <ListOfTodos />
    </div>
  );
}

export default App;
