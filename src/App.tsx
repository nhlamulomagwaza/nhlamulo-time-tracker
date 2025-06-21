// src/App.tsx

import React from 'react';

// Component Imports
import AppTitle from "./components/AppTitle";
import Timer from "./components/Timer";
import TimeEntryForm from "./components/TimeEntryForm";
import TimeEntryList from "./components/TimeEntryList";

/**
 * Main application layout component.
 * Renders the display of core application features.
 */
const App: React.FC = () => {
  return (
    <>
      {/* Application title/header */}
      <AppTitle />

      {/* Real-time task timer */}
      <Timer />

      {/* Form for manual time entry */}
      <TimeEntryForm />

      {/* List of recorded time entries */}
      <TimeEntryList />
    </>
  );
};

export default App;