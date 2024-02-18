import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5500;
const __dirname = dirname(fileURLToPath(import.meta.url));

// Serve static files from the 'public' directory
app.use(express.static(__dirname + '/public'));

// Define routes for each HTML file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index/index.html");
});

app.get('/patient', (req, res) => {
  res.sendFile(__dirname + "/public/patient/patient.html");
});

app.get('/doctor', (req, res) => {
  res.sendFile(__dirname + "/public/doctor/doctor.html");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
