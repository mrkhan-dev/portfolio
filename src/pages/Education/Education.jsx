import {CiCalendarDate} from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

const Education = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-up" className="lg:max-w-[1416px] mx-auto  px-4 lg:px-0">
      <h2 className="text-center text-4xl font-Roboto font-semibold">
        Education
      </h2>
      <div className="lg:flex justify-between gap-4 mt-8">
        <div
          data-aos="fade-right"
          className="border border-[#0DFFD7]  rounded-xl"
        >
          <p className="text-2xl p-4 font-semibold font-Roboto">
            {" "}
            Secondary School Certificate ( SSC )
          </p>
          <p className="flex gap-2">
            <CiCalendarDate className="text-2xl font-bold ml-4 text-[#0DFFD7]" />
            <p>2018 - 2019</p>
          </p>
          <p className="px-4 mt-2 text-lg">
            Complete Secondary School Certificate from Amragachia Secondary
            School, Mathbaria, Pirojpur in 2019 with GPA. 4.00
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <div
            data-aos="fade-left"
            className="border border-[#0DFFD7] rounded-xl"
          >
            <p className="text-2xl p-4 font-semibold font-Roboto">
              {" "}
              Higher Secondary School Certificate ( HSC )
            </p>
            <p className="flex gap-2">
              <CiCalendarDate className="text-2xl font-bold ml-4 text-[#0DFFD7]" />
              <p>2019 - 2021</p>
            </p>
            <p className="px-4 mt-2 text-lg">
              Complete Hire Secondary School Certificate from Dr. Rustom Ali
              Farzi Degree College, Mathbaria, Pirojpur in 2021 with GPA. 4.47
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="lg:w-[890px] mx-auto lg:mt-8 mt-4">
          <div
            data-aos="fade-up"
            className="border border-[#0DFFD7] rounded-xl"
          >
            <p className="text-2xl p-4 font-semibold font-Roboto">
              {" "}
              Complete Web Development Course With Jhankar Mahbub
            </p>
            <p className="flex gap-2">
              <CiCalendarDate className="text-2xl font-bold ml-4 text-[#0DFFD7]" />
              <p>2024 Present</p>
            </p>
            <p className="px-4 mt-2 text-lg">
              The Complete Web Development Course by Jhankar Mahbub is designed
              to take students from beginner to advanced level in web
              development. The course covers a comprehensive range of topics,
              providing hands-on experience with both front-end and back-end
              technologies. It aims to equip students with the skills needed to
              build full-stack web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
