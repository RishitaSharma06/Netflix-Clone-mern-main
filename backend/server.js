const dns=require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);


const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes.js");
const db = require('./db.js');

const app = express();

app.use(cors());
app.use(express.json());

const dbUrl=process.env.ATLASDB_URL;
db.connect(dbUrl);

app.get('/', (req, res) => {
  res.send('Server is running successfully 🚀');
});

app.use("/api/user", userRoutes);

const path = require('path');

app.use(express.static(path.join(__dirname, "../netflix-ui/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../netflix-ui/build", "index.html"));
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
