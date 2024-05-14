import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';

const URL_COM_SERVICE = 'ws://localhost:8080/'; 

/*************************
 * callback map
 *************************/

interface CallbackMap {
  [channel: string]: Function[]
} 

/*************************
 * service class
 *************************/

@Injectable({
  providedIn: 'root'
})
export class ComService {

  private subscriptions : CallbackMap = {};
  private ws : WebSocket | undefined;

  /*************************
   * constructor
   *************************/

  constructor() {
    this.connect();
  }

  /*************************
   * connect websocket
   *************************/

  private connect() {
    let that = this;

    this.ws = new WebSocket(URL_COM_SERVICE);

    this.ws.onmessage = function(response) {      
      const buffer = Buffer.from(response.data);
      const buffToString = buffer.toString('utf-8');
      const obj = JSON.parse(buffToString);
      that.onMessage(obj);
    };

    this.ws.onopen = function(msg) {
      that.onConnected();
    };

    this.ws.onclose = function(msg) {
      setTimeout(()=>{ that.connect(); }, 5000);
    };

    this.ws.onerror = function(msg) {
      setTimeout(()=>{ that.connect(); }, 5000);
    };
  }

  /*************************
   * callback for connection established
   *************************/

  private onConnected() {

  }

  /*************************
   * callback for new message on websocket
   *************************/

  private onMessage(msg: any) {

    let channel = msg.channel;
  
    if(this.subscriptions[channel]) {
      this.subscriptions[channel].forEach(func => {
        func(msg);
      });
    }

  }

  /*************************
   * subscribe to channel
   *************************/

  public subscribe(channel: string, callback : Function) {

    if(!this.subscriptions[channel]) {
      this.subscriptions[channel] = [];
    }

    this.subscriptions[channel].push(callback);

  }

  /*************************
   * send a message to the websocket
   *************************/

  public send(channel: string, msg : any) {
    msg.channel = channel;
    let json_string = JSON.stringify(msg);
    this.ws!.send(json_string);
    //console.log(msg);
    //console.log(this.ws);
  }

}
