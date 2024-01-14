
import Controller from "../../decorators/RouteDecorotor/controller.docorator"
import { Get } from "../../decorators/RouteDecorotor/handler.controller";
import { Request, Response } from "express";



@Controller("/Bookmarks")
class Bookmarks {

    @Get("/get", []) // Handler.
    getNews(req:Request, res:Response){
        res.status(200).json({
            "General": [
                {
                    url: "https://www.gmail.com",
                    title: "Gmail",
                },
                {
                    url: "https://photos.google.com/?pli=1",
                    title: "Google Photos"
                },
                {
                    url: "https://www.google.com/maps",
                    title: "Google Maps"
                },
                {
                    url: "https://mail.proton.me",
                    title: "ProtonMail",
                },
                {
                    url: "https://outlook.office.com/mail/inbox/",
                    title: "Outlook"
                }
            ],
            "Dev": [
                {
                    url: "https://github.com",
                    title: "GitHub",
                },
                {
                    url: "https://chat.openai.com",
                    title: "OpenAI ChatGPT",
                },
                {
                    url: "https://onlinephp.io/",
                    title: "Online PHP",
                },
                {
                    url: "https://jsonviewer.stack.hu/",
                    title: "JSON Viewer"
                }
            ],
            "Shopping": [
                {
                    url: "https://www.emag.bg/",
                    title: "emag",
                },
                {
                    url: "https://www.aliexpress.com/",
                    title: "AliExpress",
                },
                {
                    url: "https://temu.com",
                    title: "Temu"
                },
                {
                    url: "https://www.olx.bg/",
                    title: "OLX"
                },
                {
                    url: "https://bazar.bg/",
                    title: "Bazar.BG"
                }
            ],
            "Socials": [
                {
                    url: "https://reddit.com",
                    title: "Reddit",
                },
                {
                    url: "https://twitter.com",
                    title: "Twitter",
                },
                {
                    url: "https://linkedin.com",
                    title: "LinkedIn"
                },
                {
                    url: "https://tiktok.com",
                    title: "TikTok"
                },
                {
                    url: "https://youtube.com",
                    title: "YouTube"
                }
            ]
        });
    }

}


export default Bookmarks;
