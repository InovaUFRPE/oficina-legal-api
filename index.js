const http = require("http");
const dotenv = require("dotenv-safe");

if (!process.env.NODE_ENV) {
  dotenv.load();
}

console.log('>>', process.env.PORT);

const app = require("./server");

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);


server.on("error", err => {
  console.log('>>', err.message);
});

server.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
