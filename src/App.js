import './App.css';
import first from './first.jpg';
import { ToDoList } from './ToDoList';
import two from './two.jpg';

function App() {
  return (
    <div className="app">
      <div className="bigcontainer">
      <img src={first} alt='to do list' width='300px'/>
      </div>
      <div className="bigcontainer"><h1>To Do List</h1></div>
      <ToDoList/>
      <div className="bigcontainer">
      <img src={two} alt='to do girl' width='300px' />
      </div>
    </div>
  );
}

export default App;
