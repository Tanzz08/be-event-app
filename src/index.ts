import express from "express";
import router from "./routes/api";
import bodyParser from "body-parser";
import db from "./utils/database";

async function init() {
  try {
    // memastikan db terkonek
    const result = await db();
    console.log("database status: ", result);

    const app = express();
    app.use(bodyParser.json());

    const PORT = 3001;

    // middleware untuk path url dengan pola /api maka akan mengarah ke variabel router
    app.use("/api", router);

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

init();
