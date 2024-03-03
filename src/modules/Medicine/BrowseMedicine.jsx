import skin from "./images/skin.jpg";
import {Link} from "react-router-dom";
import weight from "./images/weight.jpg"
import pain from "./images/pain.jpg"
import baby from "./images/baby.jpg"
import fit from "./images/fit.jpg"
import vita from "./images/vita.jpg"
import hair from "./images/hair.jpg"
import other from "./images/other.jpg"

export const BrowseMedicine = () => {
    return (
        <>
            <h1 className={"font-bold text-blue-700 text-4xl text-center my-5"}>Browse Medicines & Health Products</h1>
            <div className={"grid grid-cols-12 gap-20"}>
                <Medicine text={"Skin"} url={"skin"} img={skin}/>
                <Medicine text={"Weight"} url={"weight"} img={weight}/>
                <Medicine text={"Pain"} url={"pain"} img={pain}/>
                <Medicine text={"Baby"} url={"baby"} img={baby}/>
                <Medicine text={"Fit"} url={"fit"} img={fit}/>
                <Medicine text={"Multi-Vitamins"} url={"multi-vitamins"} img={vita}/>
                <Medicine text={"Hair"} url={"hair"} img={hair}/>
                <Medicine text={"Others"} url={"others"} img={other}/>
            </div>
        </>
    )
}

const Medicine = ({text, url, img}) => {
    return (
        <div className={"col-span-3 bg-blue-700 p-3"}>
            <Link to={url}>
                <div>
                    <img src={img} alt={img} className={"h-[140px]"}/>
                    <h1 className={"text-white text-lg text-center pt-2 font-bold"}>{text}</h1>
                </div>
            </Link>
        </div>
    )
}

