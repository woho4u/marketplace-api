const express = require("express");
const cors = require("cors");
const app = express();
const exampleRoute = require("./routes/api-status");
const addProjectRoute = require("./routes/add-project");
const getProjectsRoute = require("./routes/get-projects");

// Middleware
app.use(cors());
app.use(express.json());

// Mount Routes
app.use("/api", exampleRoute);
app.use("/api", addProjectRoute);
app.use("/api", getProjectsRoute);

// Root Endpoint
app.get("/", (req, res) => res.send("API is running"));

// Port and start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
