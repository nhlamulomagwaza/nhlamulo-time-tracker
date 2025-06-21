import React, {
  useState,
  createContext,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import type { TimeEntry, AppContextType } from '../types';

// Create App Context with default undefined (will be used with a provider)
export const AppContext = createContext<AppContextType | undefined>(undefined);

const TimeEntriesContext: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  /* --------------------------------------
     State: Time entries & form input values
  --------------------------------------- */

  const [entries, setEntries] = useState<TimeEntry[]>(() => {
    try {
      const savedEntries = localStorage.getItem('timeEntries');
      return savedEntries
        ? JSON.parse(savedEntries)
        : [
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

  const [taskName, setTaskName] = useState<string>(''); // Current task input
  const [hours, setHours] = useState<number | ''>('');   // Current hours input

  const [isEditOpen, setIsEditOpen] = useState<boolean>(false); // Controls edit modal visibility
  const [editingEntry, setEditingEntry] = useState<TimeEntry | null>(null); // Entry being edited

  /* --------------------------------------
     Timer State
  --------------------------------------- */

  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [currentTimerTaskName, setCurrentTimerTaskName] = useState<string>(''); // Task name for timer
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);              // Timer counter

  const intervalRef = useRef<number | null>(null); // Stores the timer interval ID

  /* --------------------------------------
     Timer Functions
  --------------------------------------- */

  const startTimer = useCallback((task: string) => {
    if (isTimerRunning) {
      console.warn("Timer is already running. Stop it before starting a new one.");
      return;
    }

    setIsTimerRunning(true);
    setCurrentTimerTaskName(task);
    setElapsedSeconds(0); // Reset timer for a new task

    intervalRef.current = window.setInterval(() => {
      setElapsedSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
  }, [isTimerRunning]);

  const stopTimer = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsTimerRunning(false);
  }, []);

  const resetTimer = useCallback(() => {
    stopTimer();
    setElapsedSeconds(0);
    setCurrentTimerTaskName('');
  }, [stopTimer]);

  /* --------------------------------------
     CRUD: Entries
  --------------------------------------- */

 const nextId = useRef(
    (() => {
      if (entries.length === 0) {
             return 1;
      }
           const maxId = Math.max(...entries.map(entry => Number(entry.id) || 0));
      return maxId + 1;
    })()
  ); // Internal counter for generating new IDs for the tasks

  const addTimeEntry = (newTaskName: string, newHours: number) => {
    const newEntry: TimeEntry = {
      id: nextId.current.toString(),
      taskName: newTaskName,
      hours: newHours,
      dateCreated: new Date().toISOString().split('T')[0], // Format: YYYY-MM-DD
    };

    setEntries(prevEntries => [...prevEntries, newEntry]);
    nextId.current += 1;
  };

  const updateTimeEntry = (updatedEntry: TimeEntry) => {
    setEntries(prevEntries =>
      prevEntries.map(entry =>
        entry.id === updatedEntry.id ? updatedEntry : entry
      )
    );
  };

  const deleteTimeEntry = (id: string) => {
    setEntries(prevEntries => prevEntries.filter(entry => entry.id !== id));
  };

  // Persist entries to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('timeEntries', JSON.stringify(entries));
    } catch (error) {
      console.error("Failed to save entries to local storage:", error);
    }
  }, [entries]);

  /* --------------------------------------
     Edit Modal Handlers (no-op for now)
  --------------------------------------- */

  const entry = editingEntry;

  // Placeholder handler — possibly for form integration later
  const onSave = (_entry: unknown) => {
    // No logic provided
  };

  const onClose = () => {
    setIsEditOpen(false);
    setEditingEntry(null);
  };

  /* --------------------------------------
     Context Provider
  --------------------------------------- */
  return (
    <AppContext.Provider
      value={{
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
        onClose,
        isTimerRunning,
        currentTimerTaskName,
        elapsedSeconds,
        startTimer,
        stopTimer,
        resetTimer
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default TimeEntriesContext;
