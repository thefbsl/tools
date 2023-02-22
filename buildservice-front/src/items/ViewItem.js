import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewItem() {
  const [item, setItem] = useState({
    name: "",
    cost: "",
    category: "",
    description: "",
    location: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadItem();
  }, []);

  const loadItem = async () => {
    const result = await axios.get(`http://localhost:8080/items/${id}`);
    setItem(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Item Details</h2>

          <div className="card">
            <div className="card-header">
              Details of item id : {item.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name: </b>
                  {item.name}
                </li>
                <li className="list-group-item">
                  <b>Cost:</b>
                  {item.cost}
                </li>
                <li className="list-group-item">
                  <b>Category: </b>
                  {item.category}
                </li>
                
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}