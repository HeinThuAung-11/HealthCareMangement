import {BrowseMedicine} from "./BrowseMedicine.jsx";
import {OtherFeatures} from "../../common/components/OtherFeatures.jsx";
import { Articles } from "../../common/components/Articles.jsx";

export const Medicine = () => {
    return (
        <>
            <div className={"px-32 my-5"}>
                <BrowseMedicine/>
            </div>
            <div className={"my-10"}>
                <OtherFeatures/>
            </div>
            <div class=" flex items-center justify-center px-5 py-5 mt-40 mb-24">
                <div class=" flex items-center justify-center px-5 py-5">
                    <div class="w-full">
                    <div class="w-full mt-24 mb-24">
                        <h1 class="text-4xl text-blue-500 font-bold text-center">What our users have to say</h1>
                    </div>
                        <div class="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
                        <p class="text-bl text-gray-600 text-center px-5">"Exceptional experience with PocketDoc. The dedicated staff provided compassionate care, ensuring my comfort and recovery. State-of-the-art facilities and prompt services exceeded expectations. Grateful for the skilled medical team and a warm, supportive environment. Highly recommend for outstanding healthcare services."</p>
                        <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
                        <div class="w-full mt-24">
                        <p class="text-md text-blue-900 font-bold text-center">Jake Windsor</p>
                    </div>
                    </div>
                </div>
            </div>
            <Articles/>
        </>
    )
}