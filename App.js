import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { initializeApp, getApps } from "firebase/app"; // Correct import
import { Text } from "react-native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB90vWR3DHwze707oyLdTtza0jTcePiXH8",
  authDomain: "mealtogo-5aadc.firebaseapp.com",
  projectId: "mealtogo-5aadc",
  storageBucket: "mealtogo-5aadc.firebasestorage.app",
  messagingSenderId: "120488660399",
  appId: "1:120488660399:web:cc2db3b9b39edacb6af35a"
};

// Initialisation de Firebase
try {
  if (!getApps().length) {
    const app = initializeApp(firebaseConfig);
    console.log("Firebase initialized successfully:", app.name);
  } else {
    console.log("Firebase already initialized.");
  }
} catch (error) {
  console.error("Firebase initialization error:", error);
}

export default function App() {
  // Chargement des polices
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    console.log("Fonts not loaded yet.");
    return null;
  }

  console.log("Fonts loaded successfully.");

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
