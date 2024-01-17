import { Router, Request, Response, NextFunction } from "express";
import http from "http";

//import fetch from 'node-fetch';


export const Async = (func: (req: any, res: any, next?: any) => Promise<any> | void) => (req: any, res: any, next?: any) => {
    Promise.resolve(func(req, res, next)).catch(next);
  }


export const router: Router = Router();
router.get("", Async(getData));


async function getData(req: Request, res: Response) {
// const raw = await fetch("https://dummyjson.com/products/1", { headers: [["content-type", "text"], ["property", "value"]] });
  const url = "https://zimmergroup.sharepoint.com/sites/Marketing-Web/Communication/Forms/AllItems.aspx?csf=1&web=1&e=ZQQbJp&OR=Teams%2DHL&CT=1705303371707&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMzExMzAyNjIwMiIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D&cid=34693297%2Dc350%2D4516%2D8a98%2D2ab4502be7b6&FolderCTID=0x0120006D6210695456D04389D0A29762222C16&id=%2Fsites%2FMarketing%2DWeb%2FCommunication%2F02%5FVideos%2F07%5FVideowall&viewid=7a5ce21c%2Db827%2D4b45%2Dbce9%2D307428c9d787"
  const raw = await fetch(url, { headers: [["content-type", "text"], ["property", "value"]] });
  const data = await raw.json();
  res.status(200).send(data);
}




// const getData = async () => {
//     const res = await ("https://dummyjson.com/products/1");
//     if(res.ok){
//         const data = await res.json();
//         console.log(data)
//     }
// }




// router.get("", test);
// function test(req: Request, res: Response) {
//     http.request({ host: "dummyjson.com", path: "/products/1", method: "GET" }, (res: any) => {
//         res.status(200).send(res);
//     });
// }