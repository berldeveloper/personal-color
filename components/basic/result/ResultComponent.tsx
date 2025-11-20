import ClosestPartner from "./ClosestPartner";
import ColorPalette from "./ColorPalette";
import HeaderLeft from "./HeaderLeft";

const ResultComponent = () => {
 
  return (
    <div className="bg-main flex flex-col min-h-screen">

      <div>
        <HeaderLeft/>
      </div>

      {/* spacer */}
      <div className="pt-[42vh] md:pt-[42vh]"></div>

      <div className="p-6">
        <ColorPalette />
      </div>

      <div>
        <ClosestPartner/>
      </div>

    </div>
  );
};

export default ResultComponent;
