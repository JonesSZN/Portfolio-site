import { Warehouse } from "lucide-react";
import { Building2 } from "lucide-react";
import { SquarePen } from "lucide-react";

const Offerings = () => {
  return (
    <section className="w-full bg-[#f9f9ff] lg:py-24 py-12 flex justify-center">
      <div className="lg:w-[60%] w-[90%] max-w-[1920px] flex flex-col justify-center">
        <Top />
        <div className="lg:grid lg:grid-cols-3 flex flex-col gap-8 lg:gap-8 ">
          <Cards />
        </div>
      </div>
    </section>
  );
};

const Cards = () => {
  const CardObject = [
    {
      image: <Warehouse size={50} color="#e1e1e1" />,
      title: "ARCHITECTURE",
      text: "If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.",
    },
    {
      image: <Building2 size={50} color="#e1e1e1" />,
      title: "INTERIOR DESIGN",
      text: "If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.",
    },
    {
      image: <SquarePen size={50} color="#e1e1e1" />,
      title: "CONCEPT DESIGN",
      text: "If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.",
    },
    {
      image: <Warehouse size={50} color="#e1e1e1" />,
      title: "ARCHITECTURE",
      text: "If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.",
    },
    {
      image: <Building2 size={50} color="#e1e1e1" />,
      title: "INTERIOR DESIGN",
      text: "If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.",
    },
    {
      image: <SquarePen size={50} color="#e1e1e1" />,
      title: "CONCEPT DESIGN",
      text: "If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.",
    },
  ];
  return (
    <>
      {CardObject.map((item) => (
        <div className="rounded-lg flex hover:shadow-2xl duration-500 transition-all cursor-pointer flex-col gap-5 bg-white py-[50px] px-[35px]">
          {item.image}
          <h2 className="text-[21px] font-bold text-[#222222]">{item.title}</h2>
          <p className="text-[16px] text-[#777777]">{item.text}</p>
        </div>
      ))}
    </>
  );
};

const Top = () => {
  return (
    <div className="flex flex-col gap-4 mb-16 items-center justify-center">
      <h1 className="lg:text-[36px] text-[25px] text-center font-bold text-[#222222]">
        OFFERINGS TO MY CLIENTS
      </h1>
      <p className="text-[16px] text-center max-w-[550px] text-[#777777]">
        If you are looking at blank cassettes on the web, you may be very
        confused at the difference in price. You may see some for as low as $.17
        each.
      </p>
    </div>
  );
};

export { Offerings };
