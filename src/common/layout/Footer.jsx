export const Footer = () => {
    return (
        <footer className="bg-slate-100 py-5" aria-labelledby="footer-heading">
            <div className="mt-16 grid grid-cols-12 gap-2 px-10">
                <div className={"col-span-3 flex flex-col items-center"}>
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">PocketDoc.</h3>
                    <ul role="list" className="mt-6 space-y-4">
                        <li>
                            <a href="#"
                               className="text-sm leading-6 text-gray-600 hover:text-gray-900">About</a>
                        </li>
                        <li>
                            <a href="#"
                               className="text-sm leading-6 text-gray-600 hover:text-gray-900">Blog</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Careers</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-3 flex flex-col items-center">
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">For Patients</h3>
                    <ul role="list" className="mt-6 space-y-4">
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Search For
                                Clinics</a>
                        </li>
                        <li>
                            <a href="#"
                               className="text-sm leading-6 text-gray-600 hover:text-gray-900">Search For Hospitals</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Books For
                                Diagnostic Tests</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Covid Hospital
                                Listing</a>
                        </li>
                    </ul>
                </div>
                <div className={"col-span-3 flex flex-col items-center"}>
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">For Doctors</h3>
                    <ul role="list" className="mt-6 space-y-4">
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">PocketDoc
                                Consult</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">PocketDoc Health
                                Feed</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">PocketDoc
                                Profile</a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-3 flex flex-col items-center">
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">Social</h3>
                    <ul role="list" className="mt-6 space-y-4">
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Facebook</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Twitter</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Youtube</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}