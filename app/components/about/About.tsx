import React from "react";

const About = () => {
  const stats = [
    { label: "Years of Experience", value: "15+" },
    { label: "Satisfied Clients", value: "1000+" },
    { label: "Tax Returns Filed", value: "5000+" },
    { label: "Team Members", value: "25+" },
  ];

  const values = [
    {
      title: "Expertise",
      description:
        "Our team of certified accountants brings decades of combined experience in tax, audit, and financial consulting.",
    },
    {
      title: "Integrity",
      description:
        "We maintain the highest ethical standards and ensure complete transparency in all our client interactions.",
    },
    {
      title: "Innovation",
      description:
        "Utilizing cutting-edge accounting software and technology to provide efficient and accurate services.",
    },
    {
      title: "Client Focus",
      description:
        "We prioritize understanding each client's unique needs and delivering personalized financial solutions.",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8" id="about">
      {/* Header Section */}
      <div className="flex flex-col items-center relative mb-16">
        <h2 className="text-4xl sm:text-[70px] lg:text-[120px] leading-[48px] sm:leading-[120px] lg:leading-[140px] font-extrabold tracking-wider text-shadow-[0_5px_7px_#0000002b] text-white">
          About Us
        </h2>
        <h6 className="text-3xl sm:text-5xl lg:text-[65px] font-semibold absolute bottom-1 sm:bottom-3 md:-bottom-3 text-green-700">
          Who We Are
        </h6>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="flex flex-col justify-center">
          <h3 className="text-4xl font-bold text-gray-800 mb-6">
            Excellence in Accounting & Financial Services
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            We are a leading accounting firm committed to delivering exceptional
            financial services to businesses and individuals. Our expertise
            spans tax planning, audit services, financial consulting, and more.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-green-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl font-bold text-green-700 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="h-[360px] sm:h-[480px] md:h-[640px] lg:h-[800px] rounded-2xl overflow-hidden">
            <img
              src="/images/woman-5.png"
              alt="Professional Team"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="bg-green-50 p-6 md:p-8 rounded-2xl shadow-lg max-w-sm w-full md:w-auto md:absolute md:-bottom-10 md:-right-10 mt-6 md:mt-0">
            <h4 className="text-2xl font-bold text-green-700 mb-4">
              Your Trusted Financial Partner
            </h4>
            <p className="text-gray-600">
              With over 15 years of experience, we've helped thousands of
              clients achieve their financial goals through expert accounting
              services and personalized solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      {/* <div className="mt-20">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h4 className="text-xl font-semibold text-green-700 mb-4">
                {value.title}
              </h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default About;
