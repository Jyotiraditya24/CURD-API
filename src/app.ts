import express from "express";
import config from "config";

const app = express();

const port:number = config.get<number>("port");

app.listen(port, () => {
  console.log("App is running");
});
