import React, {useCallback, useEffect, useMemo} from 'react';
import TimeWidget from './components/TimeWidget';
import WeatherWidget from './components/WeatherWidget';
import NewsWidget from './components/NewsWidget';
import {useLocalStorageState} from "./hooks/useLocalStorageState";
import BookmarksWidget from "./components/BookmarksWidget";

const searchEngines = [
    {
        name: 'Google',
        url: 'https://www.google.com/search'
    },
    {
        name: 'Bing',
        url: 'https://www.bing.com'
    },
    {
        name: 'DuckDuckGo',
        url: 'https://www.duckduckgo.com'
    }
];

type Background = {
    date: number,
    value: number
}

function App() {
    const [searchEngine, setSearchEngine] = useLocalStorageState('search-engine', 'https://www.duckduckgo.com');
    const [background, setBackground] = useLocalStorageState<Background|null>('background', null);
    const greeting = useMemo(() => {
        const date = new Date()
        const hour = date.getHours();
        let greeting: string;
        if (hour < 5 || hour >= 18) {
            greeting = "Good evening."
        } else if (hour < 12) {
            greeting = "Good morning."
        } else {
            greeting = "Good afternoon."
        }
        return greeting;
    }, []);

    useEffect(() => {
        if (!background || new Date().getTime() - background.date > 86410000) {
            const max = 103
            const backgroundIndex = Math.floor(Math.random() * (1 + max));
            setBackground({
                date: new Date().getTime(),
                value: backgroundIndex
            });
        }
        if (background) {
            document.body.style.backgroundImage = `url("${process.env.PUBLIC_URL}/images/backgrounds/${background.value}.jpg")`;
        }
    }, [background, setBackground]);

    const searchInput = useCallback((inputElement: HTMLInputElement) => {
        if (inputElement) {
            inputElement.focus();
        }
    }, []);

    return (
        <>
            <div id="main-container">
                <h1>{greeting}</h1>
                <div id="main-content">
                    <div id="widgets">
                        <TimeWidget/>
                        <WeatherWidget/>
                    </div>
                    <form id="search" action={searchEngine} method="get">
                        <div id="search-engine-cont">
                            <select name="search-engine" className="button" id="search-engine-select"  onChange={e => setSearchEngine(e.target.value)}>
                                {searchEngines.map((engine, index) => (
                                    <option key={index} value={engine.url} selected={engine.url === searchEngine}>
                                        {engine.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div id="search-input-cont">
                            <input
                                id="search-input"
                                placeholder="Enter search term here"
                                name="q"
                                ref={searchInput}
                            />
                        </div>
                        <div id="search-button-cont">
                            <button className="button" id="search-button">
                                Search
                            </button>
                        </div>
                    </form>
                    <BookmarksWidget />
                    <h2>News</h2>
                    <div id="news">
                        <NewsWidget />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
