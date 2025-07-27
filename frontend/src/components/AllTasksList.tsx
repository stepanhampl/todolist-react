import type { TaskItemData } from '../types/TaskItemData.ts'
import TaskItem from './TaskItem.tsx';

interface AllTasksListProps {
    allTasks: TaskItemData[];
    removeTask: (taskToRemoveId: number) => void;
}

function AllTasksList({ allTasks, removeTask }: AllTasksListProps) {
    console.log(allTasks)
    
    return (
        <ul>
            {allTasks.map((taskData, index) => (
                <TaskItem key={index} data={taskData} removeTask={removeTask} />
            ))}
        </ul>
    )
}

export default AllTasksList
