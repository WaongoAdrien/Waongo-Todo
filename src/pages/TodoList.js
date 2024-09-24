import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const TodoList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Complete Final Exam", completed: false },
    ]);

    const [completedTasks, setCompletedTasks] = useState([
        { id: 2, text: "Learn Firefighting", completed: false },
    ]);

    const addTask = (text) => {
        const newTask = { id: uuidv4(), text, completed: false };// need to installl uuidv4
        setTasks([...tasks, newTask]);
    };

    const markAsCompleted = (taskId) => {
        const taskToComplete = tasks.find(task => task.id === taskId);
        if (taskToComplete) {
            taskToComplete.completed = true;
            setCompletedTasks([...completedTasks, taskToComplete]);
            setTasks(tasks.filter(task => task.id !== taskId));
        }
    };

    const removeTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    const removeCompTask = (completedTaskId) => {
        setCompletedTasks((prevCompletedTasks) =>
            prevCompletedTasks.filter((completedTask) => completedTask.id !== completedTaskId)
        );
    };

    return (
        <div className="container">
            <h2>TO DO LIST</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Task Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.text}</td>
                            <td>
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
                                    className="button-space ms-2"
                                    variant="outline-danger"
                                    size="sm"
                                >
                                    Remove
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <form
                className="mt-4"
                onSubmit={(e) => {
                    e.preventDefault();
                    const newTaskText = e.target.task.value;
                    addTask(newTaskText);
                    e.target.task.value = "";
                }}
            >
                <input type="text" name="task" className="form-control" placeholder="Enter Your New Task" />
                <br />
                <Button variant="primary" size="lg" type="submit">
                    Add task
                </Button>
            </form>

            <br />
            <h2>COMPLETED TASKS</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Completed Task</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {completedTasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.text}</td>
                            <td >
                                <Button
                                    onClick={() => removeCompTask(task.id)}
                                    className="button-space"
                                    variant="outline-danger"
                                    size="sm"
                                >
                                    Remove
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;
