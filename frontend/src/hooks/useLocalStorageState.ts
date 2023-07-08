import {useEffect, useState} from 'react';

export const useLocalStorageState = <T>(key: string, initialValue: T): [T, (x: T) => void] => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const setValue = (value: T) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
            window.dispatchEvent(new Event('storage'));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const handleStorageChange = () => {
            const newValue = window.localStorage.getItem(key);
            setStoredValue(newValue ? JSON.parse(newValue) : initialValue);
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, [key, initialValue]);

    return [storedValue, setValue];
};
