import ContactForm from "@/components/basic/result/ContactForm";
import Heading from "@/components/ui/Heading";

const Page = () => {
  return (
    <div className="bg-main min-h-screen flex flex-col justify-center items-center">
      <Heading />

      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Page;
