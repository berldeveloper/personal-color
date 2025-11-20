import Link from "next/link";
import { Button } from "../ui/button";
import Heading from "../ui/Heading";

const Home = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-center bg-main">
      <div>
        <Heading size="md"/>
      </div>

      <h1 className="text-[#7D4754] font-bold text-4xl md:text-5xl leading-tight mb-4">
        Find Your <br /> Personal Color
      </h1>

      <p className="text-[#7D4754]/90 text-base md:text-lg max-w-sm leading-relaxed mb-12">
        Get to know your <br /> personal color to find the <br /> colors that
        suit you best!
      </p>

      <div className="flex flex-col gap-6 w-full h-auto max-w-xs">
        <Link href="/basic/hint" className="berl-btn">
          <Button className="berl-btn">
            Basic
            <div className="text-white/80 text-xs font-medium italic">
              4 steps
            </div>
          </Button>
        </Link>

        {/* <Link href="/expert/hint" className="berl-btn">
          <Button className="berl-btn">
            Expert
            <div className="text-white/80 text-xs font-medium italic">
              7 steps
            </div>
          </Button>
        </Link> */}
      </div>
    </div>
  );
};

export default Home;
