📚 Assignment Hub: Role-Based Management DashboardA clean, responsive, and component-based solution for managing student assignment submissions. This project demonstrates strong front-end architecture, state management using React Context, and modern styling via Tailwind CSS.🚀 Live DemoYou can view the working application live here:https://student-assignment-dashboard-no3h.vercel.app/✨ Features & Core FunctionalityFeatureDescriptionImplementation DetailsRole-Based ViewsSeamlessly switches the entire UI based on user role (Student or Admin).Handled by useAuth hook and <App.jsx>'s conditional rendering.Double-Verification UXConfirms external submission ("Yes, I have submitted" → Final Confirmation).Implemented within <StudentSubmissionModal.jsx> for security and clarity.Admin ManagementProfessors can create new assignments (including external Drive links).Implemented within the form in <AdminDashboard.jsx>.Progress VisualizationAdmins see submission status for the entire class.Uses the custom Progress Ring component and responsive table layout.🛠️ Technology Stack & ArchitectureCategoryTechnologyPurposeFrontendReact.js (Functional Components, Hooks)Core library for component development.StylingTailwind CSS (w/ PostCSS)Utility-first CSS framework for rapid, responsive styling. Custom RGB colors used for branding.State ManagementContext APIGlobal state management for seamless authentication and state sharing.Data SimulationlocalStorageUsed via the custom assignmentAPI.js to simulate a persistent backend.Component StructureThe application uses a clean hierarchy: Context > Pages > Containers > UI.Context (/context): Global authentication state.Pages (/pages): High-level view wrappers (LoginPage, DashboardPage).Containers (/components): Role-specific logic wrappers (StudentDashboard, AdminDashboard).UI (/components/ui): Highly reusable, presentation-only components (ProgressRing, Card).📁 Folder Structurestudent-assignment-dashboard/
├── src/
│   ├── api/             # Functions simulating API calls (uses localStorage)
│   ├── components/      
│   │   ├── ui/          # Reusable UI elements (ProgressRing, Button, Card)
│   │   ├── AdminDashboard.jsx
│   │   └── StudentDashboard.jsx
│   ├── context/         # AuthProvider and AuthContext for global state
│   ├── data/            # Mock data definitions
│   ├── hooks/           # Custom hook (useAuth)
│   └── pages/           # Main application views
│       ├── DashboardPage.jsx 
│       └── LoginPage.jsx
├── tailwind.config.js
└── postcss.config.cjs   # Configures Tailwind and Autoprefixer
▶️ Getting Started LocallyTesting & Mock CredentialsUse the dropdown menu on the login page to test the two primary roles:RoleMock User IDFunctionality TestStudents101 or s102View personal progress, use the double-verification modal.Adminp201Create new assignments, view progress rings and status table.InstallationClone the repository:PowerShellgit clone [YOUR REPO URL HERE]
cd student-assignment-dashboard
Install dependencies:PowerShellnpm install
Run the development server:PowerShellnpm run dev
The application will launch on http://localhost:5173/.
