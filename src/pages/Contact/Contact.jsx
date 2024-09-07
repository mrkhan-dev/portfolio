/* eslint-disable react/no-unescaped-entities */
import emailjs from "@emailjs/browser";
import {useEffect, useRef} from "react";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
    AOS.refresh();
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ewt9rb8",
        "template_x27rgvc",
        form.current,
        "jsZoZFlBs3rRRh_e1"
      )
      .then(
        (result) => {
          toast.success("successfully send");
          form.reset();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div data-aos="fade-up" className="bg-[#2A323C]">
      <div className="lg:max-w-[1416px] mx-auto  px-4 lg:px-0">
        <h2 className="text-center text-4xl font-semibold font-Roboto pt-4">
          Let' s Contact
        </h2>
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-1/2">
            <h3 className="text-4xl font-Roboto font-semibold">
              Let' s make something <br /> great together.
            </h3>
            <p className="mt-4 text-lg font-Roboto">
              I'm always open to new opportunities and collaborations. Whether
              you have a project in mind, need some advice, or just want to say
              hi, feel free to reach out! You can contact me through the form
              below or via the following methods:
            </p>
            <div className=" mt-6">
              <div className="flex items-center gap-8">
                <img
                  className="h-10 w-10"
                  src="https://img.icons8.com/?size=100&id=OumT4lIcOllS&format=png&color=000000"
                  alt=""
                />
                <p className="text-lg font-Roboto font-semibold">
                  shahjalalkhan110@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-8">
                <img
                  className="h-10 w-10"
                  src="https://img.icons8.com/?size=100&id=7OeRNqg6S7Vf&format=png&color=000000"
                  alt=""
                />
                <p className="text-lg font-Roboto font-semibold">
                  +880 1310478679
                </p>
              </div>
              <div className="flex items-center gap-8">
                <img
                  className="h-10 w-10"
                  src="https://img.icons8.com/?size=100&id=Ln7jSgbyMI2J&format=png&color=000000"
                  alt=""
                />
                <p className="text-lg font-Roboto font-semibold">
                  Pirojpur District, Barisāl, Bangladesh
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <section className="lg:max-w-4xl mb-8 p-6 mx-auto bg-[#1D232A] rounded-md shadow-md">
              <form ref={form} onSubmit={sendEmail}>
                <div className="lg:w-96">
                  <div>
                    <label className="">Name</label>
                    <input
                      type="text"
                      name="from_name"
                      className="block lg:w-full px-4 py-2 mt-2 input input-bordered rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 d focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="mt-3">
                    <label className=" ">Email</label>
                    <input
                      name="form_email"
                      type="email"
                      className="block lg:w-full   px-4 py-2 mt-2 input input-bordered rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="">Subject</label>
                    <input
                      name="subject"
                      type="text"
                      className="block lg:w-full  px-4 py-2 mt-2 input input-bordered rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="mt-3">
                    <label>Your Message</label>
                    <textarea
                      name="message"
                      className="block lg:w-full h-44  lg:px-4 py-2 mt-2 input input-bordered rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    ></textarea>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button className="px-8 py-2.5 leading-5 text-[#000000] transition-colors duration-300 transform bg-[#0DFFD7] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    send
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
