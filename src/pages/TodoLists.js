import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

const TodoList = () => {
    // State for storing both active and completed tasks
    const [tasks, setTasks] = useState([
        { id: 1, text: "Complete React To-Do", completed: false },
    ]);

    const [completedTasks, setCompletedTasks] = useState([
        { idc: 1, text: "Learn React Hooks", completed: false },
    ]);

    // Function to add a new task
    const addTask = (text) => {
        const newTask = { id: tasks.length + 1, text, completed: false };
        setTasks([...tasks, newTask]);
    };

    // Function to mark a task as completed
    const markAsCompleted = (taskId) => {
        const taskToComplete = tasks.find(task => task.id === taskId);
        if (taskToComplete) {
            taskToComplete.completed = true;
            // Add the completed task to the completedTasks array
            setCompletedTasks([...completedTasks, taskToComplete]);
            // Remove the task from the tasks array
            setTasks(tasks.filter(task => task.id !== taskId));
        }
    };

    // Function to remove a task
    const removeTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    // Function to remove completed task
    const removeCompTask = (completedTaskId) => {
        setCompletedTasks((prevCompletedTasks) =>
            prevCompletedTasks.filter((completedTask) => completedTask.id !== completedTaskId)
        );
    };

    return (
        <div>
            <h2>My To Do List</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.text}
                        <Button
                            onClick={() => markAsCompleted(task.id)}
                            className="button-space"
                            variant="primary"
                            size="sm"
                        >
                            Mark as Completed
                        </Button>
                        <Button
                            onClick={() => removeTask(task.id)}
                            className="button-space"
                            variant="primary"
                            size="sm"
                        >
                            Remove
                        </Button>
                    </li>
                ))}
            </ul>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const newTaskText = e.target.task.value;
                    addTask(newTaskText);
                    e.target.task.value = "";
                }}
            >
                <input type="text" name="task" placeholder="Enter Your New Task" />
                <br />
                <Button variant="primary" size="lg" type="submit">
                    Add task
                </Button>
            </form>

            <br/>
            <h2>Completed Tasks</h2>
            <ul>
                {completedTasks.map((task) => (
                    <li key={task.id}>
                        {task.text}
                        <Button
                            onClick={() => removeCompTask(task.id)}
                            className="button-space"
                            variant="primary"
                            size="sm"
                        >
                            Remove
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
