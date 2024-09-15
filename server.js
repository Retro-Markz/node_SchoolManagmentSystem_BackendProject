require("dotenv").config();
const http = require("http");
const app = require("./app/app");
const morgan = require("morgan");
require("./config/dbConnect");

const PORT = process.env.PORT || 3000;



//server
const server = http.createServer(app);

server.listen(PORT, console.log(`Server is up and running on port: ${PORT}`));
