import AllTasksList from './AllTasksList.tsx'
import AddTaskForm from './AddTaskForm.tsx'
import type { TaskItemData } from '../types/TaskItemData.ts'
import { useState } from 'react';


function ToDoListApp() {
    
    const [allTasks, setAllTasks] = useState<TaskItemData[]>([]);
    let nextId = 0;
    const createTask = (mainText: string) => {
        const newTask: TaskItemData = {
                id: nextId++,
                mainText: mainText,
                isChecked: false,
            };
        setAllTasks([...allTasks, newTask])
    }

    return (
        <>
            <h1>ToDo List</h1>
            <AllTasksList allTasks={allTasks}/>
            <AddTaskForm createTask={createTask} allTasks={allTasks}/>
        </>
    )
}

export default ToDoListApp
