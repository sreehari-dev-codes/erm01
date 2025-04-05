const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const billingRoutes = require("./routes/billingRoutes");
const riderRoutes = require("./routes/riderRoutes");
const yearlyRoutes = require("./routes/yearlyRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/billing", billingRoutes);
app.use("/api/riders", riderRoutes);
app.use("/api/yearly", yearlyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
