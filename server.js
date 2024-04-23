const express = require("express");
const rootRoutes = require("./routes/root");

const app = express();

app.use(express.json());

app.use("/", rootRoutes);

app.listen(8080, function(){
    console.log("The server is listening on port 8080");
});