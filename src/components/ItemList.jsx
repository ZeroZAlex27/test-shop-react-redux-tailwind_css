import React from "react";
import { productsApi } from "../redux/services/product.service";
import ProductItem from "./ProductItem";

const ItemList = () => {
    const { data: products } = productsApi.useGetAllProductsQuery();

    return (
        <div className="m-5 columns-2">
            {products &&
                products.map((product) => <ProductItem key={product.id} product={product} />)}
        </div>
    );
};

export default ItemList;
