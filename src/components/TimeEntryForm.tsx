import { useContext, useState } from "react";
import { AppContext } from "../store/TimeEntriesContext.tsx";
import { type AppContextType } from "../types/index.ts";
import toast from "react-hot-toast";
import '../styles/components/form.scss';

const TimeEntryForm: React.FC = () => {
  const {
    taskName,
    setTaskName,
    hours,
    setHours,
    addTimeEntry,
  } = useContext(AppContext as React.Context<AppContextType>);

  const [taskNameError, setTaskNameError] = useState<boolean>(false);
  const [hoursError, setHoursError] = useState<boolean>(false);

  /**
   * Validates input values before submitting
   */
  const inputsValidation = (): boolean => {
    let isValid = true;

    // Reset validation state
    setTaskNameError(false);
    setHoursError(false);

    const hoursAsNumber = Number(hours);

    // If both fields are invalid
    if (!taskName.trim() && (hours === '' || isNaN(hoursAsNumber) || hoursAsNumber <= 0)) {
      toast.error('Please fill in all the fields');
      setTaskNameError(true);
      setHoursError(true);
      isValid = false;
    } else {
      // Check task name
      if (!taskName.trim()) {
        toast.error('Please enter a task name');
        setTaskNameError(true);
        isValid = false;
      }

      // Check hours
      if (hours === '' || isNaN(hoursAsNumber) || hoursAsNumber <= 0) {
        toast.error('Number of hours cannot be negative or zero');
        setHoursError(true);
        isValid = false;
      }
    }

    return isValid;
  };

  /**
   * Handles form submission
   */
  const handleAddEntry = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (inputsValidation()) {
      const hoursToSubmit = Number(hours);

      // Save new time entry
      addTimeEntry(taskName, hoursToSubmit);
      toast.success('Time Entry Added Successfully');

      // Clear inputs and validation states
      setTaskName('');
      setHours('');
      setTaskNameError(false);
      setHoursError(false);
    }
  };

  return (
    <section className="time-entry-section">
      <div className="time-entry-container">
        <form className="time-entry-form">
          {/* Task Name Input */}
          <div className="form-group">
            <label htmlFor="task-name">Task Name</label>
            <input
              type="text"
              id="task-name"
              name="task-name"
              value={taskName}
              onChange={(e) => {
                setTaskName(e.target.value);
                setTaskNameError(false);
              }}
              className={taskNameError ? 'input-error' : ''}
            />
          </div>

          {/* Hours Worked Input */}
          <div className="form-group">
            <label htmlFor="hours-worked">Hours Worked</label>
            <input
              type="number"
              id="hours-worked"
              name="hours-worked"
              value={hours}
              onChange={(e) => {
                const value = e.target.value;
                setHours(value === '' ? '' : Number(value));
                setHoursError(false);
              }}
              className={hoursError ? 'input-error' : ''}
            />
          </div>

          {/* Submit Button */}
          <div className="form-buttons">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleAddEntry}
            >
              Add Time Entry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TimeEntryForm;
