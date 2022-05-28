import React from "react";

const AddReview = () => {
  return (
    <section className="flex justify-center px-10 py-10">
      <form
        class="form-control w-100"
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
          <label class="label">
            <span class="label-text">Your Name</span>
          </label>
          <label class="input-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              class="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label class="label">
            <span class="label-text">Profile Pictures</span>
          </label>
          <label class="input-group">
            <input
              type="text"
              name="imageUrl"
              placeholder="Image Url"
              class="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label class="label">
            <span class="label-text">Your Comments</span>
          </label>
          <label class="input-group">
            <textarea
              class="textarea textarea-bordered"
              placeholder="Description"
              name="description"
            ></textarea>
          </label>
        </div>

        <div className="button-area my-3 flex justify-center">
          <button className="btn-full">SUBMIT</button>
        </div>
      </form>
    </section>
  );
};

export default AddReview;
