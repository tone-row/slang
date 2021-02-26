/* eslint-disable @typescript-eslint/ban-ts-comment */
const http = require("http");

const hostname = "localhost";
const port = 4321;

const htmlDefault = "<html><head><title>Sup Tho</title></head></html>";
const render = {
  html: htmlDefault,
  getHtml() {
    return this.html;
  },
  setHtml(newHtml: string) {
    this.html = newHtml;
  },
  resetHtml() {
    this.html = htmlDefault;
  },
};

const server = http.createServer(function (_request: unknown, response: any) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(render.getHtml());
  response.end();
});

server.listen(port, hostname, () => {
  // @ts-ignore
  console.log("render", global.__render___);
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = { render };
