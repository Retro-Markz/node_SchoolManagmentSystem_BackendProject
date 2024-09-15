const http = require("http");
const app = require("./app/app");
const morgan = require("morgan");

const PORT = process.env.PORT || 3000;

//middlewarfe
app.use(morgan("dev"));

//server
const server = http.createServer(app);

server.listen(PORT, console.log(`Server is up and running on port: ${PORT}`));
