import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="w-full py-24 bg-[#f9f9ff] flex justify-center">
      <div className="lg:w-[60%] w-[90%] max-w-[1920px]">
        <Top />
        <Cards />
      </div>
    </section>
  );
};
const Cards = () => {
  const CardsObject = [
    {
      Text: "As conscious traveling Paup ers we must always be concerned about our dead Mother Earth. If you think about it, you travel across her face",
      Name: "FANNY SPENCER",
      Rating: <Star size={20} />,
    },
    {
      Text: "As conscious traveling Paup ers we must always be concerned about our dead Mother Earth. If you think about it, you travel across her face",
      Name: "FANNY SPENCER",
      Rating: <Star size={20} />,
    },
    {
      Text: "As conscious traveling Paup ers we must always be concerned about our dead Mother Earth. If you think about it, you travel across her face",
      Name: "FANNY SPENCER",
      Rating: <Star size={20} />,
    },
  ];
  return (
    <div className="lg:grid lg:grid-cols-3 flex flex-col gap-8 lg:gap-8">
      {CardsObject.map((item) => (
        <div className="rounded-lg bg-white border border-[0,0,0,0.5] py-[40px] px-[28px] ">
          <p className="text-[16px] mb-4 text-[#777777]">{item.Text}</p>
          <p className="text-[20px] text-[#222222] font-bold">{item.Name}</p>
          <div className="flex gap-2 mt-2">
            {item.Rating}
            {item.Rating}
            {item.Rating}
            {item.Rating}
            {item.Rating}
          </div>
        </div>
      ))}
    </div>
  );
};

const Top = () => {
  return (
    <div className="flex flex-col items-center mb-16">
      <h2 className="text-[#222222] mb-4 font-bold text-[36px]">
        TESTIMONIALS
      </h2>
      <p className="text-center text-[#777777] max-w-[600px]">
        If you are looking at blank cassettes on the web, you may be very
        confused at the difference in price. You may see some for as low as $.17
        each.
      </p>
    </div>
  );
};

export { Testimonials };
