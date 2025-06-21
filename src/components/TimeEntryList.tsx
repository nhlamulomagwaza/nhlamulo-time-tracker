// src/components/TimeEntryList.tsx
import React, { useState } from 'react';
import EditEntry from './EditEntry'; // make sure this path is correct
import type { TimeEntry } from '../types';
import '../styles/components/list.scss';

const TimeEntryList = () => {
  const [entries, setEntries] = useState<TimeEntry[]>([
    { id: '1', task: 'Clean Kitchen', hours: 5, createdAt: '2025-06-21' },
    { id: '2', task: 'Code for 2 hours', hours: 2, createdAt: '2025-06-20' },
  ]);

  const [editingEntry, setEditingEntry] = useState<TimeEntry | null>(null);

  const handleEditClick = (entry: TimeEntry) => {
    setEditingEntry(entry);
  };

  const handleCloseModal = () => {
    setEditingEntry(null);
  };

  return (
    <section className="time-entries-list">
      <div className="time-entry-item-header">
        <div className="item-header">Date Created</div>
        <div className="item-header">Task Name</div>
        <div className="item-header">Hours Worked</div>
        <div className="item-header">Actions</div>
      </div>

      {entries.map((entry) => (
        <div key={entry.id} className="time-entry-item">
          <div>{entry.createdAt}</div>
          <div>{entry.task}</div>
          <div>{entry.hours}</div>
          <div className="edit-delete">
            <div className="edit" onClick={() => handleEditClick(entry)}>Edit</div>
            <div className="delete">Delete</div>
          </div>
        </div>
      ))}

      {editingEntry && (
        <EditEntry
          entry={editingEntry}
          onSave={() => {}}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default TimeEntryList;
