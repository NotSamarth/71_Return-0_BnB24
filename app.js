import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path"; // Importing 'path'




const app = express();
const PORT = 5500;
const __dirname = dirname(fileURLToPath(import.meta.url));
const staticPath = path.join(__dirname ,  '/public');

console.log(__dirname)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.get("/", (req,res) => {
  res.sendFile(path.join(__dirname, "public", "index", "index.html")); // Using 'path.join' to construct the file path
  console.log("File sent");
});
app.get('/patient', (req, res) => {
  res.sendFile(path.join(__dirname, 'path/to/file.txt'));
});

app.get('/doctor', (req, res) => {
  res.sendFile(path.join(__dirname, 'path/to/file.txt'));
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(__dirname + "/public/index/index.html");
});