interface HeadingProps {
  size: "sm" | "md" | "lg";
}

const Heading = ({ size = "md" }: HeadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="mb-10">
        <p
          className={`text-[#7D4754] font-semibold font-baloo tracking-wide text-${size}`}
        >
          Berl
        </p>
        <p className={`text-[#7D4754] tracking-wider font-baloo font-medium text-${size}`}>
          COLOR EXPERT
        </p>
      </div>
    </div>
  );
};

export default Heading;
