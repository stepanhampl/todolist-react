import type { TaskItemData } from '../types/TaskItemData.ts'
import TaskItem from './TaskItem.tsx';

interface AllTasksListProps {
    allTasks: TaskItemData[];
    removeTask: (taskToRemoveId: number) => void;
    toggleTaskCheck: (taskToToggleCheckId: number) => void;
}

function AllTasksList({ allTasks, removeTask, toggleTaskCheck }: AllTasksListProps) {
    return (
        <ul>
            {allTasks.map((taskData) => (
                <TaskItem key={taskData.id} data={taskData} removeTask={removeTask} toggleTaskCheck={toggleTaskCheck} />
            ))}
        </ul>
    )
}

export default AllTasksList
