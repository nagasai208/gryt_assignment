
import './App.css';
import ListOfTodos from './components/body/ListOftodos'
import SelectedMonth from './components/header/SelectedMonth/SelectedMonth';
import WeekSchedule from './components/header/Weeks/Weeks';


function App() {
  return (
    <div>
      <SelectedMonth />
      <WeekSchedule />
      <ListOfTodos />
    </div>
  );
}

export default App;
