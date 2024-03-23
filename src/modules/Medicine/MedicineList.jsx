import {useEffect, useState} from "react";

export const MedicineList = () => {

    const [medicine, setMedicine] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://127.0.0.1:8000/medicines/api');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            setMedicine(jsonData);
        };
        fetchData();
    }, []);
    // console.log("medicine", medicine)
    return (
        <>
            {/* <!-- component --> */}

            <div className="bg-white p-8 rounded-md w-full">
                <div className=" flex items-center justify-between pb-6">
                    <div>
                        <h2 className="text-gray-600 font-semibold">Medicines</h2>
                    </div>

                </div>
                <div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                <tr>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Medicine
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Stock
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Location
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Buy
                                    </th>

                                </tr>
                                </thead>
                                <tbody>
                                {medicine && medicine.map((item, index) => {
                                    return <tr key={item._id.$oid}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm" key={index}>
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <img className="w-full h-full rounded-full"
                                                         src={item.url}
                                                         alt=""/>
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {item.name}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{item.stock}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {item.price}
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {item.Location}
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <button
                                                className="text-sm text-blue-50 transition duration-150 hover:bg-blue-500 bg-blue-600 font-semibold py-2 px-4 rounded-full">
                                                Buy
                                            </button>
                                        </td>
                                    </tr>
                                })}
                                </tbody>
                            </table>
                            <div
                                className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
						<span className="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 10 of 50 Pages
                        </span>
                                <div className="inline-flex mt-2 xs:mt-0">
                                    <button
                                        className="text-sm text-blue-50 transition duration-150 hover:bg-blue-500 bg-blue-600 font-semibold py-2 px-4 rounded-l">
                                        Prev
                                    </button>
                                    &nbsp; &nbsp;
                                    <button
                                        className="text-sm text-blue-50 transition duration-150 hover:bg-blue-500 bg-blue-600 font-semibold py-2 px-4 rounded-r">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}