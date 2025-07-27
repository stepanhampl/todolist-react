import type { TaskItemData } from "../types/TaskItemData"

interface TaskItemProps {
    data: TaskItemData;
}

function TaskItem({data}: TaskItemProps) {
    return (
        <li>
            <span>{data.isChecked ? <s>{data.mainText}</s> : data.mainText}</span>
            <button>delete</button>
            <button>{data.isChecked ? 'uncheck' : 'check'}</button>
        </li>
    )
}

export default TaskItem
