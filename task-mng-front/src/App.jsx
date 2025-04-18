import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import Auth from './components/Auth';
import '../src/App.css'; // Assuming the same CSS file for consistency

const App = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    category: '',
    status: 'pending',
    priority: 'Medium',
  });
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const [filters, setFilters] = useState({
    category: '',
    status: '',
    search: '',
  });
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/tasks', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) {
        if (response.status === 401) {
          setToken(null);
          throw new Error('Unauthorized');
        }
        throw new Error('Failed to fetch tasks');
      }
      const data = await response.json();
      setTasks(data.map(task => ({ ...task, id: task._id })));
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    if (token) fetchTasks();
  }, [filters, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) throw new Error('Please login first');
    try {
      if (isEditing) {
        const response = await fetch(`http://localhost:5000/api/tasks/${editTaskId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify(task),
        });
        if (!response.ok) throw new Error('Failed to update task');
        const updated = await response.json();
        setTasks(tasks.map(t => (t.id === editTaskId ? { ...updated, id: updated._id } : t)));
        setIsEditing(false);
        setEditTaskId(null);
      } else {
        const response = await fetch('http://localhost:5000/api/tasks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify(task),
        });
        if (!response.ok) throw new Error('Failed to add task');
        const newTask = await response.json();
        setTasks([...tasks, { ...newTask, id: newTask._id }]);
      }
      setTask({ title: '', description: '', category: '', status: 'pending', priority: 'Medium' });
    } catch (error) {
      console.error(error);
      alert(`Error: ${error.message}`);
    }
  };

  const handleEdit = (task) => {
    setTask(task);
    setIsEditing(true);
    setEditTaskId(task.id);
  };

  const handleDelete = async (id) => {
    if (!token) throw new Error('Please login first');
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error('Failed to delete task');
      setTasks(tasks.filter(t => t.id !== id));
    } catch (error) {
      console.error(error);
      alert(`Error: ${error.message}`);
    }
  };

  const handleToggleStatus = async (task) => {
    if (!token) throw new Error('Please login first');
    const newStatus = task.status === 'pending' ? 'completed' : 'pending';
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${task.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ ...task, status: newStatus }),
      });
      if (!response.ok) throw new Error('Failed to toggle status');
      const updated = await response.json();
      setTasks(tasks.map(t => (t.id === task.id ? { ...updated, id: updated._id } : t)));
    } catch (error) {
      console.error(error);
      alert(`Error: ${error.message}`);
    }
  };

  const handleLogout = () => {
    setToken(null);
  };

  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter(t => t.status === 'pending').length;
  const completedTasks = tasks.filter(t => t.status === 'completed').length;

  return (
    <Router>
      <div className="app-container">
        <div className="header">
          <h1 className="app-title">Task Manager</h1>
          {token && (
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          )}
        </div>
        <Routes>
          <Route
            path="/tasks"
            element={
              token ? (
                <>
                  <div className="dashboard">
                    <h2 className="dashboard-title">Dashboard</h2>
                    <div className="dashboard-grid">
                      <div className="dashboard-card total-tasks">
                        <p className="dashboard-card-title">Total Tasks</p>
                        <p className="dashboard-card-value">{totalTasks}</p>
                      </div>
                      <div className="dashboard-card pending-tasks">
                        <p className="dashboard-card-title">Pending Tasks</p>
                        <p className="dashboard-card-value">{pendingTasks}</p>
                      </div>
                      <div className="dashboard-card completed-tasks">
                        <p className="dashboard-card-title">Completed Tasks</p>
                        <p className="dashboard-card-value">{completedTasks}</p>
                      </div>
                    </div>
                  </div>
                  <TaskFilter filters={filters} setFilters={setFilters} />
                  <TaskForm task={task} setTask={setTask} handleSubmit={handleSubmit} isEditing={isEditing} />
                  <TaskList
                    tasks={tasks}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    handleToggleStatus={handleToggleStatus}
                  />
                </>
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
          <Route path="/auth" element={<Auth setToken={setToken} />} />
          <Route path="/" element={<Navigate to="/auth" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;