import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import swal from "sweetalert";
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
          const education = e.target.edu.value;
          const profile = e.target.profile.value;
          const updateUser = {
            email,
            name,
            number,
            address,
            profile,
            education,
          };
          const url = `https://polar-taiga-99861.herokuapp.com/updateUser/${email}`;
          fetch(url, {
            method: "PUT",
            body: JSON.stringify(updateUser),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              if (data?.acknowledged === true || data?.modifiedCount === 1) {
                swal(
                  "PROFILE  UPDATED",
                  "PROFILE UPDTAE TO DATABASE",
                  "success"
                );
              }
            });
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
            <span className="label-text">Profile Link</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="profile"
              required
              placeholder="Linkedin"
              className="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Education</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="edu"
              required
              placeholder="Education"
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
              required
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
