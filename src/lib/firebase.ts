import {
  getApp,
  getApps,
  initializeApp,
  type FirebaseOptions,
} from "firebase/app";
import { getAI, getGenerativeModel, GoogleAIBackend } from "firebase/ai";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

function readRequiredEnv(...keys: Array<keyof ImportMetaEnv>) {
  const value = keys
    .map((key) => import.meta.env[key])
    .find((envValue) => typeof envValue === "string" && envValue.length > 0);

  if (!value) {
    throw new Error(`Missing required Firebase env: ${keys.join(" or ")}`);
  }

  return value;
}

const firebaseConfig = {
  apiKey: readRequiredEnv("VITE_FIREBASE_API_KEY"),
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: readRequiredEnv("VITE_FIREBASE_PROJECT_ID", "VITE_PROJECT_ID"),
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: readRequiredEnv("VITE_FIREBASE_APP_ID"),
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
} satisfies FirebaseOptions;

export const firebaseApp =
  getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const firestore = getFirestore(firebaseApp);
export const firebaseAI = getAI(firebaseApp, {
  backend: new GoogleAIBackend(),
});

export function getFirebaseGenerativeModel(
  model = readRequiredEnv("VITE_FIREBASE_AI_MODEL"),
) {
  return getGenerativeModel(firebaseAI, { model });
}

const firebaseRuntime = globalThis as typeof globalThis & {
  __FIREBASE_FIRESTORE_EMULATOR_CONNECTED__?: boolean;
};

const useFirestoreEmulator =
  import.meta.env.VITE_USE_FIREBASE_EMULATOR === "true";

if (
  useFirestoreEmulator &&
  !firebaseRuntime.__FIREBASE_FIRESTORE_EMULATOR_CONNECTED__
) {
  connectFirestoreEmulator(
    firestore,
    import.meta.env.VITE_FIRESTORE_EMULATOR_HOST ?? "localhost",
    Number(import.meta.env.VITE_FIRESTORE_EMULATOR_PORT ?? 8080),
  );
  firebaseRuntime.__FIREBASE_FIRESTORE_EMULATOR_CONNECTED__ = true;
}
