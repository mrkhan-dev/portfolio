import dev1 from "../../assets/dev1.png";
const Banner = () => {
  return (
    <div className="flex justify-between mb-24">
      <div>
        <p className="text-2xl font-Poppins text-gray-500">Hi, I am</p>
        <h2 className="text-7xl font-semibold font-Roboto">Shahjalal</h2>
        <p className="text-4xl mt-4 font-Roboto text-[#7462E1]">
          Front-end developer
        </p>
        <p className="mt-4 font-Roboto">
          That's awesome! It's great to connect with another passionate
          front-end developer. React.js is such a powerful <br /> tool for
          creating engaging user interfaces. It's fantastic to see your
          dedication to building seamless digital experiences <br /> for users.
          I'm definitely open to collaboration. Let's turn those ideas into
          reality!
        </p>
        <button className="btn bg-[#7462E1] font-Poppins text-lg text-white border-none mt-4">
          Download CV
        </button>
      </div>
      <div className="h-96 w-96 rounded-t-full rounded-br-xl bg-[#EEF0F9] ">
        <div>
          <img
            className="absolute  h-[500px] ml-[-190px] mt-[-117px]"
            src={dev1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
