const express = require("express");
const dbConnect = require("./Config/app");
const registerRoute = require("./Routes/registration");
const leaderboardRoute=require("./Routes/leaderBoard");
const updateScore = require("./Routes/updateScore");
const testinsert = require("./Routes/testRoutes");
const login =require("./Routes/login");
const app = express();
const Role = require("./Models/role");
const Health_Facility = require("./Models/health_facilty");
const cors = require('cors');
require('dotenv').config(); 



app.use(cors());

const PORT = process.env.PORT|| 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>chala hai</h1>`);
});

app.get('/v1/api/roles', async (req, res) => {
  try {
      const roles = await Role.find({ active: true }, 'role_name');
      res.json(roles);
  } catch (error) {
      res.status(500).json({ message: 'Failed to fetch roles' });
  }
});

// Endpoint to get health facilities
app.get('/v1/api/health_facilities', async (req, res) => {
  try {
      const facilities = await Health_Facility.find({ active: true }, 'health_facility_name');
      res.json(facilities);
  } catch (error) {
      res.status(500).json({ message: 'Failed to fetch health facilities' });
  }
});


app.use("/v1/api", registerRoute);
app.use("/v1/api",leaderboardRoute);
app.use("/v1/api",updateScore);
app.use("/v1/api",login);
app.use("/v1/api",testinsert);

// Connect to the database
dbConnect();

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));