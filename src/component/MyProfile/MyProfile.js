import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <section className="flex justify-center px-10 py-10">
      <form
        className="form-control w-100"
        onSubmit={(e) => {
          e.preventDefault();
          const email = user?.email;
          const name = e.target.name.value;
          const number = e.target.number.value;
          const address = e.target.address.value;
          const updateUser = {
            email,
            name,
            number,
            address,
          };
          const url = `http://localhost:5000/updateUser/${email}`;
          fetch(url, {
            method: "PUT",
            body: JSON.stringify(updateUser),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((data) => console.log(data));
          e.target.reset();
        }}
      >
        <div>
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="email"
              value={user.email}
              readOnly
              disabled
              placeholder="info@site.com"
              className="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <label className="input-group">
            <textarea
              className="textarea textarea-bordered"
              placeholder="Address"
              name="address"
            ></textarea>
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Mobile Number</span>
          </label>
          <label className="input-group">
            <input
              type="number"
              name="number"
              placeholder="+880019"
              className="input input-bordered"
            />
          </label>
        </div>

        <div className="button-area my-3 flex justify-center">
          <button className="btn-full">UPDATE PROFILE</button>
        </div>
      </form>
    </section>
  );
};

export default MyProfile;
