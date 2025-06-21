# ⏱️Time Tracker – Looped Automation Technical Challenge

A simple web-based time tracking app built with **React + TypeScript** that allows users to log tasks and hours worked, with additional timer-based tracking. The project was completed within the 2–3 hour constraint of the challenge and includes bonus features and detailed inline comments to simulate real-world maintainability.

---

## 🌐 Live Demo

🔗 [https://nhlamulo-time-tracker.netlify.app](https://nhlamulo-time-tracker.netlify.app)

---

## 📦 Stack

- **Frontend**: React (TypeScript)
- **Styling**: SCSS (no frameworks – pure CSS understanding)
- **State Management**: React Context API
- **Notifications**: react-hot-toast
- **Deployment**: Netlify

---

## ✅ Features

### ✅ Core
- Add new time entries with task name and hours worked
- View all time entries in a responsive layout
- Total hours worked display

### ✨ Bonus Features
- Edit or delete any time entry
- Start/stop timer to automatically track time for a task
- Convert elapsed timer time into a loggable entry
- LocalStorage persistence for all entries
- Responsive design for mobile/desktop
- Input validation with inline errors + toasts
- **Extensive inline comments** to explain logic and assist other developers

---

## 🧠 Developer Considerations

### 🗂️ Code Comments
This project includes **intense developer friendly comments** throughout every major component. The purpose is to simulate a real-world team environment where:
- A teammate may take over the codebase
- Codebases must be maintainable, readable, and debuggable
- Logical sections (handlers, render, timers, etc.) are clearly separated
- Developers of all levels can easily follow along

### 📁 Clean Structure
The codebase is organized by component and type, and follows React best practices for composability and separation of concerns.

---

## 🧪 Validation

Validation is done at input level with visual indicators and toast notifications:
- Disallows blank task names
- Disallows negative or zero hours
- Warns when starting a timer without a task name
- Disallows logging zero seconds of time

---

## ⚙️ Setup

```bash
git clone https://github.com/nhlamulomagwaza/nhlamulo-time-tracker.git
cd nhlamulo-time-tracker
npm install
npm run dev
```

---

## 🔧 What I'd Improve With More Time

1. **Backend & Auth**  
   I would hook this app to a backend API so users can register/login and access their data from any device. Data would be stored in a database (e.g. PostgreSQL or MongoDB) rather than just local storage.

2. **UI/UX Overhaul**  
   The current interface is functional but minimal. With more time, I would completely redesign the UI for better aesthetics and usability. This includes cleaner layouts, consistent spacing, visual hierarchy, and transitions.  
   > 🎨 **Reason**: Given the 3-hour time constraint, there was not enough time to design and implement a custom UI from scratch.

3. **Testing**  
   I would add unit tests (Jest/React Testing Library) for all core functionality and validation.

4. **Advanced Features**  
   - Sorting and filtering by date or task
   - Exporting entries to CSV
   - Mobile-first enhancements

---

## ❓ Why SCSS and Context?

- **SCSS**: I intentionally avoided Tailwind or Bootstrap to showcase my **raw CSS/SCSS styling skills**, including mixins, variables, nesting, and media queries.
- **Context API**: Used to centralize state like task name, hours, entries, and timer logic, so components don't have to manage their own local state unnecessarily. This keeps components clean and declarative.

---

## 🧩 Folder Structure

```
src/
├── components/         # Form, Timer, List, Edit modal
├── store/              # Context API logic
├── styles/             # SCSS fragments and component styles
├── types/              # TypeScript interfaces and types
```

---

## 🧠 Author

**Nhlamulo Magwaza**

Feel free to reach out if you’d like to collaborate or discuss improvements!
