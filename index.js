import express from "express";
import cors from "cors";
import pg from "pg";

const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "workerDetails",
  password: "Purvesh06$$",
  port: 5432,
});

db.connect();   

app.post("/api/worker/workerId", async (req, res) => {
  const { workerId } = req.body; // Get workerId from request body
  try {
    const result = await db.query('SELECT * FROM details WHERE workerId = $1', [workerId]);
    if (result.rows.length > 0) {
      const worker = result.rows[0];
      res.json({ success: true, workerId: worker.workerId, name: worker.name, age: worker.age, phone: worker.phone });
    } else {
      res.json({ success: false, message: "Worker not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

