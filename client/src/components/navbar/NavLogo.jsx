import Logo from "../../assets/logo.png";

const NavLogo = () => {
  return (
    <div className="flex items-center">
      <img src={Logo} alt="authnex logo" className="w-[60px]" />
      <h1>AuthNex</h1>
    </div>
  );
};

export default NavLogo;
