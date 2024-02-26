import g2 from "./images/g2.jpg"
import g3 from "./images/g3.jpg"
import g4 from "./images/g4.jpg"

export const LabSample = () => {

    return (
        <div className={"border-2 border-b-blue-700 flex flex-col gap-10 p-10"}>
            <h1 className={"font-bold text-blue-700 text-4xl text-center"}>Laboratory Sample</h1>
            <div className={"flex  justify-around items-center "}>
                <div className={"flex flex-col w-1/4"}>
                    <div className={"bg-blue-700"}>
                        <img src={g4} alt={g4}/>
                        <h1 className={"text-white text-lg text-center py-3"}>Sample 01</h1>
                    </div>
                    <h1 className={"text-center text-blue-700 text-xl font-semibold my-3"}>Description</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type
                        and scrambled it to make a type specimen book. </p>
                </div>
                <div className={"flex flex-col w-1/4"}>
                    <div className={"bg-blue-700"}>
                        <img src={g2} alt={g2}/>
                        <h1 className={"text-white text-lg text-center py-3"}>Sample 02</h1>
                    </div>
                    <h1 className={"text-center text-blue-700 text-xl font-semibold my-3"}>Description</h1>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type
                        and scrambled it to make a type specimen book. </p>
                </div>
                <div className={"flex flex-col w-1/4"}>
                    <div className={"bg-blue-700"}>
                        <img src={g3} alt={g3}/>
                        <h1 className={"text-white text-lg text-center py-3"}>Sample 03</h1>
                    </div>
                    <h1 className={"text-center text-blue-700 text-xl font-semibold my-3"}>Description</h1>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type
                        and scrambled it to make a type specimen book. </p>
                </div>
                <div className={"flex flex-col w-1/4"}>
                    <div className={"bg-blue-700"}>
                        <img src={g4} alt={g4}/>
                        <h1 className={"text-white text-lg text-center py-3"}>Sample 04</h1>
                    </div>
                    <h1 className={"text-center text-blue-700 text-xl font-semibold my-3"}>Description</h1>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type
                        and scrambled it to make a type specimen book. </p>
                </div>
            </div>


        </div>
    )
}