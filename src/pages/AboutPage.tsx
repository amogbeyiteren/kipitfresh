import Title from "../components/Title";
import values from "../assets/about-values.svg";
import vision from "../assets/vision.svg";
import mission from "../assets/mission.svg";


export function AboutPage() {
  return (
    <div>
      <section className="flex justify-center items-center py-24 md:py-32">
        <div className="w-[600px] flex justify-center items-center">
          <Title
            content="Delivering fresh fruits sustainably stored, ensuring the best quality from local farmers."
            size="md"
            center={true}
          />
        </div>
      </section>
      <section className="pt-7 pb-48 justify-center items-center flex flex-col">
        <span className="flex flex-col justify-center items-center mb-24 md:mb-48">
          <Title content="Our Story" size="md" center={true} />

          <span className="border-b-2 w-12 h-0 border border-gray-400"></span>
        </span>
        <div className="w-full flex flex-row justify-end items-center mb-64">
          <div className="w-[90%] py-4 px-8 rounded-l-2xl flex flex-col-reverse lg:flex-row justify-start items-center lg:gap-20 bg-[#7ED957]">
            <div className="pt-0 pb-12 lg:py-28 flex flex-col items-start justify-center">
              <span className="pt-5">
                <Title size="md" content="Our Values" />
              </span>
              <span className="border-b-2 w-12 h-0 border border-[#173e1f]"></span>
              <p className="lg:w-[450px] xl:w-[600px] pt-8">
                How to preserve avocados is a must-know if you want to ensure
                that your avocados remain fresh. This is because avocados, with
                their smooth and creamy texture, are a culinary delight.
                However, their short shelf life can often leave us scrambling to
                use them before they spoil. Fear not! In this article, we will
                explore…
              </p>
            </div>
            <img
              src={values}
              className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] lg:translate-y-[-50%]"
            />
          </div>
        </div>

        <div className="w-full flex flex-row justify-start items-center mb-64">
          <div className="w-[90%] py-4 px-8  rounded-r-2xl flex flex-col-reverse lg:flex-row justify-end items-center lg:gap-20 bg-[#7ED957]">
            <img
              src={vision}
              className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] lg:translate-y-[-50%]"
            />
            <div className="pt-12 pb-4 lg:py-28 flex flex-col items-end justify-center">
              <span className="pt-5">
                <Title size="md" content="Our Vision" />
              </span>
              <span className="border-b-2 w-12 h-0 border border-[#173e1f]"></span>
              <p className="lg:w-[450px] xl:w-[600px] pt-8 text-right">
                How to preserve avocados is a must-know if you want to ensure
                that your avocados remain fresh. This is because avocados, with
                their smooth and creamy texture, are a culinary delight.
                However, their short shelf life can often leave us scrambling to
                use them before they spoil. Fear not! In this article, we will
                explore…
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row justify-end items-center mb-64">
          <div className="w-[90%] py-4 px-8 rounded-l-2xl flex flex-col-reverse lg:flex-row justify-start items-center lg:gap-20 bg-[#7ED957]">
            <div className="pt-0 pb-12 lg:py-28 flex flex-col items-start justify-center">
              <span className="pt-5">
                <Title size="md" content="Our Mission" />
              </span>
              <span className="border-b-2 w-12 h-0 border border-[#173e1f]"></span>
              <p className="lg:w-[450px] xl:w-[600px] pt-8">
                How to preserve avocados is a must-know if you want to ensure
                that your avocados remain fresh. This is because avocados, with
                their smooth and creamy texture, are a culinary delight.
                However, their short shelf life can often leave us scrambling to
                use them before they spoil. Fear not! In this article, we will
                explore…
              </p>
            </div>
            <img
              src={mission}
              className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] lg:translate-y-[-50%]"
            />
          </div>
        </div>

        <div className="w-full flex flex-row justify-end items-center py-1 ">
          <div className="w-[100%] py-12 px-4 lg:pl-12 lg:pr-24 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-20 bg-[#7ED957]">
            <div className="pt-12 pb-0 lg:py-28 flex flex-col items-center lg:items-start justify-center">
              <span className="pt-5 w-full text-center lg:text-start">
                <Title size="md" content="Let's Get in Touch" />
              </span>
              <span className="border-b-2 w-12 h-0 border border-[#173e1f]"></span>
              <p className="lg:w-[600px] pt-8 text-center lg:text-start ">
                How to preserve avocados is a must-know if you want to ensure
                that your avocados remain fresh. This is because avocados, with
                their smooth and creamy texture, are a culinary delight.
                However, their short shelf life can often leave us scrambling to
                use them before they spoil. Fear not! In this article, we will
                explore…
              </p>
            </div>
            <button className="w-[200px] h-[60px] bg-[#173e1f] rounded-xl text-white font-semibold text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
