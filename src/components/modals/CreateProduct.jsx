import React, { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { productsApi } from "../../redux/services/product.service";

const CreateProduct = () => {
    const [createProduct, {}] = productsApi.useCreateProductMutation();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { createModalVisible, setCreateModalVisible } = useLocalStorage();

    const handleCreate = async () => {
        await createProduct({ title, description }).then(() => {
            setTitle("");
            setDescription("");
            setCreateModalVisible(false);
        });
    };

    return (
        <>
            {createModalVisible ? (
                <div className="backdrop-blur-md justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold">Добавить товар</h3>
                            </div>
                            <div className="w-full max-w-xs">
                                <form className="bg-white shadow-md rounded px-8 pt-2">
                                    <div className="mb-2">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Название
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="Название товара"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Описание
                                        </label>
                                        <input
                                            className="shadow appearance-none borde rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="Описание товара"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex items-center justify-end p-6 -mx-2 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setCreateModalVisible(false)}
                                        >
                                            Закрыть
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="submit"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleCreate();
                                            }}
                                        >
                                            Добавить
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default CreateProduct;
