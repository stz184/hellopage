import React, {useEffect, useState} from "react";
import fetchHelper from "../utils/FetchHelper";
import Tooltip from "./Tooltp";

type RSSItem = {
    title: string,
    description: string,
    link: string,
}


const NewsWidget: React.FC = () => {
    const [news, setNews] = useState<RSSItem[]>([]);

    useEffect(() => {
        fetchHelper.get(process.env.REACT_APP_BACKEND_URL + "/News/get").then((response) => {
            setNews(response);
        });
    }, []);

    if (!news?.length) return null;

    return (
        <>
            <div className="news-group">
                <ul>
                    {news.slice(0, 5).map((n, index) => (<li key={index} >
                        <a href={n.link} target="_blank" rel="nofollow">
                            <Tooltip text={n.description}>
                                <span className="link-text">{n.title}</span>
                            </Tooltip>
                        </a>
                    </li>))}
                </ul>
            </div>
            <div className="news-group">
                <ul>
                    {news.slice(6, 10).map((n, index) => (<li  key={index + 5} >
                        <a href={n.link} target="_blank" rel="nofollow">
                            <Tooltip text={n.description}>
                                <span className="link-text">{n.title}</span>
                            </Tooltip>
                        </a>
                    </li>))}
                </ul>
            </div>
        </>
    );
}

export default NewsWidget;