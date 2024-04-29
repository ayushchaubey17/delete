
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function CreateListing() {
let par = useParams();
let [data,setData] = useState({});

let handleChange =(event)=>{
  let whoChange = event.target.name;
  let whatChange = event.target.value;

  setData(pre => ({...pre,[whoChange]:whatChange}))
}


  return (
    <div>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-3xl font-bold">Add the listing here</h1>
            <p className="py-6">
              Easy to add the listing here here and manuplulate and update price
              here only...
            </p>
          </div>
          <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
            <form className="card-body" method="post" action={`/api/listing/${par.id}`} >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text" name="title" value={data.title || ""} onChange = {handleChange}
                  placeholder="Cozy Beachfront Cottage"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text" name="description" value={data.description || ""} onChange = {handleChange}
                  placeholder="Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach."
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text" name="image" value={data.image || ""} onChange = {handleChange}
                  placeholder="https://a1.jpg"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input name="price" value={data.price || ""}
                  type="number" onChange = {handleChange}
                  placeholder="2000"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text" name="location" value={data.location || ""} onChange = {handleChange}
                  placeholder="dwarika"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Country</span>
                </label>
                <input    onChange = {handleChange}
                  type="text" name="country" value={data.country || ""}
                  placeholder="india"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary font-bold w-full">
                  Upload Your Lissting
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
