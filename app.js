import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const PORT =  3000;

// Serve static files (HTML, CSS, JS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (res,req) =>{
  res.sendFile(path.join(__dirname + "/index.html"));
})
app.get('/patient', (req, res) => {
  // Use res.sendFile() to send a file in response
  res.sendFile(path.join(__dirname, 'path/to/file.txt'));
});

app.get('/doctor', (req, res) => {
  // Use res.sendFile() to send a file in response
  res.sendFile(path.join(__dirname, 'path/to/file.txt'));
});