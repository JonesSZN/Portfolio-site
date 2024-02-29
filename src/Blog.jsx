const Blog = () => {
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
      image: "home-blog-1.jpg.webp",
      date: "25 October, 2017",
      author: "By Mark Wiens",
      text1: "ADDICTION WHEN GAMBLING BECOMES A PROBLEM",
      text2:
        "Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes with handhelds and workers in the field stay",
    },
    {
      image: "home-blog-2.jpg.webp",
      date: "25 October, 2017",
      author: "By Mark Wiens",
      text1: "MAKE MYSPACE YOUR BEST DESIGNED SPACE",
      text2:
        "Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes with handhelds and workers in the field stay",
    },
    {
      image: "home-blog-3.jpg.webp",
      date: "25 October, 2017",
      author: "By Mark Wiens",
      text1: "VIDEO GAMES PLAYING WITH IMAGINATION",
      text2:
        "Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes with handhelds and workers in the field stay",
    },
  ];
  return (
    <div className="lg:grid lg:grid-cols-3 flex flex-col gap-8 lg:gap-8">
      {CardsObject.map((item) => (
        <div className="w-full">
          <img className="rounded-md mb-6 w-full " src={item.image} alt="" />
          <div className="flex text-[12px] text-[#777777] items-center gap-2">
            <p>{item.date}</p>
            <p>{item.author}</p>
          </div>
          <h2 className="text-[#222222] my-4 font-bold text-[21px]">
            {item.text1}
          </h2>
          <p className=" text-[14px] text-[#777777]">{item.text2}</p>
        </div>
      ))}
    </div>
  );
};

const Top = () => {
  return (
    <div className="flex flex-col items-center mb-24">
      <h2 className="text-[#222222] font-bold text-[25px] lg:text-[36px] mb-4">
        LATEST POSTS FROM BLOG
      </h2>
      <p className="text-center text-[#777777] max-w-[550px]">
        If you are looking at blank cassettes on the web, you may be very
        confused at the difference in price. You may see some for as low as $.17
        each.
      </p>
    </div>
  );
};

export { Blog };
