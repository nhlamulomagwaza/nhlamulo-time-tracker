// src/components/TimeEntryList.tsx
import React, { useContext, useState } from 'react';
import EditEntry from './EditEntry';
import { AppContext, type AppContextType } from '../store/TimeEntriesContext.tsx';
import '../styles/components/list.scss';
import type { TimeEntry } from '../types';

const TimeEntryList = () => {
  
  const { entries, deleteTimeEntry, updateTimeEntry, setEditingEntry: setContextEditingEntry } = useContext(AppContext as React.Context<AppContextType>);

  const [localEditingEntry, setLocalEditingEntry] = useState<TimeEntry | null>(null);

  const handleEditClick = (entry: TimeEntry) => {
    setLocalEditingEntry(entry);
  };

  const handleCloseModal = () => {
    setLocalEditingEntry(null);
  };

  const handleDeleteClick = (id: string) => {
    deleteTimeEntry(id);
  };

  const handleSaveEditedEntry = (updatedEntry: TimeEntry) => {
    updateTimeEntry(updatedEntry); 
    setLocalEditingEntry(null); 
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
          <div>{entry.dateCreated}</div>
          <div>{entry.taskName}</div>
          <div>{entry.hours}</div>
          <div className="edit-delete">
            <div className="edit" onClick={() => handleEditClick(entry)}>Edit</div>
            <div className="delete" onClick={() => handleDeleteClick(entry.id)}>Delete</div>
          </div>
        </div>
      ))}

      {localEditingEntry && (
        <EditEntry
          entry={localEditingEntry}
          onSave={handleSaveEditedEntry} 
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default TimeEntryList;