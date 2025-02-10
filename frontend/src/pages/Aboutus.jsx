import React from "react";

function AboutUs({ theme, setTheme }) {
  return (
    <div
    className={`min-h-screen flex items-center justify-center ${
      theme === "light" ? "bg-cyan-500" : "bg-white"
    }`}
  >
    <div
      className={`py-10 lg:py-24 lg:max-w-6xl flex flex-col gap-y-4 text-justify justify-start items-center px-16 ${
        theme === "light" ? "bg-cyan-500" : "bg-white"
      }`}
    >
      <h1
        className={`text-4xl font-bold mb-6 ${
          theme === "light" ? "text-black" : "text-black"
        }`}
      >
        Welcome to the SL Highway Seat Reservation System!
      </h1>
      <p
        className={` text-lg ${
          theme === "light" ? "text-gray-300" : "text-gray-400"
        }`}
      >
        We are a dynamic team of five enthusiastic first-year university
        students working together on an innovative web development project. Our
        mission is to create a seamless and efficient platform that transforms
        the way passengers reserve seats for highway travel.
      </p>

      <section className="">
        <div className="mb-10">
          <h2
            className={`text-2xl font-semibold ${
              theme === "light" ? "text-black" : "text-black"
            }`}
          >
            Who We Are
          </h2>
          <p
            className={`text-lg ${
              theme === "light" ? "text-gray-700" : "text-gray-400"
            }`}
          >
            As a group of aspiring developers, we bring diverse skills and fresh
            perspectives to this project. From front-end design to back-end
            development, our collaboration ensures a well-rounded approach to
            solving real-world problems. This project reflects our dedication to
            learning, teamwork, and leveraging technology for user convenience.
          </p>
        </div>

        <div className="mb-10">
          <h2
            className={`text-2xl font-semibold ${
              theme === "light" ? "text-black" : "text-black"
            }`}
          >
            What We Aim To Achieve
          </h2>
          <p
            className={`text-lg ${
              theme === "light" ? "text-gray-700" : "text-gray-400"
            }`}
          >
            Our goal is to build a user-friendly, secure, and intuitive system
            that simplifies the reservation process for travelers. By focusing
            on responsive design, smooth functionality, and a hassle-free user
            experience, we strive to create a platform that caters to the needs
            of both travelers and operators.
          </p>
        </div>

        <div>
          <h2
            className={`text-2xl font-semibold mb-4 ${
              theme === "light" ? "text-black" : "text-black"
            }`}
          >
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Brightly Dunsford", img: "/1.jpg" },
              { name: "Osanda Indunika", img: "/2.jpg" },
              { name: "Deenu Hansama", img: "/3.jpg" },
              { name: "Upuli Kawshalya", img: "/4.jpeg" },
              { name: "Lasni Seneviratne", img: "/5.jpg" },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-400 rounded-full mb-4 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p
                  className={`text-lg ${
                    theme === "light" ? "text-black" : "text-gray-400"
                  }`}
                >
                  {member.name}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center">
            <h2
              className={`text-xl font-semibold mb-4 ${
                theme === "light" ? "text-black" : "text-black"
              }`}
            >
              Thank You for visiting our page! Stay tuned for updates as we
              progress on our journey.
            </h2>
          </div>
        </div>
      </section>
    </div>
  </div>
  );
}

export default AboutUs;
