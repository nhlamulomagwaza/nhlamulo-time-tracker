
import { useContext } from "react"
import { AppContext, type AppContextType } from "../store/TimeEntriesContext.tsx"; 
import '../styles/components/form.scss';
import toast from "react-hot-toast";

const TimeEntryForm = () => {


    const {taskName, setTaskName, hours, setHours}= useContext(AppContext as React.Context<AppContextType>);
   

  const inputsValidation = ()=>{


    if (!taskName.trim() && !hours) {
      return toast.error('Please fill in all the fields');
   
    }

    if (!taskName.trim()) {
      return toast.error('Please enter a task name');
    }
  
    if (Number(hours) <= 0) {
      return toast.error('Number of hours cannot be negative');
    }


  }



  const handleAddEntry= (e)=>{

    e.preventDefault();



    inputsValidation();

    if (taskName && hours) {
      toast.success('Time Entry Added Successfully');
      setTaskName('');
      setHours(0);
    }
  }


  return (
    <section className="time-entry-section">

<div className="time-entry-container">

   
        <form className="time-entry-form">
             
                  <div className="form-group">
                    <label htmlFor="task name">Task Name</label>
                    <input type="text" 
                    id="task-name"
                     name="task-name"
                     value={taskName}
                     onChange={(e) => setTaskName(e.target.value)}
                     />
                  </div>
                  <div className="form-group">
                    <label htmlFor="hours worked">Hours Worked</label>
                    <input type="number" 
                    id="hours-worked" 
                    name="hours-worked"
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    />
                  </div>
        
                      <div className="form-buttons">

                        <button type="submit" className="btn btn-primary" onClick={handleAddEntry}>Add Time Entry</button>
                       {/*  <button type="reset" className="btn btn-secondary">Reset</button> */}
                      </div>
        </form>
</div>
    </section>
  )
}

export default TimeEntryForm