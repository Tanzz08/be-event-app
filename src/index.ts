import express from "express";
import router from "./routes/api";

const app = express();

const PORT = 3001;

// middleware untuk path url dengan pola /api maka akan mengarah ke variabel router
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

