import { Bitcoin } from "lucide-react";
import { TabletSmartphone } from "lucide-react";
import { Users } from "lucide-react";

const About = () => {
  return (
    <section className="w-full lg:py-20 py-16 flex justify-center">
      <div className="lg:w-[60%] w-[90%] max-w-[1920px]">
        <div className="lg:flex lg:flex-row flex flex-col gap-12 lg:gap-[30px] lg:items-center">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </section>
  );
};

const LeftSide = () => {
  return (
    <div className="flex flex-col gap-2 lg:w-1/2">
      <h1 className="text-[36px] font-bold text-[#222222]">ABOUT MYSELF</h1>
      <p className="text-[14px] text-[#777777]">
        inappropriate behavior is often laughed off as “boys will be boys,”
        women face higher conduct standards especially in the workplace. That’s
        why it’s crucial that, as women, our behavior on the job is beyond
        reproach. inappropriate behavior is often laughed.
      </p>
      <LeftCards />
    </div>
  );
};

const LeftCards = () => {
  const CardObject = [
    {
      image: <Bitcoin color="#62bdfc" />,
      number: "$2.5M",
      Total: "Total Donation",
    },
    {
      image: <TabletSmartphone color="#62bdfc" />,
      number: "1465",
      Total: "Total Projects",
    },
    {
      image: <Users color="#62bdfc" />,
      number: "3965",
      Total: "Total Volunteers",
    },
  ];
  return (
    <div className="lg:flex lg:flex-row flex flex-col gap-8 lg:gap-8  mt-8">
      {CardObject.map((item) => (
        <div className="rounded-sm w-full cursor-pointer py-[30px] px-[25px] border border-[0,0,0,0.5]">
          {item.image}
          <h2 className="text-[24px] mt-3 font-bold text-[#222222]">
            {item.number}
          </h2>
          <p className="text-[14px] text-[#777777]">{item.Total}</p>
        </div>
      ))}
    </div>
  );
};

const RightSide = () => {
  return (
    <div className="lg:w-1/2 py-[50px] px-[30px] rounded-md shadow-lg">
      <h2 className="font-bold text-[21px]">TOOLS EXPERTNESS</h2>
      <div className="mb-[18px]">
        <p className="text-right mb-2 text-[14px] text-[#777777]">
          After Effects 85%
        </p>
        <div className="rounded-full px-2 py-1 w-full border border-[0,0,0,0.5]">
          <div className="rounded-full w-[85%] py-[5px] bg-gradient-to-r from-indigo-400 to-cyan-400"></div>
        </div>
      </div>
      <div className="mb-[18px]">
        <p className="text-right mb-2 text-[14px] text-[#777777]">
          Photoshop 90%
        </p>
        <div className="rounded-full py-1 px-2  border border-[0,0,0,0.5]">
          <div className="rounded-full w-[90%] py-[5px] bg-gradient-to-r from-indigo-400 to-cyan-400"></div>
        </div>
      </div>
      <div className="mb-[18px]">
        <p className="text-right mb-2 text-[14px] text-[#777777]">
          Illustrator 70%
        </p>
        <div className="rounded-full py-1 px-2 border border-[0,0,0,0.5]">
          <div className="rounded-full w-[70%] py-[5px] bg-gradient-to-r from-indigo-400 to-cyan-400"></div>
        </div>
      </div>
      <div className="mb-[18px]">
        <p className="text-right mb-2 text-[14px] text-[#777777]">
          After Effects 95%
        </p>
        <div className="rounded-full py-1 px-2 border border-[0,0,0,0.5]">
          <div className="rounded-full w-[95%] py-[5px] bg-gradient-to-r from-indigo-400 to-cyan-400"></div>
        </div>
      </div>
      <div className="mb-[18px]">
        <p className="text-right mb-2 text-[14px] text-[#777777]">Sketch 75%</p>
        <div className="rounded-full py-1 px-2 border border-[0,0,0,0.5]">
          <div className="rounded-full w-[75%] py-[5px] bg-gradient-to-r from-indigo-400 to-cyan-400"></div>
        </div>
      </div>
    </div>
  );
};

export { About };
