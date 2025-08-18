// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------

// Importing our Node modules
import express from "express";

// The framework that lets us easily build a web server
import pg from "pg"; // pg stands for PostgreSQL, for talking to the database
// connect to our PostgreSQL database, or db for short
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL, // credentials to access the database — keep this private!
  ssl: true, // we will use SSL encryption when connecting to the database
});

const app = express(); // Creating an instance of the express module

app.use(express.json()); // This server will receive and respond in JSON format

const port = 3000; // Declaring which port to listen to to receive requests

// Turning on our server to listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// ---------------------------------
// Helper Functions
// ---------------------------------
// Helper function for /get-all-suggestions

async function getAllSuggestions() {
  const result = await db.query("SELECT * FROM suggestions");
  console.log(result);
  return result.rows;
}
// Helper function for /add-one-suggestion

async function addOneSuggestion(suggestions) {
  await db.query(
    "INSERT INTO suggestions (title, description, category, upvotes, status) VALUES ($1, $2, $3, $4, $5 )",
    [
      suggestions.title,
      suggestions.description,
      suggestions.category,
      suggestions.upvotes,
      suggestions.status,
    ]
  );
}

// ---------------------------------
// API Endpoints
// ---------------------------------

// GET /get-all-suggestions
app.get("/get-all-suggestions", async (req, res) => {
  const allSuggestions = await getAllSuggestions();
  // res.send(JSON.stringify(allSuggestions));
  res.json(allSuggestions);
});

// POST /add-one-suggestion
app.post("/add-one-suggestion", async (req, res) => {
  const newSuggestion = req.body;
  await addOneSuggestion(newSuggestion);
  res.send("The new suggestion was successfully added!");
});
