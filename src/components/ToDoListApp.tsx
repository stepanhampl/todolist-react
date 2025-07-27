import AllTasksList from './AllTasksList.tsx'
import AddTaskForm from './AddTaskForm.tsx'
import type { TaskItemData } from '../types/TaskItemData.ts'
import { useState } from 'react';


function ToDoListApp() {

    const [allTasks, setAllTasks] = useState<TaskItemData[]>([]);
    const [nextId, setNextId] = useState<number>(0);
    const createTask = (mainText: string) => {
        const newTask: TaskItemData = {
            id: nextId,
            mainText: mainText,
            isChecked: false,
        };
        setNextId(nextId + 1)
        setAllTasks([...allTasks, newTask])
    }

    const removeTask = (taskToRemoveId: number) => {
        setAllTasks(allTasks.filter((task: TaskItemData) => { task.id !== taskToRemoveId }));
    };

    const toggleTaskCheck = (taskToToggleCheckId: number) => {
        const taskToCheck = allTasks.find((task: TaskItemData) => task.id === taskToToggleCheckId);
        if (taskToCheck) {
            taskToCheck.isChecked = !taskToCheck.isChecked;
            setAllTasks(allTasks.map(task => task.id === taskToToggleCheckId ? taskToCheck : task))
        } else {
            throw Error('Task was not found by ID')
        }
    }

    return (
        <>
            <h1>ToDo List</h1>
            <AllTasksList allTasks={allTasks} removeTask={removeTask} toggleTaskCheck={toggleTaskCheck} />
            <AddTaskForm createTask={createTask} />
        </>
    )
}

export default ToDoListApp
