# Project Structure

lingo-bingo/
├── public/                # Public assets (static files)
│   ├── images/            # Public images like banners, logos
│   ├── favicon.ico        # App favicon
│   └── robots.txt         # Optional for SEO
├── src/
│   ├── assets/            # Assets folder for project-specific resources
│   │   ├── images/        # Images (used in JSX or CSS)
│   │   └── styles/        # Global styles (CSS/SCSS)
│   │       ├── globals.css  # Global CSS styles
│   │       └── variables.css # CSS variables (optional)
│   ├── components/        # Reusable UI components
│   │   ├── Header.jsx     # Header component
│   │   ├── Footer.jsx     # Footer component
│   │   ├── Navbar.jsx     # Navigation bar component
│   │   ├── Banner.jsx     # Slider/Banner for Home
│   │   ├── Modal.jsx      # Reusable modal component (e.g., for "When to say")
│   │   └── Card.jsx       # Reusable card component (e.g., for lessons)
│   ├── contexts/          # Context API (state management)
│   │   ├── AuthContext.jsx # Auth state and provider
│   │   └── FirebaseConfig.js # Firebase initialization and keys (use `.env`)
│   ├── data/              # Static data files
│   │   └── vocabularies.json # JSON file with vocab data
│   ├── hooks/             # Custom React hooks
│   │   └── useAuth.js     # Hook for authentication logic
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Home page
│   │   ├── StartLearning.jsx # "Let's Learn" page
│   │   ├── Lesson.jsx     # Lesson details page
│   │   ├── Tutorials.jsx  # Tutorials page
│   │   ├── AboutUs.jsx    # About Us page (optional)
│   │   ├── Profile.jsx    # User Profile page
│   │   ├── UpdateProfile.jsx # Update profile page
│   │   ├── Login.jsx      # Login page
│   │   ├── Register.jsx   # Registration page
│   │   └── NotFound.jsx   # 404 Error page
│   ├── router/            # React Router configuration
│   │   └── AppRouter.jsx  # Main routing logic
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Vite entry point
│   └── firebase.js        # Firebase initialization
├── .env                   # Environment variables for Firebase keys
├── .gitignore             # Files and directories to ignore in Git
├── index.html             # Vite root HTML
├── package.json           # Project metadata and dependencies
├── README.md              # Project documentation
└── vite.config.js         # Vite configuration
