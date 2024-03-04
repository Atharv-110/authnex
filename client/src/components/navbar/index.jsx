import NavLogo from "./NavLogo";
import NavItems from "./NavItems";
import AButton from "../../ui/AButton";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex">
        <NavLogo />
        <NavItems />
      </div>
      <AButton text="Login" />
    </nav>
  );
};

export default Navbar;
