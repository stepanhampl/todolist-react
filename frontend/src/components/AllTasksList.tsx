import type { TaskItemData } from '../types/TaskItemData.ts'
import TaskItem from './TaskItem.tsx';

interface AllTasksListProps {
    allTasks: TaskItemData[];
}

function AllTasksList({ allTasks }: AllTasksListProps) {
    console.log(allTasks)
    
    return (
        <ul>
            {allTasks.map((taskData, index) => (
            <TaskItem key={index} data={taskData} />
            ))}
        </ul>
    )
}

export default AllTasksList
