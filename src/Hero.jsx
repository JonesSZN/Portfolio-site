const Hero = () => {
  return (
    <section className="w-full bg-[#FCF9FC] flex justify-center">
      <div className="lg:w-[60%] w-[95%] max-w-[1920px]">
        <div className="flex ">
          <LeftImage />
          <RightDiv />
        </div>
      </div>
    </section>
  );
};

const LeftImage = () => {
  return (
    <div className="pt-[195px] lg:block hidden w-1/2">
      <img src="guy1.png" alt="" />
    </div>
  );
};
const RightDiv = () => {
  const TextObjects = [
    {
      title: "THIS IS ME",
      Name: "TRAVOR JAMES",
      text: "You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)",
    },
  ];
  return (
    <div className="flex flex-col  max-w-[800px] lg:py-0 py-[130px] lg:px-0 px-[15px]  justify-center lg:w-1/2 gap-3">
      {TextObjects.map((item) => (
        <>
          <p className="text-[14px] text-[#222222] font-bold tracking-[2.1px]">
            {item.title}
          </p>
          <h2 className="text-[#222222] text-[28px] lg:text-[48px] tracking-[2.1px] font-bold">
            {item.Name}
          </h2>
          <p className="text-[#777777] text-[14px] ">{item.text}</p>
        </>
      ))}
      <button className="rounded-md bg-gradient-to-r from-indigo-400 to-cyan-400 mt-[45px] max-w-[165px] text-[13px] px-[42px] py-4 bg-red-500 text-white font-bold">
        Discover Now
      </button>
    </div>
  );
};

export { Hero };
