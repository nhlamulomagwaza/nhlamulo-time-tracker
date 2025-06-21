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
  // Local state for task name and hours
  const [taskName, setTaskName] = useState(entry.taskName);
  const [hours, setHours] = useState(entry.hours);

  // Update local state if a different entry is passed in (e.g. switching tasks)
  useEffect(() => {
    setTaskName(entry.taskName);
    setHours(entry.hours);
  }, [entry]);

  // Save updated entry after validation
  const handleSave = () => {
    if (!taskName.trim() || hours <= 0) {
      // Basic validation: required name and positive hours
      return;
    }

    // Save changes and close modal
    onSave({ ...entry, taskName: taskName.trim(), hours });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit Task</h2>

        {/* Task name input */}
        <input
          className="modal-input"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task name"
        />

        {/* Hours input */}
        <input
          className="modal-input"
          type="number"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          placeholder="Hours"
        />

        {/* Action buttons */}
        <div className="modal-actions">
          <button className="btn btn-save" onClick={handleSave}>Save</button>
          <button className="btn btn-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditEntry;
