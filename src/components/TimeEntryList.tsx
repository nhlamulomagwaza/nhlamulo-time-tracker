// src/components/TimeEntryList.tsx

import React, { useContext, useState } from 'react';
import EditEntry from './EditEntry';
import { AppContext } from '../store/TimeEntriesContext.tsx';
import type { TimeEntry, AppContextType } from '../types';
import '../styles/components/list.scss';

const TimeEntryList: React.FC = () => {
  const {
    entries,
    deleteTimeEntry,
    updateTimeEntry,
   
  } = useContext(AppContext as React.Context<AppContextType>);

  const [localEditingEntry, setLocalEditingEntry] = useState<TimeEntry | null>(null);

  /* ------------------------------------------
     HANDLERS
  ------------------------------------------- */

  // Open edit modal for selected entry
  const handleEditClick = (entry: TimeEntry) => {
    setLocalEditingEntry(entry);
  };

  // Close modal without saving
  const handleCloseModal = () => {
    setLocalEditingEntry(null);
  };

  // Delete entry by ID
  const handleDeleteClick = (id: string) => {
    deleteTimeEntry(id);
  };

  // Save updated entry & close modal
  const handleSaveEditedEntry = (updatedEntry: TimeEntry) => {
    updateTimeEntry(updatedEntry);
    setLocalEditingEntry(null);
  };

  /* ------------------------------------------
     RENDER
  ------------------------------------------- */

  return (
    <section className="time-entries-list">
      {/* Table header (hidden on mobile via SCSS) */}
      <div className="time-entry-item-header">
        <div className="item-header">Date Created</div>
        <div className="item-header">Task Name</div>
        <div className="item-header">Hours Worked</div>
        <div className="item-header">Actions</div>
      </div>

      {/* No entries fallback */}
      {entries.length === 0 ? (
        <div className="no-entries">No entries yet.</div>
      ) : (
        // List all entries
        entries.map((entry) => (
          <div key={entry.id} className="time-entry-item">
            <div>{entry.dateCreated instanceof Date ? entry.dateCreated.toLocaleDateString() : entry.dateCreated}</div>
            <div>{entry.taskName}</div>
            <div>{entry.hours}</div>
            <div className="edit-delete">
              <div className="edit" onClick={() => handleEditClick(entry)}>Edit</div>
              <div className="delete" onClick={() => handleDeleteClick(entry.id)}>Delete</div>
            </div>
          </div>
        ))
      )}

      {/* Edit modal */}
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
