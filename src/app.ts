// src/app.ts
import express from "express";
import knexConfig from "../knexfile"; // Import the configuration

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Set up EJS as the view engine
app.set("view engine", "ejs");
app.set("views", "./src/views"); // Set the directory for your views

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Example route rendering an EJS view
app.get("/", async (req: express.Request, res: express.Response) => {
  res.render("index", { message: "Zdravo svete!" });
});

export default app;
