"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var ws_1 = require("ws");
var wss = new ws_1.WebSocket.Server({ port: 8080 });

console.log("--SERVER STARTED--");

wss.on('connection', function (ws) {
    console.log('New client connected');
    ws.on('message', function (message) {
        console.log("Received message: ".concat(message));
        wss.clients.forEach(client => { 
            //client.send(JSON.stringify(message)); 
            client.send(message.toString())
        });
    });
    ws.on('close', function () {
        console.log('Client disconnected');
    });
});




