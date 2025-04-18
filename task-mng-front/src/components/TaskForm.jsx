import React from 'react';
import '../components/taskform.css'; // Assuming the same CSS file for consistency

const TaskForm = ({ task, setTask, handleSubmit, isEditing }) => {
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        <label className="form-label">Title</label>
        <input
          type="text"
          placeholder="Task Title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Description</label>
        <textarea
          placeholder="Task Description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          className="form-textarea"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Category</label>
        <input
          type="text"
          placeholder="Category (e.g., Work, Personal)"
          value={task.category}
          onChange={(e) => setTask({ ...task, category: e.target.value })}
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Status</label>
        <select
          value={task.status}
          onChange={(e) => setTask({ ...task, status: e.target.value })}
          className="form-select"
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Priority</label>
        <select
          value={task.priority}
          onChange={(e) => setTask({ ...task, priority: e.target.value })}
          className="form-select"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <button type="submit" className="task-button">
        {isEditing ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;