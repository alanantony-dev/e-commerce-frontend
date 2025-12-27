import { useEffect, useState } from "react";
import { PRODUCTS_URL } from "../utils/app.constants";

const TopProducts=()=>{
    const [products,setProducts]=useState([]);

    const fetchProducts=async ()=>{
        const response=await fetch(PRODUCTS_URL);
        const {products}=await response.json();
        setProducts(products);
    };

    useEffect(()=>{
        fetchProducts();
    },[]);

    return(
        <div className="flex flex-col w-[80%] m-auto mt-28">
            <span className="text-4xl font-bold">Top Products</span>
            <div className="no-scrollbar flex gap-8 overflow-x-scroll">
                {products.map((prod)=>{
                    return (
                    <div key={prod.title} className="max-w-70 min-w-70 h-80 flex flex-col items-center justify-center whitespace-nowrap bg-wild-sand p-4 rounded-lg">
                        <img src={prod.thumbnail} alt={prod.title} className="w-full h-full object-fill"/>
                        <span>{prod.title}</span>
                        <span className="font-medium">${prod.price}</span>
                    </div>
                    )
                })}
            </div>
        </div>
    )
};
export default TopProducts