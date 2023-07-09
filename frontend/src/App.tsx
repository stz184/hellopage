import React, {useMemo} from 'react';
import TimeWidget from './components/TimeWidget';
import WeatherWidget from './components/WeatherWidget';


function App() {
    const [searchEngine, setSearchEngine] = React.useState('https://www.duckduckgo.com');
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
                            <select name="search-engine" className="button" id="search-engine-select"
                                    onChange={e => setSearchEngine(e.target.value)}>
                                <option value="https://www.google.com/search">Google</option>
                                <option value="https://www.bing.com">Bing</option>
                                <option value="https://www.duckduckgo.com">DuckDuckGo</option>
                            </select>
                        </div>
                        <div id="search-input-cont">
                            <input
                                id="search-input"
                                placeholder="Enter search term here"
                                autoFocus={true}
                            />
                        </div>
                        <div id="search-button-cont">
                            <button className="button" id="search-button">
                                Search
                            </button>
                        </div>
                    </form>
                    <div id="links">
                        <div className="link-group" id="general">
                            <ul>
                                <li className="link-group-title">General</li>
                                <li>
                                    <a href="https://en.wikipedia.org">
                                        <span className="link-text">Wikipedia</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.gmail.com">
                                        <span className="link-text">Gmail</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://wttr.in">
                                        <span className="link-text">wttr.in</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.popularfront.co">
                                        <span className="link-text">Popular Front</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="link-group" id="dev">
                            <ul>
                                <li className="link-group-title">Dev</li>
                                <li>
                                    <a href="https://www.stackoverflow.com">
                                        <span className="link-text">Stack Overflow</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.github.com">
                                        <span className="link-text">GitHub</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://wiki.archlinux.org">
                                        <span className="link-text">Arch Wiki</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://developer.mozilla.org">
                                        <span className="link-text">MDN Web Docs</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="link-group" id="media">
                            <ul>
                                <li className="link-group-title">Media</li>
                                <li>
                                    <a href="https://www.youtube.com">
                                        <span className="link-text">YouTube</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.soundcloud.com">
                                        <span className="link-text">SoundCloud</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://open.spotify.com">
                                        <span className="link-text">Spotify Web</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.bandcamp.com">
                                        <span className="link-text">Bandcamp</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="link-group" id="socials">
                            <ul>
                                <li className="link-group-title">Socials</li>
                                <li>
                                    <a href="https://www.discord.com">
                                        <span className="link-text">Discord</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.reddit.com">
                                        <span className="link-text">Reddit</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com">
                                        <span className="link-text">Twitter</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://web.whatsapp.com">
                                        <span className="link-text">WhatsApp Web</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h2>News</h2>
                    <div id="news">
                        <div className="news-group">
                            <ul>
                                <li className="news-group-title red">General</li>
                                <li>
                                    <a href="https://en.wikipedia.org">
                                        <span className="link-text">Wikipedia</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.gmail.com">
                                        <span className="link-text">Gmail</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://wttr.in">
                                        <span className="link-text">wttr.in</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.popularfront.co">
                                        <span className="link-text">Popular Front</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="news-group">
                            <ul>
                                <li className="news-group-title blue">Dev</li>
                                <li>
                                    <a href="https://www.stackoverflow.com">
                                        <span className="link-text">Stack Overflow</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.github.com">
                                        <span className="link-text">GitHub</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://wiki.archlinux.org">
                                        <span className="link-text">Arch Wiki</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://developer.mozilla.org">
                                        <span className="link-text">MDN Web Docs</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
