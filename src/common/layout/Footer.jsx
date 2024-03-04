export const Footer = () => {
    return (
        <footer className="bg-blue-500 py-5" aria-labelledby="footer-heading">
            <div className="mt-16 grid grid-cols-12 gap-2 px-10">
                <div className={"col-span-3 flex flex-col items-center"}>
                    <h3 className="text-sm font-semibold leading-6 text-white">PocketDoc.</h3>
                    <ul role="list" className="mt-6 space-y-4">
                        <li>
                            <a href="#"
                               className="text-sm leading-6 text-white hover:text-white">About</a>
                        </li>
                        <li>
                            <a href="#"
                               className="text-sm leading-6 text-white hover:text-white">Blog</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm leading-6 text-white hover:text-white">Careers</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm leading-6 text-white hover:text-white">Contact Us</a>
                        </li>
                    </ul>
                </div>

                
                <div className="col-span-3 flex flex-col items-center">
                    <h3 className="text-sm font-semibold leading-6 text-white">For Patients</h3>
                    <ul role="list" className="mt-6 space-y-4">
                        <li>
                            <a href="#" className="text-sm leading-6 text-white hover:text-white">Search For
                                Clinics</a>
                        </li>
                        <li>
                            <a href="#"
                               className="text-sm leading-6 text-white hover:text-white">Search For Hospitals</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm leading-6 text-white hover:text-white">Books For
                                Diagnostic Tests</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm leading-6 text-white hover:text-white">Covid Hospital
                                Listing</a>
                        </li>
                    </ul>
                </div>
                <div className={"col-span-3 flex flex-col items-center"}>
                    <h3 className="text-sm font-semibold leading-6 text-white">For Doctors</h3>
                    <ul role="list" className="mt-6 space-y-4">
                        <li>
                            <a href="#" className="text-sm leading-6 text-white hover:text-white">PocketDoc
                                Consult</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm leading-6 text-white hover:text-white">PocketDoc Health
                                Feed</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm leading-6 text-white hover:text-white">PocketDoc
                                Profile</a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-3 flex flex-col items-center">
                    <h3 className="text-sm font-semibold leading-6 text-white">Social</h3>
                    <ul role="list" className="mt-6 space-y-4">
                        <li>
                            <a href="#" className="text-sm leading-6 text-white hover:text-white">Facebook</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm leading-6 text-white hover:text-white">Twitter</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm leading-6 text-white hover:text-white">Youtube</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}