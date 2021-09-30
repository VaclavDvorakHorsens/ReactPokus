//import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

const name = 'Brad'
const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Doctors Appointment', day: 'Feb 5h at 2:30', reminder: true },
    { id: 2, text: 'School Appointment', day: 'Feb 6h at 5:30', reminder: true },
    { id: 3, text: 'Schopping Appointment', day: 'Feb 7h at 4:30', reminder: false }
  ])


  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
      setTasks(tasks.map((task)=>task.id===id ? {...task, reminder: !task.reminder}: task))
  }

  return (
    <div className="App">
      <h1>Hello 1 {name}</h1>
      <br />
      <Header title='aaaa' />
      {tasks.length > 0 ? <Tasks title='aaaa' tasks={tasks} onDelete={deleteTask}
        onToggle={toggleReminder} /> : 'No Tasks'}
    </div>
  );
}

export default App;
