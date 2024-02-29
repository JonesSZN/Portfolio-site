const Projects = () => {
  return (
    <section className="w-full py-24 flex justify-center">
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
      image: "projects-1.jpg",
      title: "3D HELMET DESIGN",
      text: "Client Project",
    },
    {
      image: "projects-2.jpg",
      title: "3D HELMET DESIGN",
      text: "Client Project",
    },
    {
      image: "projects-3.jpg",
      title: "3D HELMET DESIGN",
      text: "Client Project",
    },
    {
      image: "projects-4.jpg",
      title: "3D HELMET DESIGN",
      text: "Client Project",
    },
    {
      image: "projects-5.jpg",
      title: "3D HELMET DESIGN",
      text: "Client Project",
    },
    {
      image: "projects-6.jpg",
      title: "3D HELMET DESIGN",
      text: "Client Project",
    },
  ];
  return (
    <div className="lg:grid lg:grid-cols-3 flex flex-col gap-6 lg:gap-6">
      {CardsObject.map((item) => (
        <div className="relative group ">
          <img
            className="hover:opacity-30 w-full duration-300 transition-all"
            src={item.image}
            alt=""
          />
          <div className="absolute bottom-10 left-10">
            <h2 className="text-[#222222] group-hover:text-blue-400 duration-300 transition-all text-[21px] font-bold">
              {item.title}
            </h2>
            <p className="text-[14px] text-[#777777]">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Top = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[#222222] mb-2 text-[25px] text-center lg:text-[36px] font-bold">
        OUR RECENT COMPLETED PROJECTS
      </h1>
      <p className="text-[16px] text-center text-[#777777]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor
      </p>
      <TopList />
    </div>
  );
};

const TopList = () => {
  const List = ["All Categories", "Branding", "Creative Work", "Web Design"];
  return (
    <ul className="flex gap-8 w-full lg:w-auto m-12 items-center">
      {List.map((item) => (
        <li className="text-[13px] text-[#777777] cursor-pointer">{item}</li>
      ))}
    </ul>
  );
};

export { Projects };
