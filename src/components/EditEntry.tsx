// src/components/EditEntry.tsx
import React, { useState, useEffect } from 'react';
import type { TimeEntry } from '../types';
import '../styles/components/edit.scss';

interface EditEntryProps {
  entry: TimeEntry;
  onSave: (updated: TimeEntry) => void;
  onClose: () => void;
}

const EditEntry: React.FC<EditEntryProps> = ({ entry, onSave, onClose }) => {
  const [taskName, setTaskName] = useState(entry.task);
  const [hours, setHours] = useState(entry.hours);

  useEffect(() => {
    setTaskName(entry.task);
    setHours(entry.hours);
  }, [entry]);

  const handleSave = () => {
    if (!taskName.trim() || hours <= 0) return;
    onSave({ ...entry, task: taskName.trim(), hours });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit Task</h2>
        <input
          className="modal-input"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task name"
        />
        <input
          className="modal-input"
          type="number"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          placeholder="Hours"
        />
        <div className="modal-actions">
          <button className="btn btn-save" onClick={handleSave}>Save</button>
          <button className="btn btn-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditEntry;
