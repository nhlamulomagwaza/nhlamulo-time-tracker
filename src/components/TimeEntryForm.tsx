
import { useContext } from "react"
import { AppContext, type AppContextType } from "../store/TimeEntriesContext.tsx"; 
import '../styles/components/form.scss';

const TimeEntryForm = () => {


    const {taskName, setTaskName, hours, setHours}= useContext(AppContext as React.Context<AppContextType>);
   
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

                        <button type="submit" className="btn btn-primary">Add Time Entry</button>
                       {/*  <button type="reset" className="btn btn-secondary">Reset</button> */}
                      </div>
        </form>
</div>
    </section>
  )
}

export default TimeEntryForm