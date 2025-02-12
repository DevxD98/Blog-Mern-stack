import { useState } from "react";
import axios from "axios";

function AddArticle() {
    let [name, setName] = useState("");
    let [body, setBody] = useState("");

    async function addarticle(event) {
        event.preventDefault(); 
        try {
            let response = await axios.post("http://localhost:3001/addarticle", {
                name,
                body
            });

            alert("Article added successfully!");
            setName("");
            setBody("");

            console.log(response.data);
            alert("Article added successfully!");
        } catch (error) {
            console.error("Error adding article:", error);
        }
    }

    return (
        <div className="addarticle d-flex align-items-center">
            <form className="col-md-4 ms-auto me-auto">
                <h1 className="text-center">Add a new Article</h1>
                <div className="mb-3">
                    <input
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        type="text"
                        placeholder="Article Title"
                        value={name}
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        onChange={(e) => setBody(e.target.value)}
                        placeholder="Article Description"
                        className="form-control"
                        value={body}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-warning">
    Add
</button>
            </form>
        </div>
    );
}

export default AddArticle;