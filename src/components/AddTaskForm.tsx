import { useRef, type FormEvent } from "react"

interface AddTaskFormProps {
    createTask: (mainText: string) => void;
}

function AddTaskForm({ createTask }: AddTaskFormProps) {

    const inputRef = useRef<HTMLInputElement>(null);

    function hadnleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        let current = inputRef.current;
        if (current !== null && current.value.trim() != '') {
            createTask(current.value.trim());

            current.value = '';
        }
    }

    return (
        <form onSubmit={hadnleSubmit}>
            <input type="text" ref={inputRef} />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTaskForm
