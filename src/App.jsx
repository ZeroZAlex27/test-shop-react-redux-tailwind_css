import ItemList from "./components/ItemList";
import CreateProduct from "./components/modals/CreateProduct";
import UpdateProduct from "./components/modals/UpdateProduct";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
    const { storedValue, setStoredValue } = useLocalStorage();

    return (
        <div>
            <div className="text-center">
                <button
                    type="button"
                    onClick={() => {
                        setStoredValue(true);
                    }}
                    className="inline-block m-5 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                    Добавить
                </button>
            </div>
            <CreateProduct />
            <UpdateProduct />
            <ItemList />
        </div>
    );
}

export default App;