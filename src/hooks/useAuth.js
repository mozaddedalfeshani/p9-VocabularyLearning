import { getAuth } from "firebase/auth";
import app from "./FirebaseConfig";

const auth = getAuth(app);
export default auth;
