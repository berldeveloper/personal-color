import CarouselLips from "./CarouselLips";

const ProductLip = () => {
  return (
    <div className="w-[80vw] md:w-[40vw] bg-card-component shadow-lg mt-10 p-3 rounded-lg flex flex-col items-center justify-center">
      <div className="p-3 font-bold text-white berl-btn w-full md:w-[20vw] text-center rounded-lg">
        B ERL LIP MATTE
      </div>

      <CarouselLips />
    </div>
  );
};

export default ProductLip;
