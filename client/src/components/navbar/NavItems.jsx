import { Link } from "react-router-dom";

const navItems = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "contact us",
    url: "/contact",
  },
];

const NavItems = () => {
  return (
    <ul className="hidden md:flex pl-6 items-center gap-x-4 capitalize text-[#333] font-medium">
      {navItems.map((item) => (
        <li key={item.id}>
          <Link to={item.url}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
