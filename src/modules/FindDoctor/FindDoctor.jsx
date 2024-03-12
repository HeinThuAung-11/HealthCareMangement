import { Outlet } from "react-router-dom";
import { Banner } from "../../common/components/Banner.jsx";
import homebanner from "./homebanner.png";
import { OtherFeatures } from "../../common/components/OtherFeatures.jsx";
import { Articles } from "../../common/components/Articles.jsx";
import { OurTeam } from "./OurTeam.jsx";
import { SearchDoc } from "./FindBookDoctor.jsx";

export const FindDoctor = () => {
  return (
    <>
      <div className="relative">
        <Banner imageUrl={homebanner} altText={"Home Banner"} />
        <div className="absolute top-0 left-0 w-full h-full backdrop-blur">
          <SearchDoc />
        </div>
      </div>
      <OtherFeatures />
      <OurTeam />
      <Articles />
      <Outlet />
    </>
  );
};
