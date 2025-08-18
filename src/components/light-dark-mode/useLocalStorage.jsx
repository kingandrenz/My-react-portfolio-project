import { useState, useEffect } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      if (item === null) return defaultValue;

      // Try to parse it (works for objects/arrays/numbers/booleans)
      return JSON.parse(item);
    } catch (e) {
      // If parse fails, just return the raw string
      console.warn(`Error parsing localStorage key "${key}":`, e.message);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      // Save value in JSON form (works for string, number, object, etc.)
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn(`Error setting localStorage key "${key}":`, e.message);
    }
  }, [key, value]);

  return [value, setValue];
}
