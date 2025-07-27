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

    const removeTask = (taskToRemoveId: number) => {
        setAllTasks(allTasks.filter((task: TaskItemData) => { task.id != taskToRemoveId }));
    };


    return (
        <>
            <h1>ToDo List</h1>
            <AllTasksList allTasks={allTasks} removeTask={removeTask} />
            <AddTaskForm createTask={createTask} />
        </>
    )
}

export default ToDoListApp
