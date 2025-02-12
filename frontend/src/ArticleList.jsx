import { useEffect } from "react";

function ArticleList() {

  let articles,setArticles = useState()
  useEffect(()=>{
    getData()
  },[])

  async function getData(){
    let response = await axios.get("http://localhost:3001/");
    console.log(response.data)
    
  }
  return (
    <div className="container">
      <h1 className="text-center">Article List:</h1>

      <div className="box-container d-flex justify-content-center flex-wrap gap-3 p-4">
        <div className="article-card card shadow">
          <div className="card-body text-center">
            {
              articles && articles.map((article) => {
                <div className="col-md-4">
                  <div className="card p-4 my-4">
                    <h1>{article.name}</h1>
                    <p>{article.body}</p>
                    <button className="btn btn-warning text-white">View Details</button>
                  </div>
                </div>
              })
  }

    
            <h3>Article-1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi atque omnis quibusdam sit optio laborum quae sapiente.
            </p>
          </div>
          <button className="btn btn-warning text-white w-100">View Details</button>
        </div>

        <div className="article-card card shadow">
          <div className="card-body text-center">
            <h3>Article-2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi atque omnis quibusdam sit optio laborum quae sapiente.
            </p>
          </div>
          <button className="btn btn-warning text-white w-100">View Details</button>
        </div>

        <div className="article-card card shadow">
          <div className="card-body text-center">
            <h3>Article-3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi atque omnis quibusdam sit optio laborum quae sapiente.
            </p>
          </div>
          <button className="btn btn-warning text-white w-100">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default ArticleList;