# ⏱ Time Tracker

A lightweight time tracking app built using **React**, **TypeScript**, and **SCSS**, allowing users to track how they're spending their time through manual inputs or a timer.

---

## ✨ Features

- ✅ Add time entries with a task name and hours worked
- ✅ View a list of all time entries
- ✅ See total hours worked
- ✅ **Edit** and **delete** entries (✅ Bonus)
- ✅ **Start/Stop Timer** to track tasks in real-time (✅ Bonus)
- ✅ **Responsive Design** (mobile/tablet/desktop)
- ✅ Input validation with inline feedback (toasts + field highlights)
- ✅ Local storage persistence

---

## 🚀 Live Demo

🔗 [https://nhlamulo-time-tracker.netlify.app/](https://nhlamulo-time-tracker.netlify.app/)

---

## 📦 Tech Stack

- **React** + **TypeScript** – SPA foundation with strong typing
- **SCSS Modules** – For **programming-like styling** with nesting, variables, and partials
- **Context API** – Centralized state management so I don't need to declare variables repeatedly in each component
- **React Hot Toast** – Clean user feedback
- **LocalStorage** – Simple persistence for demo purposes

---

## 🧪 Validation & UX

- Task name and hours are required
- Negative or zero hours are rejected
- Clear error messages with toast + input highlights
- Mobile layout adapts with pseudo-labels for column context
- “No entries yet” message when list is empty

---

## 💡 Why Not Tailwind?

I intentionally used SCSS instead of Tailwind to showcase my **pure understanding of CSS and layout logic** without relying on utility classes. SCSS gave me better control over responsiveness, visual hierarchy, and custom styling logic in this short timeframe.

---

## 🧠 Assumptions & Trade-offs

| Area              | Decision / Reasoning                                                                 |
|-------------------|--------------------------------------------------------------------------------------|
| Persistence       | Used localStorage for simplicity and offline support                                |
| Timer             | Not persisted across refreshes due to time constraints                              |
| IDs               | Used incremental ref — would switch to UUIDs or backend IDs for multi-user support |
| State Management  | Context API prevents repeated props/variables in child components                   |

---

## 🔧 Setup & Run Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/mini-time-tracker.git
   cd mini-time-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the app**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 🧹 Folder Structure

```
src/
├── components/
│   ├── EditEntry.tsx
│   ├── TimeEntryForm.tsx
│   ├── TimeEntryList.tsx
│   └── Timer.tsx
├── store/
│   └── TimeEntriesContext.tsx
├── styles/
│   ├── components/
│   └── fragments/
├── types/
│   └── index.ts
```

---

## ⏰ What I’d Improve With More Time

- 🔐 Add **user login and authentication**
- 🌐 Connect to a **backend API** and **database** to allow users to access their entries from any device
- 🎨 Improve the **UI/UX design** — the current layout is functional but not visually polished
- 📊 Add charts, filters, or sorting for better time insights
- 🔁 Persist running timer on refresh
- 🧪 Add testing (unit + E2E)

---



