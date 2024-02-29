import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full lg:fixed flex z-50  lg:py-6 py-6 bg-[white] lg:bg-[#FCF9FC] justify-center">
      <div className="lg:w-[85%] w-[95%] max-w-[1920px]">
        <Nav />
      </div>
    </header>
  );
};

const Nav = () => {
  return (
    <nav className="flex justify-between items-center">
      <NavLeft />
      <NavRight />
    </nav>
  );
};
const NavLeft = () => {
  return <img className="cursor-pointer" src="logo.png" alt="" />;
};

const NavRight = () => {
  const Links = ["HOME", "ABOUT", "SERVICES", "PAGES", "BLOG", "CONTACT"];
  return (
    <>
      <Menu className="lg:hidden" color="#8490ff" size={30} />
      <ul className="lg:flex gap-12 hidden text-[#222222] font-semibold cursor-pointer items-center">
        {Links.map((item) => (
          <li className="text-[12px] text-[#222222]">{item}</li>
        ))}
      </ul>
    </>
  );
};

export { Header };
