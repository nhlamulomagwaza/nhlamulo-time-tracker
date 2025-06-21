import { useContext, useState } from "react"
import { AppContext, type AppContextType } from "../store/TimeEntriesContext.tsx";
import '../styles/components/form.scss';
import toast from "react-hot-toast";

const TimeEntryForm = () => {
   
    const { taskName, setTaskName, hours, setHours, addTimeEntry } = useContext(AppContext as React.Context<AppContextType>);

    const [taskNameError, setTaskNameError] = useState<boolean>(false);
    const [hoursError, setHoursError] = useState<boolean>(false);

    const inputsValidation = (): boolean => {
        let isValid = true;

        setTaskNameError(false);
        setHoursError(false);

     
        const hoursAsNumber = Number(hours);

        if (!taskName.trim() && (hours === '' || isNaN(hoursAsNumber) || hoursAsNumber <= 0)) {
            toast.error('Please fill in all the fields');
            setTaskNameError(true);
            setHoursError(true);
            isValid = false;
        } else {
      
            if (!taskName.trim()) {
                toast.error('Please enter a task name');
                setTaskNameError(true);
                isValid = false;
            }

            if (hours === '' || isNaN(hoursAsNumber) || hoursAsNumber <= 0) {
                toast.error('Number of hours cannot be negative or zero');
                setHoursError(true);
                isValid = false;
            }
        }
        return isValid;
    }

    const handleAddEntry = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Perform validation
        if (inputsValidation()) {

            const hoursToSubmit = Number(hours);


            addTimeEntry(taskName, hoursToSubmit);

            toast.success('Time Entry Added Successfully');

    
            setTaskName('');
            setHours('');
            setTaskNameError(false);
            setHoursError(false);
        }
    }

    return (
        <section className="time-entry-section">
            <div className="time-entry-container">
                <form className="time-entry-form">
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
                    <div className="form-buttons">
                        <button type="submit" className="btn btn-primary" onClick={handleAddEntry}>Add Time Entry</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default TimeEntryForm;