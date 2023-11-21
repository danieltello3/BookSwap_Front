import Button from "../../components/ui/atomos/Button/Button";
import PurchaseTable from "../../components/ui/organismos/PurchaseTable/PurchaseTable";
import Search from "../../components/ui/atomos/Search/Search";

const ShoppingHistory = () => {
    return (
        <div className="bg-white p-8 rounded-md w-full">
            <div className=" flex items-center justify-between pb-6">
                <div>
                    <h2 className="text-gray-600 font-semibold">Historial de compras</h2>
                    <span className="text-xs">Todos los productos</span>
                </div>
                <div className="flex items-center justify-between">
                <Search placeholder="Buscar compra"/>                    
                </div>
            </div>
            <div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <PurchaseTable />
                        <div
                            className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                            <span className="text-xs xs:text-sm text-gray-900">
                                Showing 1 to 4 of 50 Entries
                            </span>
                            <div className="inline-flex mt-2 xs:mt-0">
                                <Button variant="primary" className="mr-2">Prev</Button>
                                <Button variant="primary">Next</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingHistory;