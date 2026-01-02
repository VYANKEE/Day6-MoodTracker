# Daily Mood and Focus Log

Day 6: 45 Days of Code Challenge

A clean and minimal web application designed to track daily mood and focus levels. This project emphasizes simple state management, local data persistence, and duplicate entry prevention logic using React.js.
##LIVE DEMO -: https://day6-mood-tracker.vercel.app/
---

## Project Overview

- Project Name: Daily Mood Log
- Application Type: Single Page Application (SPA)
- Core Logic: Date-based unique entries and LocalStorage persistence.
- Goal: To build a functional history tracking system with duplicate prevention.

## Key Features

- Daily Check-in: Users can log their mood and focus level once per day.
- Duplicate Prevention: Logic prevents multiple entries for the same date to ensure data integrity.
- Data Persistence: Uses Browser LocalStorage to save history indefinitely.
- History View: Displays a chronological list of past entries with visual indicators.
- Dark Mode UI: A premium, glassmorphism-inspired interface using pure CSS.

## Technical Stack

- Frontend Framework: React.js (Vite)
- Styling: Pure CSS (CSS Variables, Grid, Flexbox)
- State Management: React Hooks (useState, useEffect)
- Icons: Lucide React

## Project Structure

- src/components/MoodSelector.jsx: Component for selecting mood options.
- src/components/NoteInput.jsx: Text area component for adding optional notes.
- src/components/HistoryList.jsx: Component to render the list of past logs.
- src/App.jsx: Main controller handling date logic and storage.

## Installation and Setup

1. Clone the Repository
   git clone https://github.com/VYANKEE/Day6-MoodTracker.git

2. Navigate to the Directory
   cd Day6-MoodTracker

3. Install Dependencies
   npm install

4. Start the Application
   npm run dev

## Learning Outcomes

- Handling date objects to create unique keys for data entries.
- implementing read/write operations with LocalStorage in React.
- conditional rendering based on daily submission status.
- Designing a scalable CSS architecture for dark mode.

---

Developed by VYANKEE
