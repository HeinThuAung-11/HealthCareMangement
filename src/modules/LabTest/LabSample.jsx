import g1 from "./images/g1.jpg"
import g2 from "./images/g2.jpg"
import g3 from "./images/g3.jpg"
import g4 from "./images/g4.jpg"

export const LabSample = () => {

    return (
        <div className={" border-b-blue-700 flex flex-col gap-10 p-10"}>
            <h1 className={"font-bold text-blue-700 text-4xl text-center"}>Laboratory Sample</h1>
            <div className={"flex  justify-around items-center gap-5"}>
            <div className="flex flex-col w-1/4">
                <div className="bg-blue-500">
                    <img src={g1} alt={g1} />
                    <h1 className="text-white text-lg text-center py-3">Blood Samples</h1>
                </div>
                <p className="text-center my-4 mx-2">
                    Precise analysis for various conditions, aiding in diagnostics and treatment planning with our state-of-the-art laboratory technology.
                </p>
                </div>

                <div className="flex flex-col w-1/4">
                <div className="bg-blue-500">
                    <img src={g2} alt={g2} />
                    <h1 className="text-white text-lg text-center py-3">Urine Specimens</h1>
                </div>
                <p className="text-center my-4 mx-2">
                    Comprehensive testing to detect diseases, monitor health, and provide valuable insights for personalized patient care and wellness strategies.
                </p>
                </div>

                <div className="flex flex-col w-1/4">
                    <div className="bg-blue-500">
                        <img src={g3} alt={g3} />
                        <h1 className="text-white text-lg text-center py-3">Tissue Biopsies</h1>
                    </div>
                    <p className="text-center my-4 mx-2">
                        Best pathology services for accurate cancer diagnosis, guiding clinicians in formulating effective treatment strategies for optimal outcomes.
                    </p>
                </div>

                <div className="flex flex-col w-1/4">
                    <div className="bg-blue-500">
                        <img src={g4} alt={g4} />
                        <h1 className="text-white text-lg text-center py-3">Microbial Cultures</h1>
                    </div>
                    <p className="text-center my-4 mx-2">
                       IPrecision in identifying agents, gauging antibiotic susceptibility, and controlling infection, ensuring optimal patient care while minimizing the spread.</p>
                </div>
            </div>


        </div>
    )
}