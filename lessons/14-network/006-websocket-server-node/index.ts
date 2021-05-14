import WebSocket from "ws";
import faker from "faker";

const wss = new WebSocket.Server({
  port: 8080,
});

const emails = Array
  .from({length: 100}, (_, i) =>
    faker.internet.email());

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log(message);
    if (typeof  message === "string") {
      try {
        const { data } = JSON.parse(message);
        const filteredEmails = emails
          .filter(email => email.match(new RegExp(data, 'g')));
        ws.send(JSON.stringify(filteredEmails));
      } catch (ex) {
        console.error(ex);
      }
    }
  });

  ws.send(JSON.stringify(emails));
});



