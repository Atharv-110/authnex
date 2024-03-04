import NavLogo from "./NavLogo";
import NavItems from "./NavItems";
import AButton from "../../ui/AButton";

const Navbar = () => {
  return (
    <nav className="fixed w-[98%] mt-2 md:mt-4 rounded-lg top-0 bg-white shadow-md py-2 px-2 md:px-4 flex justify-between items-center">
      <div className="flex items-center">
        <NavLogo />
        <NavItems />
      </div>
      <div>
        <AButton variant="bordered" text="Login" />
      </div>
    </nav>
  );
};

export default Navbar;
