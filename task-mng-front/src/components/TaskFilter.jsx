import React from 'react';
import '../components/taskfiller.css'; // Assuming the same CSS file for consistency

const TaskFilter = ({ filters, setFilters }) => {
  return (
    <div className="filter-container">
      <div className="filter-group">
        <label className="form-label">Search by Title</label>
        <input
          type="text"
          placeholder="Search tasks..."
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          className="form-input"
        />
      </div>
      <div className="filter-group">
        <label className="form-label">Filter by Category</label>
        <input
          type="text"
          placeholder="Category (e.g., Work)"
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="form-input"
        />
      </div>
      <div className="filter-group">
        <label className="form-label">Filter by Status</label>
        <select
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          className="form-select"
        >
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default TaskFilter;