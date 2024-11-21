import React, {useEffect, useState} from 'react'
import classes from './results.module.css'
import { useParams } from "react-router-dom";
import LayOut from '../../Components/LayOut/LayOut';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../Components/Product/productCard';
// import Loader from "../../Components/Loader/Loader";

const Results = () => {
  const [results, setResults] = useState([]);
  // const [isLoading, setisLoading] = useState(false)
  const { catagoryName } = useParams();
  useEffect(()=>{
   axios
     .get(`${productUrl}/products/category/${catagoryName}`)
     .then((res) => {
       setResults(res.data);
      //  setisLoading(false);
     })
     .catch((err) => {
       console.log(err);
      //  setisLoading(false);
     });
  }, [])

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {catagoryName}</p>
        <hr />
        <div className={classes.products_container}>
          {results?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              renderDesc={false}
              renderAdd={true}
            />
          ))}
        </div>
      </section>
    </LayOut>
  );
}

export default Results;
