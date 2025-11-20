import ClosestPartner from "./ClosestPartner";
import ColorPalette from "./ColorPalette";
import HeaderLeft from "./HeaderLeft";

const ResultComponent = () => {

  return (
    <div className="bg-main flex justify-between min-h-screen p-3">

      {/* kiri */}
      <div className="flex flex-col">
        <div>
          <HeaderLeft />
        </div>

        {/* spacer */}
        <div className="pt-[42vh] md:pt-[42vh]"></div>

        <div className="md:w-[30vw] mb-3">
          <ColorPalette />
        </div>

        <div className="md:w-[30vw] mb-4">
          <ClosestPartner />
        </div>
      </div>

      {/* tengah */}
      <div>
        <h1>TENGAH</h1>
      </div>
      
      
      {/* kanan */}
      <div>
        <h1>KANAN</h1>
      </div>

    </div>
  );
};

export default ResultComponent;
