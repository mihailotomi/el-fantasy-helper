import app from "./app";
import * as dotenv from "dotenv";

dotenv.config();

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
