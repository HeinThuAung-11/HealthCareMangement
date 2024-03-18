export const MedicineList = () => {

    const medicine = [
        {
            url: "https://images.unsplash.com/photo-1662673143520-721ed4fbe965?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Multivitamin Tablets",
            price: "£10",
            stock: "Instock",
            Location: "Coventry, UK",
        },
        {
            url: "https://images.unsplash.com/photo-1606015989047-2ecc98a23ae1?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Multivitamin Capsules",
            price: "£15",
            stock: "Instock",
            Location: "Coventry, UK",
        },
        {
            url: "https://images.unsplash.com/photo-1593181581874-361761582b9e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Multivitamin Gummies",
            price: "£12",
            stock: "Instock",
            Location: "Coventry, UK",
        },
        {
            url: "https://images.unsplash.com/photo-1668440246511-539c5438518d?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Liquid Multivitamins",
            price: "£20",
            stock: "Instock",
            Location: "Coventry, UK",
        },
        {
            url: "https://plus.unsplash.com/premium_photo-1690534068749-524a21d89307?q=80&w=2272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Multivitamin Powder",
            price: "£18",
            stock: "Instock",
            Location: "Coventry, UK",
        },
        {
            url: "https://plus.unsplash.com/premium_photo-1690534069586-960dd7cfeb39?q=80&w=2272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Multivitamin Drops",
            price: "£25",
            stock: "Instock",
            Location: "Coventry, UK",
        },
        {
            url: "https://images.unsplash.com/photo-1665758574784-7e549d53c7f7?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Multivitamin Chewables",
            price: "£17",
            stock: "Instock",
            Location: "Coventry, UK",
        },
        {
            url: "https://images.unsplash.com/photo-1620892604314-51750d76e6ec?q=80&w=3085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Multivitamin Softgels",
            price: "£22",
            stock: "Instock",
            Location: "Coventry, UK",
        },
        {
            url: "https://images.unsplash.com/photo-1627467959547-8e44da7aa00a?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Multivitamin Syrup",
            price: "£28",
            stock: "Instock",
            Location: "Coventry, UK",
        },
        {
            url: "https://plus.unsplash.com/premium_photo-1690534140957-c24ed3210a22?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Multivitamin Effervescent Tablets",
            price: "£14",
            stock: "Instock",
            Location: "Coventry, UK",
        }
    ];
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
                                {medicine.map((item, index) => {
                                    return <tr>
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