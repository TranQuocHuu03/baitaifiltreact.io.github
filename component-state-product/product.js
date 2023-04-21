import React, { useState, useEffect } from "react";
// import "./../assets/css/Product.css";
import swal from "sweetalert";



const axios = require("axios").default;

const successAlert = (name) => {
  swal({
    title: "Thank you!",
    text: `You bought a ${name}! Your order is processing!`,
    icon: "success",
  });
};

const Product = (props) => {
  return (
   
<div class="card">
        <div class="image">
          <img src={props.imgLink} alt=""  />
        </div>
        <div class="card-body">
        <p>Product name: {props.name}</p>
        <p>
          Price: <span className="text-danger">${props.price}</span>
        </p>
          <button className="btn btn-primary add" onClick={() => successAlert(props.name)}>
            Add to cart
          </button>
          <button className="btn btn-primary update" >
            Update
          </button>
        </div>
        
      </div>
      
  
  );
};

// const Create = (props) => (
//   <div className="product">
//     {/* onSubmit={this.onSave} */}
//     <form>
//       <div className="form-group">
//         <label htmlFor="exampleInputEmail1">Name</label>
//         <input
//           type="text"
//           name="name"
//           value={props.name}
//           // onChange = {props.onChangee}
//           className="form-control"
//           id="exampleInputEmail1"
//           aria-describedby="emailHelp"
//           placeholder="Enter name"
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="exampleInputEmail2">Price</label>
//         <input
//           type="text"
//           name="price"
//           // onChange = {props.onChangee}
//           value={props.price}
//           className="form-control"
//           id="exampleInputEmail2"
//           aria-describedby="emailHelp"
//           placeholder="Enter price"
//         />
//       </div>
//       <div className="form-group">
//         <label>Image</label>
//         <input
//           type="file"
//           name="image"
//           // onChange = {this.onChangeImage}
//           className="form-control"
//           placeholder="image"
//         />
//       </div>
//       <div className="form-group" id="image-edit" style={{ display: "none" }}>
//         <label>Image</label>
//         <img src={props.image} style={{ width: "100px" }} />
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>
//     </form>
//   </div>
// );
// form

const NewProducts = () => {
  const [data, setData] = useState({
    productList: [],
    categoryList: [],
    isLoaded: false,
  });
  const [product, setProduct] = useState({
    id: "",
    name: "",
    image: "",
    price: "",
  });
  // const [isLoaded, setIsLoaded] = useState(false);
  const [categoryId, setCategoryId] = useState("all");
  const getData = async () => {
    if (!data.isLoaded) {
      var res = await axios(
        "https://63aa9ceffdc006ba6046faf6.mockapi.io/api/12/categories"
      );
      var categoryList = await res.data;

      res = await axios(
        "https://63aa9ceffdc006ba6046faf6.mockapi.io/api/12/products"
      );
      var productList = await res.data;

      setData({ categoryList, productList, isLoaded: true });
    }
  };

  // const successUpdate = (id) => {
  //   var product = getProductUpdate(id);
  //   setProduct((pre) => ({
  //     id: product.id,
  //     name: product.name,
  //     image: product.img,
  //     price: product.price,
  //   }));
  //   document.getElementById("image-edit").style.display = "block";
  //   alert(id);
  // };

  // onChange
  // const onChange = (event) => {
  //   setProduct({
  //     ...product,
  //     [event.target.name]: event.target.value,
  //   });
  // };
  // getIDProductUpdate
  // var getProductUpdate = (id) => {
  //   return data.productList.find((product) => product.id === id);
  // };

  useEffect(() => {
    getData(); // eslint-disable-next-line
  }, []);

  if (data.isLoaded) {
    // console.log(categoryId);
    // console.log(data.productList);
    // newProductComponents
    var newProductComponents =
      categoryId === "all"
        ? data.productList.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              imgLink={product.img}
              name={product.name}
              price={product.price}
              // successUpdate={successUpdate}
              // onChange = {onChange}
            />
          ))
        : data.productList
            .filter((product) => product.IdCategories === categoryId)
            .map((product) => (
              <Product
                key={product.id}
                id={product.id}
                imgLink={product.img}
                name={product.name}
                price={product.price}
                // successUpdate={successUpdate}
                // onChange = {onChange}
              />
            ));
    // onchangeUpdate
    // var onChangePro = () => <Create onChangee={onChange} />;
    // categoryComponents
    var categoryComponents = data.categoryList.map((category) => (
      <button class="action-primary" key={category.id} onClick={() => setCategoryId(category.id)}>
        {category.name}
      </button>
    ));
    return (
      <section className="new-products">
        {/* <h1 className="text-center mb-3">New Products in My Shop</h1> */}
        {/* <NavBar/> */}
        <div className="button-nav">
          <button class="action-primary" key="all" onClick={() => setCategoryId("all")}>
            All
          </button>
          
          {categoryComponents}
        
        </div>
       
          {/* <div className="product col-4">{formCoponents}</div> */}
          <div className="product col">{newProductComponents}</div>
        
      
        {/* <div className="form"></div> */}
      </section>
    );
  }
  return <div>Loading...</div>;
};
export { Product, NewProducts as default };
