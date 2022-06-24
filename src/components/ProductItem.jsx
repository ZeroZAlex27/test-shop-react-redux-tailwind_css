import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { productsApi } from "../redux/services/product.service";

const ProductItem = ({ product }) => {
    const [deleteProduct, {}] = productsApi.useDeleteProductMutation();
    const { updateModalVisible, setupdateModalVisible } = useLocalStorage();

    const handleUpdate = () => {
        setupdateModalVisible(true);
    };

    const handleRemove = () => {
        deleteProduct(product);
    };

    return (
        <div className="flex m-3" key={product.id}>
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
                    {product.id}. {product.title}
                </h5>
                <p className="text-gray-700 text-base mb-4">{product.description}</p>
                <button
                    type="button"
                    onClick={handleUpdate}
                    className=" inline-block mx-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                    Изменить
                </button>
                <button
                    type="button"
                    onClick={handleRemove}
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                    Удалить
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
