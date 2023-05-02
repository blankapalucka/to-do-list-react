import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                className={`tasks__item${task.done && hideDoneTasks ? " tasks__item--hidden" : ""}`}>
                <button className="tasks__buton tasks__button--toggleDone">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`task.done ? " tasks__content--done" : ""`}>
                    {task.content}
                </span>
                <button className="tasks__button--remove">🗑️</button>
            </li>
        ))}
    </ul>
);

export default Tasks;