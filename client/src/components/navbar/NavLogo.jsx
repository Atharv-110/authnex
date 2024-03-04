import Logo from "../../assets/logo.png";

const NavLogo = () => {
  return (
    <div className="flex items-center gap-1 md:gap-2 md:pr-6 md:border-r border-gray-300">
      <img src={Logo} alt="authnex logo" className="w-10 md:w-12" />
      <h1 className="md:text-xl font-semibold tracking-wide">AuthNex</h1>
    </div>
  );
};

export default NavLogo;
