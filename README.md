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

- **react**: ^18.3.1 - A JavaScript library for building user interfaces.
- **react-dom**: ^18.3.1 - Serves as the entry point to the DOM and server renderers for React.
- **react-router-dom**: ^6.28.0 - DOM bindings for React Router.
- **firebase**: ^11.0.2 - Firebase JavaScript SDK for authentication and database.
- **animate.css**: ^4.1.1 - A library of ready-to-use, cross-browser animations.
- **aos**: ^2.3.4 - Animate on scroll library.
- **localforage**: ^1.10.0 - Offline storage, improved.
- **match-sorter**: ^8.0.0 - Simple, expected, and deterministic best-match sorting of an array in JavaScript.
- **react-countup**: ^6.5.3 - A React component wrapper around CountUp.js for animated counting.
- **react-fast-marquee**: ^1.6.5 - Lightweight React component for creating scrolling text.
- **react-icons**: ^5.3.0 - Include popular icons in your React projects easily.
- **sort-by**: ^1.2.0 - A utility to sort an array of objects by property.
- **swiper**: ^11.1.14 - Modern mobile touch slider.
- **vite**: ^5.4.10 - Next generation frontend tooling.
- **eslint**: ^9.13.0 - Pluggable JavaScript linter.
- **daisyui**: ^4.12.14 - Tailwind CSS Components.
- **tailwindcss**: ^3.4.15 - A utility-first CSS framework.
