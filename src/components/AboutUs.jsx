import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";

export default function AboutUs() {
  const scrollToTeamSection = () => {
    const teamSection = document.querySelector("#our-team-section");
    if (teamSection) {
      teamSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <>
      <div className="bg-[url('/src/assets/Background.png')] bg-cover bg-center bg-no-repeat min-h-screen">
        <div className="text-white p-5 md:flex md:flex-col md:items-center lg:block space-y-5 blend-mode-plus-light ">
          <div className="text-3xl md:w- lg:w-[950px] font-helvetica-neue">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores, reprehenderit doloribus laborum eveniet, vel et minima
              deleniti nihil voluptatibus velit magni voluptatem neque similique
              dignissimos atque nisi! Aperiam, officia quod!
            </p>
          </div>
          <div
            className="flex flex-col lg:h-92 md:w-96 lg:w-[450px] p-9 rounded-3xl space-y-10 lg:float-right border border-white"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <p className="text-justify font-helvetica-neue text-lg ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              quis animi eaque, soluta perferendis velit veritatis consequuntur,
              voluptate saepe sed alias est! Qui rem maiores nulla labore
              perferendis consectetur ut? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Commodi, quis nobis veritatis corrupti.
            </p>
            <div className="h-0.5 bg-white"></div>
            <div
              style={{
                backgroundColor: "#D9D9D9",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              className="flex items-center rounded-full w-40 cursor-pointer group transition-all duration-300 hover:w-44 hover:shadow-lg hover:shadow-cyan-500/25"
              onClick={scrollToTeamSection}
            >
              <p className="text-black text-md ml-4 font-medium group-hover:text-gray-800 transition-colors duration-300">
                Our Team
              </p>
              <button
                className="ml-2 p-5 transition-all duration-300 rounded-full group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg"
                style={{ backgroundColor: "#31C4BF" }}
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-black text-2xl group-hover:text-white transition-colors duration-300"
                />
              </button>
            </div>
          </div>
          <div className="clear-both"></div>
        </div>
        <div
          style={{ color: "#31C4BF" }}
          className="sm:flex sm:flex-col md:grid lg:grid grid-cols-3 grid-rows-3 gap-0 space-y-9 md:space-y-0 lg:space-y-0"
        >
          <div className="flex flex-col items-center col-start-1 row-start-1">
            <div>
              <CountUp
                start={0}
                end={68}
                duration={2}
                className="text-5xl lg:text-9xl"
              />
              <span
                className="text-5xl lg:text-8xl"
                style={{ color: "#FEFEFE" }}
              >
                +
              </span>
            </div>
            <p className="text-2xl lg:text-3xl" style={{ color: "#FEFEFE" }}>
              Members
            </p>
          </div>
          <div className="flex flex-col items-center col-start-2 row-start-2">
            <div>
              <CountUp
                start={0}
                end={11}
                duration={2}
                className="text-5xl lg:text-9xl"
              />
              <span
                className="text-5xl lg:text-8xl"
                style={{ color: "#FEFEFE" }}
              >
                +
              </span>
            </div>
            <p className="text-2xl lg:text-3xl" style={{ color: "#FEFEFE" }}>
              Projects
            </p>
          </div>
          <div className="flex flex-col items-center col-start-3 row-start-3">
            <div>
              <CountUp
                start={0}
                end={21}
                duration={2}
                className="text-5xl lg:text-9xl"
              />
              <span
                className="text-5xl lg:text-8xl"
                style={{ color: "#FEFEFE" }}
              >
                +
              </span>
            </div>
            <p
              className="text-2xl lg:text-3xl mb-10"
              style={{ color: "#FEFEFE" }}
            >
              Sponsors
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
