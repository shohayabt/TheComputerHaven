import React from "react";

const ProductData = (props) => {
  const { description, _id, price, available, name, imageUrl } = props.product;
  const removeProduct = (id) => {
    const confirm = window.confirm("ARE YOU SURE?", id);
    if (confirm) {
      fetch(`https://polar-taiga-99861.herokuapp.com/removeProduct/${id}`, {
        method: "DELETE",
      });
    }
  };
  return (
    <tr className="text-center">
      <td className="uppercase">{name}</td>
      <td>{price}</td>
      <td>{available}</td>
      <td className="uppercase">{description.slice(0, 17)}</td>
      <td>
        <button className="btn-full signout" onClick={() => removeProduct(_id)}>
          DELETE PRODUCT
        </button>
      </td>
    </tr>
  );
};

export default ProductData;
