import React from "react";

const AddReview = () => {
  return (
    <section className="flex justify-center px-10 py-10">
      <form
        className="form-control w-100"
        onSubmit={(e) => {
          e.preventDefault();
          const rating = e.target.rating8.value;
          const name = e.target.name.value;
          const description = e.target.description.value;
          const review = {
            name,
            rating,
            description,
          };
          const url = `https://polar-taiga-99861.herokuapp.com/reviews`;
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
              required
            />
          </label>
        </div>
        <div class="rating rating-lg my-5">
          <input
            type="radio"
            name="rating8"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating8"
            class="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating8"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating8"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating8"
            class="mask mask-star-2 bg-orange-400"
          />
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
              required
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
