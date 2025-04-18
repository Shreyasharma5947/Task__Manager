import React from 'react';
import '../components/tasklist.css'; // Assuming the same CSS file for consistency

const TaskList = ({ tasks, handleEdit, handleDelete, handleToggleStatus }) => {
  return (
    <div className="task-list-container">
      <h2 className="task-list-title">Task List</h2>
      {tasks.length === 0 ? (
        <p className="no-tasks-message">No tasks available.</p>
      ) : (
        <ul className="task-list">
          {tasks.map(task => (
            <li key={task.id} className="task-item">
              <div className="task-details">
                <h3 className="task-title">{task.title}</h3>
                <p className="task-description">{task.description}</p>
                <p className="task-meta">Category: {task.category}</p>
                <p className="task-meta">Status: {task.status}</p>
                <p className="task-meta">Priority: {task.priority}</p>
              </div>
              <div className="task-actions">
                <button
                  onClick={() => handleToggleStatus(task)}
                  className={`toggle-status-button ${task.status === 'pending' ? 'toggle-completed' : 'toggle-pending'}`}
                >
                  {task.status === 'pending' ? 'Mark Completed' : 'Mark Pending'}
                </button>
                <button onClick={() => handleEdit(task)} className="edit-button">
                  Edit
                </button>
                <button onClick={() => handleDelete(task.id)} className="delete-button">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;