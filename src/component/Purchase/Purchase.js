import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import auth from "../../firebase";
import "./PurchasePage.css";

const PurchasePage = () => {
  const [isTrue, setTrue] = useState(false);
  const [newQuantity, setNewQuantity] = useState(0);
  const [error, setError] = useState("");
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [tool, setTool] = useState([]);
  const productName = tool?.name;
  useEffect(() => {
    fetch(`https://polar-taiga-99861.herokuapp.com/tool/${id}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [id]);

  const handleQuantity = (event) => {
    let quantity = event.target.value;
    quantity = parseInt(quantity);

    if (quantity >= tool?.minOrderQuantity && quantity <= tool?.available) {
      setTrue(true);
      setNewQuantity(quantity);
      setError("");
    } else {
      setTrue(false);
      setNewQuantity(0);
      setError(
        `Minimum Order ${tool.minOrderQuantity} and Maximum Order ${tool?.available}`
      );
    }
  };
  const handleOrder = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const product = event.target.product.value;
    const quantity = newQuantity;
    const address = event.target.address.value;
    const phone = event.target.phone.value;

    const data = {
      name: name,
      email: email,
      product: product,
      quantity: quantity,
      address: address,
      phone: phone,
    };
    fetch("https://polar-taiga-99861.herokuapp.com/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.result?.insertedId) {
          swal(
            "Order Successful!",
            "Your Order Successfully Added to Database!",
            "success"
          );
        }
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    event.target.reset(); // to reset form value
  };
  return (
    <div className="flex flex-col justify-center">
      <div className="w-full flex-col lg:flex">
        <div className="card-item">
          <div>
            <img className="w-full" src={tool?.img} alt="" />
          </div>
          <div>
            <p className="tool-title">{tool?.name}</p>
            <p className="tool-price">
              Price: <span className="text-primary">{tool?.price}$/pcs</span>
            </p>
            <p>{tool?.description?.slice(0, 100)}</p>
            <p className="tool-min-order">
              Minimum Order Quantity:{" "}
              <span className="text-primary">
                {tool?.minOrderQuantity || 10} pcs
              </span>
            </p>
            <p className="tool-available">
              Total Price:{" "}
              <span className="text-primary">{tool?.available || 10} pcs</span>
            </p>
          </div>
        </div>
      </div>

      <form
        className="flex flex-col justify-center items-center mt-5 lg:w-96 xs:w-xs lg:ml-20"
        onSubmit={handleOrder}
      >
        <input
          type="number"
          className="input input-bordered w-full max-w-lg mb-3"
          onChange={handleQuantity}
          placeholder="Enter quantity"
          required
        />
        <span className="text-red-500 text-sm mb-2">{error}</span>
        <input
          className="input input-bordered w-full max-w-lg mb-3"
          name="product"
          value={productName}
          disabled
        />
        <input
          className="input input-bordered w-full max-w-lg mb-3"
          name="email"
          value={user?.email}
          disabled
        />
        <input
          className="input input-bordered w-full max-w-lg mb-3"
          name="name"
          value={user?.displayName}
          disabled
        />
        {/* <input className='input input-bordered w-full max-w-lg mb-3' {...register("age", { min: 18, max: 99 })} placeholder="Enter address"/> */}
        <input
          className="input input-bordered w-full max-w-lg mb-3"
          name="address"
          placeholder="Enter address"
          required
        />
        <input
          className="input input-bordered w-full max-w-lg mb-3"
          placeholder="Enter Phone Number"
          name="phone"
          required
        />
        <input
          className="btn btn-primary text-white lg:w-96 xs:w-xs"
          type="submit"
          value="Place Order"
          disabled={!isTrue}
        />
      </form>
    </div>
  );
};

export default PurchasePage;
