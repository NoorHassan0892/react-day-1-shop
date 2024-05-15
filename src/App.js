import logo from "./logo.svg";
import "./App.css";
import Title from "./component/Title";
import Image from "./component/Image";
import { products } from "./component/products";

function App() {
  const productlist = products.map((product) => {
    return (
      <>
        <h1>{product.name}</h1>
        <img src={product.img} />
        <h3>{product.price}</h3>
      </>
    );
  });
  return (
    <div>
      <Title />
      <Image />
      <div
        style={{
          display: "flex",
          gap: "10px",
          width: "100px",
          height: "100px",
          border: "solid",
        }}
      >
        {productlist}
      </div>
    </div>
  );
}

export default App;
