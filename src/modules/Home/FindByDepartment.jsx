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
                
                    <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                    <div class="text-white flex items-center justify-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2">
                                <GiHeartOrgan style={{width: '32px', height: '32px'}}/>
                        </div>
                        <div class="mt-8">
                            <p class="text-xl font-semibold my-2">App Development</p>
                            <div class="flex space-x-2 text-gray-400 text-sm">
                            
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p>Marketing Team</p> 
                            </div>
                            <div class="flex space-x-2 text-gray-400 text-sm my-3">
                            
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p>1 Weeks Left</p> 
                            </div>
                            <div class="border-t-2"></div>

                            <div class="flex justify-between">
                                <div class="my-2">
                                    <p class="font-semibold text-base mb-2">Team Member</p>
                                    <div class="flex space-x-2">
                                        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                                        class="w-6 h-6 rounded-full"/>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg" 
                                        class="w-6 h-6 rounded-full"/>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU" 
                                        class="w-6 h-6 rounded-full"/>
                                    </div>
                                </div>
                                <div class="my-2">
                                    <p class="font-semibold text-base mb-2">Progress</p>
                                    <div class="text-base text-gray-400 font-semibold">
                                        <p>34%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- 2 card --> */}
                    <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                    <div class="text-white flex items-center justify-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2">
                                    <BsFillLungsFill style={{width: '32px', height: '32px'}}/>
                        </div>
                        <div class="mt-8">
                            <p class="text-xl font-semibold my-2">Web Design</p>
                            <div class="flex space-x-2 text-gray-400 text-sm">
                            
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p>Core UI Team</p> 
                            </div>
                            <div class="flex space-x-2 text-gray-400 text-sm my-3">
                            
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p>3 Weeks Left</p> 
                            </div>
                            <div class="border-t-2 "></div>

                            <div class="flex justify-between">
                                <div class="my-2">
                                    <p class="font-semibold text-base mb-2">Team Member</p>
                                    <div class="flex space-x-2">
                                        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                                        class="w-6 h-6 rounded-full"/>
                                    </div>
                                </div>
                                <div class="my-2">
                                    <p class="font-semibold text-base mb-2">Progress</p>
                                    <div class="text-base text-gray-400 font-semibold">
                                        <p>76%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- 3 card --> */}
                    <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                    <div class="text-white flex items-center justify-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2"> 
                                <FaXRay style={{width: '32px', height: '32px'}}/>
                        </div>
                        <div class="mt-8">
                            <p class="text-xl font-semibold my-2">Leading Page</p>
                            <div class="flex space-x-2 text-gray-400 text-sm">
                                
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p>Marketing Team</p> 
                            </div>
                            <div class="flex space-x-2 text-gray-400 text-sm my-3">
                                
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p>2 Days Left</p> 
                            </div>
                            <div class="border-t-2 "></div>

                            <div class="flex justify-between">
                                <div class="my-2">
                                    <p class="font-semibold text-base mb-2">Team Member</p>
                                    <div class="flex space-x-2">
                                        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                                        class="w-6 h-6 rounded-full"/>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU" 
                                        class="w-6 h-6 rounded-full"/>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg" 
                                        class="w-6 h-6 rounded-full"/>
                                    </div>
                                </div>
                                <div class="my-2">
                                    <p class="font-semibold text-base mb-2">Progress</p>
                                    <div class="text-base text-gray-400 font-semibold">
                                        <p>4%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- 4 card --> */}
                    <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                    <div class="text-white flex items-center justify-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2"> 
                                    <GiBrain style={{width: '32px', height: '32px'}}/>
                        </div>
                        <div class="mt-8">
                            <p class="text-xl font-semibold my-2">Business Compare</p>
                            <div class="flex space-x-2 text-gray-400 text-sm">

                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p>Marketing Team</p> 
                            </div>
                            <div class="flex space-x-2 text-gray-400 text-sm my-3">

                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p>1 Month Left</p> 
                            </div>
                            <div class="border-t-2 "></div>

                            <div class="flex justify-between">
                                <div class="my-2">
                                    <p class="font-semibold text-base mb-2">Team Member</p>
                                    <div class="flex space-x-2">
                                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                                        class="w-6 h-6 rounded-full"/>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg" 
                                        class="w-6 h-6 rounded-full"/>
                                    </div>
                                </div>
                                <div class="my-2">
                                    <p class="font-semibold text-base mb-2">Progress</p>
                                    <div class="text-base text-gray-400 font-semibold">
                                        <p>90%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-center h-full">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-auto">
                
                    <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                    <div class="text-white flex items-center justify-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2">           
                    <GiStomach style={{width: '32px', height: '32px'}}/>
                        </div>
                        <div class="mt-8">
                            <p class="text-xl font-semibold my-2">App Development</p>
                            <div class="flex space-x-2 text-gray-400 text-sm">
                            
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p>Marketing Team</p> 
                            </div>
                            <div class="flex space-x-2 text-gray-400 text-sm my-3">
                            
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p>1 Weeks Left</p> 
                            </div>
                            <div class="border-t-2"></div>

                            <div class="flex justify-between">
                                <div class="my-2">
                                    <p class="font-semibold text-base mb-2">Team Member</p>
                                    <div class="flex space-x-2">
                                        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                                        class="w-6 h-6 rounded-full"/>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg" 
                                        class="w-6 h-6 rounded-full"/>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU" 
                                        class="w-6 h-6 rounded-full"/>
                                    </div>
                                </div>
                                <div class="my-2">
                                    <p class="font-semibold text-base mb-2">Progress</p>
                                    <div class="text-base text-gray-400 font-semibold">
                                        <p>34%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- 2 card --> */}
                    <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                    <div class="text-white flex items-center justify-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2">                <FaRibbon style={{width: '32px', height: '32px'}}/>
                        </div>
                        <div class="mt-8">
                            <p class="text-xl font-semibold my-2">Web Design</p>
                            <div class="flex space-x-2 text-gray-400 text-sm">
                            
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p>Core UI Team</p> 
                            </div>
                            <div class="flex space-x-2 text-gray-400 text-sm my-3">
                            
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p>3 Weeks Left</p> 
                            </div>
                            <div class="border-t-2 "></div>

                            <div class="flex justify-between">
                                <div class="my-2">
                                    <p class="font-semibold text-base mb-2">Team Member</p>
                                    <div class="flex space-x-2">
                                        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                                        class="w-6 h-6 rounded-full"/>
                                    </div>
                                </div>
                                <div class="my-2">
                                    <p class="font-semibold text-base mb-2">Progress</p>
                                    <div class="text-base text-gray-400 font-semibold">
                                        <p>76%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- 3 card --> */}
                    <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                    <div class="text-white flex items-center justify-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2">                <RiSurgicalMaskFill style={{width: '32px', height: '32px'}}/>
                        </div>
                        <div class="mt-8">
                            <p class="text-xl font-semibold my-2">Leading Page</p>
                            <div class="flex space-x-2 text-gray-400 text-sm">
                                
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p>Marketing Team</p> 
                            </div>
                            <div class="flex space-x-2 text-gray-400 text-sm my-3">
                                
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p>2 Days Left</p> 
                            </div>
                            <div class="border-t-2 "></div>

                            <div class="flex justify-between">
                                <div class="my-2">
                                    <p class="font-semibold text-base mb-2">Team Member</p>
                                    <div class="flex space-x-2">
                                        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                                        class="w-6 h-6 rounded-full"/>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU" 
                                        class="w-6 h-6 rounded-full"/>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg" 
                                        class="w-6 h-6 rounded-full"/>
                                    </div>
                                </div>
                                <div class="my-2">
                                    <p class="font-semibold text-base mb-2">Progress</p>
                                    <div class="text-base text-gray-400 font-semibold">
                                        <p>4%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- 4 card --> */}
                    <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                        <div class="text-white flex items-center justify-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2">

                            <RiTestTubeFill style={{width: '32px', height: '32px'}}/>
                        </div>
                        <div class="mt-8">
                            <p class="text-xl font-semibold my-2">Business Compare</p>
                            <div class="flex space-x-2 text-gray-400 text-sm">

                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p>Marketing Team</p> 
                            </div>
                            <div class="flex space-x-2 text-gray-400 text-sm my-3">

                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p>1 Month Left</p> 
                            </div>
                            <div class="border-t-2 "></div>

                            <div class="flex justify-between">
                                <div class="my-2">
                                    <p class="font-semibold text-base mb-2">Team Member</p>
                                    <div class="flex space-x-2">
                                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                                        class="w-6 h-6 rounded-full"/>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg" 
                                        class="w-6 h-6 rounded-full"/>
                                    </div>
                                </div>
                                <div class="my-2">
                                    <p class="font-semibold text-base mb-2">Progress</p>
                                    <div class="text-base text-gray-400 font-semibold">
                                        <p>90%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}