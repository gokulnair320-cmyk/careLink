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
  database: "workerRegister",
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

app.post("/api/worker/register", async (req, res) => {
  const { name, location, gender ,age, phone, password } = req.body;
  try {
    const check = await db.query('SELECT * FROM wregister WHERE name = $1', [name]);

    if(check.rows.length > 0){
      res.send({ success: false, message: "Worker already registered!! Please Login" });
    }
    else{
      const insertQuery = await db.query('INSERT INTO wregister (name, location,gender ,age, phone, password) VALUES ($1, $2, $3, $4, $5, $6)', [name, location,gender, age, phone, password]);
      res.send({ success: true, message: "Worker registered successfully" });
    }
}
catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
}});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

//MedicalRecord and HealthSurveillance Backend Code

import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();


const PORT = process.env.PORT || 5000;

// -------------------- Middleware --------------------
app.use(cors());
app.use(express.json());

// -------------------- In-memory "database" --------------------
let medicalRecords = [];

// -------------------- Google Gemini Setup --------------------
const API_KEY = process.env.GOOGLE_API_KEY || "AIzaSyDUbkywWo1qN25WAOAFxEZWodJJ44Q4XJw";
if (!API_KEY) {
  console.warn("⚠️ No Google API Key found. Set GOOGLE_API_KEY in .env file.");
}
const genAI = new GoogleGenerativeAI(API_KEY);

// -------------------- AI Health Report Generator --------------------
async function generateCustomHealthReport(patientData) {
  const prompt = `
You are an AI Health Surveillance Assistant.
Generate a short, predictive health surveillance report (3-5 bullet points max)
for the following migrant worker in Kerala.

Focus on:
- Likely diagnosis or risks (based on occupation + symptoms + origin)
- One or two tests that should be done
- One key preventive action

Patient Data:
${JSON.stringify(patientData, null, 2)}
`;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const response = await model.generateContent(prompt);

    // Handle API response safely
    return response?.response?.text() || "No report generated.";
  } catch (error) {
    console.error("❌ Error generating health report:", error.message);
    return "Unable to generate health report at this time. Please try again later.";
  }
}

// -------------------- ROUTES --------------------

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("🚀 CareLink Backend is running (in-memory, no MongoDB)");
});

// ✅ Create new medical record
app.post("/api/medical-record", (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: "Patient data is required" });
    }

    const newRecord = { ...req.body, id: Date.now(), createdAt: new Date() };
    medicalRecords.push(newRecord);

    res.status(201).json(newRecord);
  } catch (error) {
    console.error("❌ Error saving medical record:", error.message);
    res.status(500).json({ error: "Failed to save medical record" });
  }
});

// ✅ Get latest medical record
app.get("/api/medical-record", (req, res) => {
  try {
    if (medicalRecords.length === 0) {
      return res.status(404).json({ message: "No medical records found" });
    }

    const latestRecord = medicalRecords[medicalRecords.length - 1];
    res.json(latestRecord);
  } catch (error) {
    console.error("❌ Error fetching medical record:", error.message);
    res.status(500).json({ error: "Failed to fetch medical record" });
  }
});

// ✅ Get all medical records (optional route)
app.get("/api/medical-records", (req, res) => {
  res.json(medicalRecords);
});

// ✅ Generate AI health report
app.post("/api/health-report", async (req, res) => {
  try {
    if (medicalRecords.length === 0) {
      return res
        .status(404)
        .json({ error: "No medical record found. Please create a record first." });
    }

    const latestRecord = medicalRecords[medicalRecords.length - 1];
    const healthReport = await generateCustomHealthReport(latestRecord);

    res.json({
      report: healthReport,
      patientData: latestRecord,
      generatedAt: new Date(),
    });
  } catch (error) {
    console.error("❌ Error generating health report:", error.message);
    res.status(500).json({ error: "Failed to generate health report" });
  }
});

// -------------------- Start Server --------------------
app.listen(PORT, () => {
  console.log(`✅ CareLink Backend running at: http://localhost:${PORT} (In-memory, No MongoDB)`);
});
