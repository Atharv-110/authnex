import homeImg from "../../assets/home.png";
import AButton from "../../ui/AButton";

const HomePageComponent = () => {
  return (
    <section className="w-full">
      <div className="h-[80vh] flex flex-col gap-y-10 lg:flex lg:flex-row justify-between items-center py-16 xl:px-28">
        <div className="w-full space-y-4 sm:space-y-8">
          <h1 className="w-full text-center lg:text-left xl:w-3/4 text-4xl sm:text-6xl xl:text-7xl leading-[1.1] font-semibold">
            Boiler Plate{" "}
            <span className="italic font-thin text-[#333333]">
              Authentication
            </span>{" "}
            Code
          </h1>
          <p className="text-xl sm:text-3xl font-light text-center lg:text-left">
            For all kinds of your auth based projects
          </p>
          <div className="lg:w-3/5 px-24 lg:px-0 gap-4 flex items-center justify-center">
            <AButton text="Login" variant="filled" />
            <AButton text="Repository" variant="bordered" />
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <img src={homeImg} alt="home vector" />
        </div>
      </div>
    </section>
  );
};

export default HomePageComponent;
