import { GiHeartOrgan } from "react-icons/gi";
import { BsFillLungsFill } from "react-icons/bs";
import { FaXRay } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { GiStomach } from "react-icons/gi";
import { FaRibbon } from "react-icons/fa";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { RiTestTubeFill } from "react-icons/ri";

export const FindByDepartment = () => {
    return (
        <>
            <div class="flex items-center justify-center h-full mt-32">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-auto">
                
                    <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl transform transition-transform hover:scale-105">
                        <div class="text-white flex items-center justify-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2">
                                <GiHeartOrgan style={{width: '32px', height: '32px'}}/>
                        </div>
                        <div class="mt-8">
                            <p class="text-xl text-center font-semibold my-2 text-blue-900">Cardiologist</p>
                            <div class="flex justify-center space-x-2 text-gray-400 text-sm">
                                <p class="text-center">Leading cardiology care: advanced treatments, expert cardiologists, and patient-focused approach</p>
                            </div>
                            <div class="flex justify-center space-x-2 text-gray-400 text-sm">
                                <a href="/cardiologist" class="text-blue-900 underline mt-10">
                                    <button class="hover:underline">Read More</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl transform transition-transform hover:scale-105">
                        <div class="text-white flex items-center justify-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2">
                            <BsFillLungsFill style={{width: '32px', height: '32px'}}/>
                        </div>
                        <div class="mt-8">
                            <p class="text-xl text-center font-semibold my-2 text-blue-900">Pulmonary</p>
                            <div class="flex justify-center space-x-2 text-gray-400 text-sm">
                                <p class="text-center">Pioneering Pulmonary Care: Advanced Treatments for Respiratory Wellness and Healing.</p>
                            </div>
                            <div class="flex justify-center space-x-2 text-gray-400 text-sm">
                                <a href="/pulmonary" class="text-blue-900 underline mt-10">
                                    <button class="hover:underline">Read More</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl transform transition-transform hover:scale-105">
                        <div class="text-white flex items-center justify-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2">
                                <FaXRay style={{width: '32px', height: '32px'}}/>
                        </div>
                        <div class="mt-8">
                            <p class="text-xl text-center font-semibold my-2 text-blue-900">Radiologist</p>
                            <div class="flex justify-center space-x-2 text-gray-400 text-sm">
                                <p class="text-center">Radiology Excellence: Cutting-Edge Imaging for Precise Diagnostics and Professional Care.</p>
                            </div>
                            <div class="flex justify-center space-x-2 text-gray-400 text-sm">
                                <a href="/radiologist" class="text-blue-900 underline mt-10">
                                    <button class="hover:underline">Read More</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl transform transition-transform hover:scale-105">
                        <div class="text-white flex items-center justify-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2">
                                <GiBrain style={{width: '32px', height: '32px'}}/>
                        </div>
                        <div class="mt-8">
                            <p class="text-xl text-center font-semibold my-2 text-blue-900">Neurology</p>
                            <div class="flex justify-center space-x-2 text-gray-400 text-sm">
                                <p class="text-center">Neurology Excellence: Delivering Advanced Care for Optimal Brain and Nervous Health Outcomes.</p>
                            </div>
                            <div class="flex justify-center space-x-2 text-gray-400 text-sm">
                                <a href="/neurologist" class="text-blue-900 underline mt-10">
                                    <button class="hover:underline">Read More</button>
                                </a>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-center h-full mt-10">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-auto">
                
                    <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl transform transition-transform hover:scale-105">
                        <div class="text-white flex items-center justify-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2">
                                <GiStomach style={{width: '32px', height: '32px'}}/>
                        </div>
                        <div class="mt-8">
                            <p class="text-xl text-center font-semibold my-2 text-blue-900">Hypnotherapy</p>
                            <div class="flex justify-center space-x-2 text-gray-400 text-sm">
                                <p class="text-center">Hypnotherapy: Unlocking Potential, Relieving Stress, and Promoting Mental Wellness through Guided Sessions.</p>
                            </div>
                            <div class="flex justify-center space-x-2 text-gray-400 text-sm">
                                <a href="/your-route" class="text-blue-900 underline mt-10">
                                    <button class="hover:underline">Read More</button>
                                </a>                            
                            </div>
                        </div>
                    </div>

                    <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl transform transition-transform hover:scale-105">
                        <div class="text-white flex items-center justify-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2">
                            <FaRibbon style={{width: '32px', height: '32px'}}/>
                        </div>
                        <div class="mt-8">
                            <p class="text-xl text-center font-semibold my-2 text-blue-900">Oncology</p>
                            <div class="flex justify-center space-x-2 text-gray-400 text-sm">
                                <p class="text-center">Oncology Commitment: Compassionate Care, Advanced Treatments, and Support for Cancer Patients' Well-being.</p>
                            </div>
                            <div class="flex justify-center space-x-2 text-gray-400 text-sm">
                                <a href="/your-route" class="text-blue-900 underline mt-10">
                                    <button class="hover:underline">Read More</button>
                                </a>                            
                            </div>
                        </div>
                    </div>

                    <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl transform transition-transform hover:scale-105">
                        <div class="text-white flex items-center justify-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2">
                                <RiSurgicalMaskFill style={{width: '32px', height: '32px'}}/>
                        </div>
                        <div class="mt-8">
                            <p class="text-xl text-center font-semibold my-2 text-blue-900">Covid-19</p>
                            <div class="flex justify-center space-x-2 text-gray-400 text-sm">
                                <p class="text-center">Covid-19: Global Response, Vaccination Efforts, and Community Resilience Against the Pandemic Challenges.</p>
                            </div>
                            <div class="flex justify-center space-x-2 text-gray-400 text-sm">
                                <a href="/your-route" class="text-blue-900 underline mt-10">
                                    <button class="hover:underline">Read More</button>
                                </a>                            
                            </div>
                        </div>
                    </div>

                    <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl transform transition-transform hover:scale-105">
                        <div class="text-white flex items-center justify-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2">
                                <RiTestTubeFill style={{width: '32px', height: '32px'}}/>
                        </div>
                        <div class="mt-8">
                            <p class="text-xl text-center font-semibold my-2 text-blue-900">Lab Tests</p>
                            <div class="flex justify-center space-x-2 text-gray-400 text-sm">
                                <p class="text-center">Lab Tests: Precision Diagnosis, Essential Health Insights, and Personalized Care Approaches for Patients.</p>
                            </div>
                            <div class="flex justify-center space-x-2 text-gray-400 text-sm">
                                <a href="/your-route" class="text-blue-900 underline mt-10">
                                    <button class="hover:underline">Read More</button>
                                </a>                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </>

    )
}