export interface TimeEntry {
  id: string;
  task: string;
  hours: number;
  createdAt: Date;
}


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
  deleteTimeEntry: (id: string) => void;
 
  isTimerRunning: boolean;
  currentTimerTaskName: string;
  elapsedSeconds: number;
  startTimer: (task: string) => void;
  stopTimer: () => void;
  resetTimer: () => void;
  
}