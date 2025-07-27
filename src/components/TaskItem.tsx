import type { TaskItemData } from "../types/TaskItemData"

interface TaskItemProps {
    data: TaskItemData;
    removeTask: (taskId: number) => void;
    toggleTaskCheck: (taskToToggleCheckId: number) => void;
}

function TaskItem({ data, removeTask, toggleTaskCheck }: TaskItemProps) {
    return (
        <li>
            <span>{data.isChecked ? <s>{data.mainText}</s> : data.mainText}</span>
            <button onClick={() => removeTask(data.id)}>delete</button>
            <button onClick={() => toggleTaskCheck(data.id)}>{data.isChecked ? 'uncheck' : 'check'}</button>
        </li>
    )
}

export default TaskItem
