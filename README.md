# **Lingo Bingo** - A 72 hour full stack project by Me

### A Vocabulary Learning Application

Lingo Bingo is a fun and interactive single-page application designed to help users expand their vocabulary and improve communication skills in multiple languages. This project focuses on making language learning engaging and accessible with features like categorized lessons, embedded tutorials, and a personalized experience.

---

## **Live Demo**

[Live Demo](https://vocabularyproject-b7fb9.web.app/)

---

## **Project Features**

- **Firebase Authentication**:  
  Users can log in, register, or use Google Sign-In to access private routes.

- **Dynamic Vocabulary Lessons**:  
  Learn new words through categorized lessons, each with unique vocabulary cards.

- **Speak Up Feature**:  
  Pronounce the vocabulary words for auditory learning.

- **JSON-Driven Content**:  
  Over 200+ vocabulary words structured by difficulty and lessons.

- **Responsive Design**:  
  A fully responsive design optimized for mobile, tablet, and desktop devices.

- **Winter-Themed UI**:  
  A unique, seasonal design to keep users engaged.

- **Interactive Success Counters**:  
  Animated counters for user, vocabulary, and lesson statistics.

- **Private Routes**:  
  Secure access to user profile, lessons, and tutorial pages after login.

---

## **Project Structure**

```
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
```

---

## **NPM Packages Used**

- **react**: A JavaScript library for building user interfaces.
- **react-dom**: Serves as the entry point to the DOM and server renderers for React.
- **react-router-dom**: DOM bindings for React Router.
- **firebase**: Firebase JavaScript SDK.
- **axios**: Promise based HTTP client for the browser and node.js.
- **sass**: CSS preprocessor.
- **vite**: Next generation frontend tooling.
- **eslint**: Pluggable JavaScript linter.
- **prettier**: Code formatter.
