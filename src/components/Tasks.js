import Task from './Task'

/*const tasks =[
{id:1, text:'Doctors Appointment',day:'Feb 5h at 2:30', reminder:true},
{id:2, text:'School Appointment',day:'Feb 6h at 5:30',reminder:true},
{id:3, text:'Schopping Appointment',day:'Feb 7h at 4:30',reminder:false}
] */

const a = { id: 4, text: 'Another Appointment', day: 'Feb 7h at 4:30', reminder: false }

const Tasks = ({ tasks, onDelete, onToggle }) => {
 



    return (
        <>     
            {       
                  tasks.map((task)=> (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}></Task>)) 
                //tasks.map((task)=> (<h3 key={task.id}> {task.text}</h3>))               
            }

        </>)
}

export default Tasks
