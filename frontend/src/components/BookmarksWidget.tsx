import React, {useEffect, useState} from "react";
import fetchHelper from "../utils/FetchHelper";


type BookmarkItem = {
    url: string,
    title: string
}

interface Bookmarks {
    [index: string]: BookmarkItem[]
}

const BookmarksWidget: React.FC = () => {

    const [bookmarks, setBookmarks] = useState<Bookmarks>({});

    useEffect(() => {
        fetchHelper.get(process.env.REACT_APP_BACKEND_URL + "/Bookmarks/get").then((response) => {
            setBookmarks(response);
        });
    }, []);

    if (!Object.keys(bookmarks).length) return null;

    return (
        <div id="links">
            {Object.keys(bookmarks).map(group => {
                return (
                    <div className="link-group" id="general">
                        <ul>
                            <li className="link-group-title">{group}</li>
                            {bookmarks[group].map(bookmark => {
                                return (<li>
                                    <a href={bookmark.url} target="_blank">
                                        <span className="link-text">{bookmark.title}</span>
                                    </a>
                                </li>)
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default BookmarksWidget;
