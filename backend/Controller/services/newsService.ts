import { Response } from "express";
const { parse } = require('rss-to-json');
import {shuffle} from "../../utils/ArrayHelper";

type RSSItem = {
    title: string,
    description: string,
    link: string,
}

type RSSFeed = {
    items: RSSItem[]
}

export default class NewsService {
    public getNews (res: Response) {
        process.env.RSS_FEED_URL && parse(process.env.RSS_FEED_URL).then((data: RSSFeed) => {
            const news = data.items.map((item: any) => {
                return {
                    title: item.title,
                    description: item.description,
                    link: item.link
                } satisfies RSSItem;
            });
            shuffle(news)
            res.status(200).json(news.slice(0, 10));
        });
    }
}


