import { useState } from "react";

export function useLocalStorage() {
    const [storedValue, setStoredValue] = useState(true);
    return { storedValue, setStoredValue };
}
