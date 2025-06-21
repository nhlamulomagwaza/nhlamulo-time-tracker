import React, { useState, createContext, useRef, useEffect } from 'react';
import type { TimeEntry } from '../types';


export interface AppContextType {
  entries: TimeEntry[];
  taskName: string | '';
  hours: number | '';
  setTaskName: React.Dispatch<React.SetStateAction<string>>;
  setHours: React.Dispatch<React.SetStateAction<number | ''>>;
  setEntries: React.Dispatch<React.SetStateAction<TimeEntry[]>>;
  isEditOpen: boolean;
  setIsEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editingEntry: TimeEntry | null;
  setEditingEntry: React.Dispatch<React.SetStateAction<TimeEntry | null>>;
  addTimeEntry: (newTaskName: string, newHours: number) => void;
  entry: unknown; 
  onSave: (entry: unknown) => void;
  onClose: () => void;
  updateTimeEntry: (updatedEntry: TimeEntry) => void;
 
 
  
}



export const AppContext = createContext<AppContextType | undefined>(undefined);

const TimeEntriesContext: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
const [entries, setEntries] = useState<TimeEntry[]>(() => {
    try {
      const savedEntries = localStorage.getItem('timeEntries');
      return savedEntries ? JSON.parse(savedEntries) : [
        { id: '1', taskName: 'Clean Kitchen', hours: 3, dateCreated: '2025-06-20' },
        { id: '2', taskName: 'Code Next.js Project', hours: 1.5, dateCreated: '2025-06-21' },
      ];
    } catch (error) {
      console.error("Failed to load entries from local storage:", error);
     
      return [
        { id: '1', taskName: 'Clean Kitchen', hours: 3, dateCreated: '2025-06-20' },
        { id: '2', taskName: 'Code Next.js Project', hours: 1.5, dateCreated: '2025-06-21' },
      ];
    }
  });
  const [taskName, setTaskName] = useState<string | ''>('');
const [hours, setHours] = useState<number | ''>('');
const [isEditOpen, setIsEditOpen] = useState(false);
const [editingEntry, setEditingEntry] = useState<TimeEntry | null>(null);

const nextId = useRef(1);
  const addTimeEntry = (newTaskName: string, newHours: number) => {
    const newEntry: TimeEntry = {
      id: nextId.current.toString(), 
      taskName: newTaskName,
      hours: newHours,
      dateCreated: new Date().toISOString().split('T')[0], 
    };
    setEntries((prevEntries) => [...prevEntries, newEntry]);
    nextId.current += 1; 
  };

    useEffect(() => {
    try {
      localStorage.setItem('timeEntries', JSON.stringify(entries));
    } catch (error) {
      console.error("Failed to save entries to local storage:", error);
    }
  }, [entries]); 


   const updateTimeEntry = (updatedEntry: TimeEntry) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
   
        entry.id === updatedEntry.id ? updatedEntry : entry
      )
    );
  };

const deleteTimeEntry = (id: string) => {
    setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
  };



  const entry = editingEntry;
  const onSave = (entry: unknown) => {

  };
  const onClose = () => {
    setIsEditOpen(false);
    setEditingEntry(null);
  };

  return (
    <AppContext.Provider value={{
      entries,
      setEntries,
      taskName,
      setTaskName,
      hours,
      setHours,
      isEditOpen,
      setIsEditOpen,
      editingEntry,
      setEditingEntry,
      addTimeEntry,
      deleteTimeEntry,
      updateTimeEntry,
      entry,
      onSave,
      onClose
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default TimeEntriesContext;
