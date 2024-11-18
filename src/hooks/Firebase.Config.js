import { initializeApp } from "firebase/app";
import config from "../config";


// Log the configuration to the console
console.log("Firebase Configuration:", config);

// Initialize Firebase
const app = initializeApp(config);
export default app;
