import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Service de connexion
export const loginRequest = (email, password) => {
  const auth = getAuth(); // Récupère l'instance de l'authentification Firebase
  return signInWithEmailAndPassword(auth, email, password);
};
