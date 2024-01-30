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
  const url = "https://zimmergroup.sharepoint.com/_api/site/Marketing-Web/Communication/Forms/AllItems.aspx";
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