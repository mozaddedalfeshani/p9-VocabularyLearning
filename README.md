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
├── public/                # Public folder for static assets
│   ├── index.html         # Main HTML file
│   ├── logo.png           # Logo image
│   └── vite.svg           # Vite logo
├── src/                   # Source folder for app components and logic
│   ├── assets/
│   ├── icons/              # Icon assets
│   │   ├── forgetPasswordIcon.png  # Icon for "Forget Password"
│   │   ├── logoIcon.png            # Logo icon
│   │   ├── signinIcon.png          # Sign-in icon
│   │   └── userLogout.png          # Logout icon
│   ├── images/             # Image assets
│   │   └── myPhoto.jpg              # Sample photo
│   ├── sounds/             # Sound assets
│   │   └── click.mp3                # Click sound effect
│   └── react.svg           # React SVG file
|   | 
│   ├── components/        # Reusable components
│   │   ├── Buttons/       # Button-related components
│   │   │   └── LogoutWithImage.jsx # Button for logout with image
│   │   ├── Home/          # Components specific to the Home page
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ImageSlider.jsx
│   │   │   ├── SuccessSection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   ├── Banner.jsx
│   │   ├── cardShow.jsx
│   │   ├── Footer.jsx
│   │   ├── LetsLearn.jsx
│   │   ├── LoadingUI.jsx
│   │   ├── Modal.jsx
│   │   ├── NavBar.jsx
│   │   ├── VocabularyCard.jsx
│   │   └── VocabularyDetails.jsx
│   ├── contexts/          # Context API-related files
│   │   └── AuthProvider.jsx # Authentication provider for global state
│   ├── hooks/             # Custom React hooks
│   │   ├── Firebase.Config.js # Firebase configuration
│   │   └── useAuth.js     # Hook for authentication logic
│   ├── layout/            # Layout components
│   │   ├── HomeLayout.jsx # Layout for home page
│   │   └── root.jsx       # Root layout component
│   ├── pages/             # Page components
│   │   ├── AboutUs.jsx    # About Us page
│   │   ├── ContactUs.jsx  # Contact Us page
│   │   ├── Lesson.jsx     # Lesson details page
│   │   ├── Login.jsx      # Login page
│   │   ├── MyProfile.jsx  # Profile page
│   │   ├── PasswordReset.jsx # Password reset page
│   │   ├── StartLearning.jsx # Start learning page
│   │   ├── Tutorials.jsx  # Tutorials page
│   │   ├── UpdateProfile.jsx # Profile update page
│   │   └── WrongPage.jsx  # 404 Not Found page
│   ├── routes/            # Routing logic
│   │   ├── PrivateProvider.jsx # Protected route handling
│   │   └── router.jsx     # Main routing logic
│   ├── App.jsx            # Root application component
│   ├── App.css            # Global styles
│   ├── main.jsx           # Entry point for the app
│   └── config.js          # Additional configuration
├── .env                   # Environment variables
├── .firebaserc            # Firebase configuration file
├── .gitignore             # Git ignore file
├── eslint.config.js       # ESLint configuration
├── firebase.json          # Firebase project settings
├── index.html             # Main HTML file for Vite
├── package.json           # Project dependencies and metadata
├── postcss.config.js      # PostCSS configuration
├── README.md              # Documentation for the project
├── tailwind.config.js     # Tailwind CSS configuration
└── vite.config.js         # Vite configuration

```

---

## **NPM Packages Used**

- **react**: A JavaScript library for building user interfaces.
- **react-dom**: Serves as the entry point to the DOM and server renderers for React.
- **react-router-dom**: DOM bindings for React Router.
- **firebase**: Firebase JavaScript SDK.
- **animate.css**: A library of ready-to-use, cross-browser animations for use in your web projects.
- **aos**: Animate on scroll library.
- **localforage**: Offline storage, improved.
- **match-sorter**: Simple, expected, and deterministic best-match sorting of an array in JavaScript.
- **react-countup**: A React component wrapper around CountUp.js.
- **react-fast-marquee**: Lightweight React component for creating scrolling text.
- **react-icons**: Include popular icons in your React projects easily.
- **sort-by**: A utility to sort an array of objects by property.
- **swiper**: Modern mobile touch slider.
- **axios**: Promise based HTTP client for the browser and node.js.
- **sass**: CSS preprocessor.
- **vite**: Next generation frontend tooling.
- **eslint**: Pluggable JavaScript linter.
- **prettier**: Code formatter.
- **daisyui**: Tailwind CSS Components.
- **tailwindcss**: A utility-first CSS framework.
