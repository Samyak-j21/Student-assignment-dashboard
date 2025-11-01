# 📚 Assignment Hub: Role-Based Management Dashboard

A **responsive**, **component-based**, and **role-driven** web application for managing student assignment submissions.  
Built with **React**, **Tailwind CSS**, and **Context API**, it demonstrates scalable front-end architecture, UI consistency, and smooth user experience.

---

## 🚀 Live Demo

🔗 **Try the app here:**  
👉 [https://student-assignment-dashboard-no3h.vercel.app/](https://student-assignment-dashboard-no3h.vercel.app/)

---

## ✨ Overview

**Assignment Hub** allows two main user roles — **Students** and **Admins (Professors)** — to interact with assignment data seamlessly.

- 🎓 **Students** can view assignments, confirm external submissions, and track their personal progress.
- 🧑‍🏫 **Admins** can create, manage, and monitor assignment submissions across all students.

This dashboard simulates backend interactions using **localStorage**, providing a complete end-to-end UX without requiring a server setup.

---

## 🧭 Architecture Overview

The project follows a **Context → Pages → Containers → UI** architecture to promote scalability and maintainability.

student-assignment-dashboard/
├── src/
│   ├── api/
│   │   └── assignmentAPI.js     # Simulates backend API calls
│   ├── components/
│   │   ├── ui/
│   │   │   ├── ProgressRing.jsx
│   │   │   ├── Button.jsx
│   │   │   └── Card.jsx
│   │   ├── AdminDashboard.jsx
│   │   └── StudentDashboard.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── data/
│   │   └── mockAssignments.js
│   ├── hooks/
│   │   └── useAuth.js
│   └── pages/
│       ├── LoginPage.jsx
│       └── DashboardPage.jsx
├── tailwind.config.js
├── postcss.config.cjs
├── package.json
└── README.md



### 🧠 Architectural Layers

| Layer | Description | Example |
|-------|--------------|----------|
| **Context** | Holds global app state and user role via React Context. | `AuthContext`, `AuthProvider` |
| **Pages** | Defines top-level views like login and dashboard. | `LoginPage.jsx`, `DashboardPage.jsx` |
| **Containers** | Handles role-specific logic and data mapping. | `AdminDashboard.jsx`, `StudentDashboard.jsx` |
| **UI Components** | Pure, reusable components for visuals only. | `ProgressRing`, `Card`, `Button` |

---

## ⚙️ Technology Stack

| Category | Technology | Purpose |
|-----------|-------------|----------|
| **Frontend Framework** | React.js (Hooks, Functional Components) | Core component-based UI architecture |
| **Styling** | Tailwind CSS (with PostCSS) | Utility-first, responsive styling |
| **State Management** | React Context API | Global state for authentication and roles |
| **Persistence Layer** | localStorage | Simulated backend via `assignmentAPI.js` |
| **Build Tool** | Vite | Fast development server and optimized build |

---

## ✨ Key Features

| Feature | Description | Implementation Details |
|----------|-------------|--------------------------|
| **Role-Based Views** | Dynamically changes UI for Student/Admin roles. | Managed by `useAuth` and conditional rendering in `App.jsx`. |
| **Double-Verification UX** | Two-step confirmation for external submissions. | Implemented in `StudentSubmissionModal.jsx`. |
| **Admin Assignment Management** | Professors can create new assignments with Drive links. | Built into `AdminDashboard.jsx`. |
| **Class Progress Visualization** | Admins see submission statistics and completion rates. | Custom `ProgressRing` component and table view. |
| **Local Persistence** | Retains user and assignment data across sessions. | Managed by `assignmentAPI.js`. |

---

## 🧪 Mock Credentials (for Testing)

Use the **login dropdown** to test different user roles:

| Role | Mock User ID | Permissions |
|------|---------------|-------------|
| **Student** | `s101` or `s102` | View and confirm assignment submissions |
| **Admin** | `p201` | Create assignments and monitor student progress |

---

## 💻 Local Setup & Installation

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository

```bash
git clone [YOUR_REPO_URL_HERE]
cd student-assignment-dashboard

