import React, { useState, createContext } from 'react';
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

  entry: unknown; 
  onSave: (entry: unknown) => void;
  onClose: () => void;

 
 
  
}



export const AppContext = createContext<AppContextType | undefined>(undefined);

const TimeEntriesContext: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [entries, setEntries] = useState<TimeEntry[]>([]);
  const [taskName, setTaskName] = useState<string | ''>('');
const [hours, setHours] = useState<number | ''>('');
const [isEditOpen, setIsEditOpen] = useState(false);
const [editingEntry, setEditingEntry] = useState<TimeEntry | null>(null);

  return (
    <AppContext.Provider value={{ entries, setEntries,
     taskName,setTaskName, hours, setHours,
     isEditOpen, setIsEditOpen, editingEntry, setEditingEntry }}>
      {children}
    </AppContext.Provider>
  );
};

export default TimeEntriesContext;
