import React from "react";

const AddReview = () => {
  return (
    <section className="flex justify-center px-10 py-10">
      <form
        className="form-control w-100"
        onSubmit={(e) => {
          e.preventDefault();
          const name = e.target.name.value;
          const imageUrl = e.target.imageUrl.value;
          const description = e.target.description.value;
          const review = {
            name,
            imageUrl,
            description,
          };
          const url = `http://localhost:5000/reviews`;
          fetch(url, {
            method: "POST",
            body: JSON.stringify(review),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((data) => alert(data));
          e.target.reset();
        }}
      >
        <div>
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Profile Pictures</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="imageUrl"
              placeholder="Image Url"
              className="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Your Comments</span>
          </label>
          <label className="input-group">
            <textarea
              className="textarea textarea-bordered"
              placeholder="Description"
              name="description"
            ></textarea>
          </label>
        </div>
        <label className="label">
          <span className="label-text">Ratings</span>
        </label>
        <select className="select select-bordered  max-w-xs">
          <option disabled selected>
            5
          </option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>

        <div className="button-area my-3 flex justify-center">
          <button className="btn-full">SUBMIT</button>
        </div>
      </form>
    </section>
  );
};

export default AddReview;
