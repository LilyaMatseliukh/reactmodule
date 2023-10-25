import React from 'react';
import {products} from "./data/data";
import ProductComponent from "./components/product/ProductComponent";

const App = () => {
  return (
      <div className="App">
          {
              products.map((product, index) => (
                  <ProductComponent item={product} key={index}/>
              ))
          }
      </div>
  );
};

export {App};
