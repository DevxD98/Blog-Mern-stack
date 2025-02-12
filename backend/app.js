let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");

let app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define Mongoose Schema
let articleSchema = new mongoose.Schema({
    name: String,
    body: String
});

let Article = mongoose.model("Article", articleSchema);

// Connect to MongoDB
async function connection() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/blog", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected successfully to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

connection();

// Get Articles (Dummy Data)
app.get("/",async function (req, res) {
    let data = [
        { title: "Article-1", body: "Description-1" },
        { title: "Article-2", body: "Description-2" }
    ];
    res.json(data);
});

// Add Article (Save to MongoDB)
app.post("/addarticle", async function (req, res) {
    try {
        let article = new Article(req.body);
        await article.save(); // Save to MongoDB
        console.log("Article saved:", req.body);
        res.json({ message: "Article added successfully!" });
    } catch (error) {
        console.error("Error saving article:", error);
        res.status(500).json({ message: "Failed to add article" });
    }
});

// Start Server
app.listen(3001, function () {
    console.log("Server started on port 3001");
});