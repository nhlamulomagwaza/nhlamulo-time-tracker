import React, { useState, createContext } from 'react';
import type { TimeEntry } from '../types';


export interface AppContextType {
  entries: TimeEntry[];
  taskName: string | '';
  hours: number | '';
  setTaskName: React.Dispatch<React.SetStateAction<string>>;
  setHours: React.Dispatch<React.SetStateAction<number | ''>>;
  setEntries: React.Dispatch<React.SetStateAction<TimeEntry[]>>;
}


export const AppContext = createContext<AppContextType | undefined>(undefined);

const TimeEntriesContext: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [entries, setEntries] = useState<TimeEntry[]>([]);
  const [taskName, setTaskName] = useState<string | ''>('');
const [hours, setHours] = useState<number | ''>('');

  return (
    <AppContext.Provider value={{ entries, setEntries,
     taskName,setTaskName, hours, setHours }}>
      {children}
    </AppContext.Provider>
  );
};

export default TimeEntriesContext;
