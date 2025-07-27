import type { TaskItemData } from "../types/TaskItemData"

interface TaskItemProps {
    data: TaskItemData;
    removeTask: (taskId: number) => void;
}

function TaskItem({ data, removeTask }: TaskItemProps) {

    function handleRemove(_event: any): void {
        removeTask(data.id)
    }

    return (
        <li>
            <span>{data.isChecked ? <s>{data.mainText}</s> : data.mainText}</span>
            <button onClick={handleRemove}>delete</button>
            <button>{data.isChecked ? 'uncheck' : 'check'}</button>
        </li>
    )
}

export default TaskItem
