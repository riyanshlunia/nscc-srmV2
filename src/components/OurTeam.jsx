import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

import BackgroundImage from "../assets/img/teams/bg.png";
import TextureImage from "../assets/img/teams/texture.png";
import teamData from "../assets/data/2025-26.js";

import githubIcon from "../assets/img/teams/social-icons/github.png";
import twitterIcon from "../assets/img/teams/social-icons/twitter.png";
import linkedinIcon from "../assets/img/teams/social-icons/linkedin.png";
import instagramIcon from "../assets/img/teams/social-icons/instagram.png";
import globeIcon from "../assets/img/teams/social-icons/globe.png";

gsap.registerPlugin(ScrollTrigger);

const socialIconMap = {
  github: githubIcon,
  twitter: twitterIcon,
  linkedin: linkedinIcon,
  instagram: instagramIcon,
  other_link: globeIcon,
};

const OurTeam = ({ teamData: propTeamData }) => {
  const containerRef = useRef(null);
  const scrollWrapperRef = useRef(null);

  const dataToUse = propTeamData || teamData;

  useEffect(() => {
    const container = containerRef.current;
    const scrollWrapper = scrollWrapperRef.current;

    if (!container || !scrollWrapper) return;

    let scrollTween;

    const setupScrollTrigger = () => {
      if (scrollTween) {
        scrollTween.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      const totalWidth = scrollWrapper.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewportWidth;

      if (scrollDistance > 0) {
        scrollTween = gsap.to(scrollWrapper, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    };

    setupScrollTrigger();

    const handleResize = () => {
      setupScrollTrigger();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (scrollTween) {
        scrollTween.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const needsScrolling = (memberCount) => {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    if (isMobile) {
      return memberCount > 4;
    } else if (isTablet) {
      return memberCount > 6;
    } else {
      return memberCount > 9;
    }
  };

  return (
    <div className="w-full h-dvh overflow-hidden relative" ref={containerRef}>
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      />

      <div
        className="absolute inset-0 bg-repeat opacity-50"
        style={{ backgroundImage: `url(${TextureImage})` }}
      />

      {/* Grid backgound verti/horizontal lines overlay */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 pointer-events-none mix-blend-soft-light">
        <div className="col-start-1 col-end-5 row-start-1 row-end-5 border-l border-r border-[#AAAAAA]"></div>
        <div className="col-start-2 col-end-5 row-start-1 row-end-5 border-l border-[#AAAAAA]"></div>
        <div className="col-start-3 col-end-5 row-start-1 row-end-5 border-l border-[#AAAAAA]"></div>
        <div className="col-start-4 col-end-5 row-start-1 row-end-5 border-l border-[#AAAAAA]"></div>
        <div className="col-start-1 col-end-5 row-start-1 row-end-5 border-t border-b border-[#AAAAAA]"></div>
        <div className="col-start-1 col-end-5 row-start-2 row-end-5 border-t border-[#AAAAAA]"></div>
        <div className="col-start-1 col-end-5 row-start-3 row-end-5 border-t border-[#AAAAAA]"></div>
        <div className="col-start-1 col-end-5 row-start-4 row-end-5 border-t border-[#AAAAAA]"></div>
      </div>

      <div
        className="flex h-full relative z-10"
        ref={scrollWrapperRef}
        style={{
          willChange: "transform",
          width: `${(Object.keys(dataToUse).length + 1) * 100}vw`,
        }}
      >
        {/* Custom First Page */}
        <div className="w-screen h-screen relative px-4 sm:px-8 flex items-center justify-center">
          <div className="text-center max-w-4xl">
            <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl sm:text-6xl md:text-8xl lg:text-[120px] text-[#FFFFFF] font-normal font-helvetica text-center mix-blend-overlay leading-tight tracking-tight backdrop-blur-[20px] opacity-100 bg-clip-text z-20">
              Our Team{" "}
              <ArrowRight
                className="inline ml-2 lg:ml-4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-[120px] lg:h-[120px]"
                color="#FFFFFF"
              />
            </h1>
            <p className="text-[#AAAAAA] text-sm sm:text-base md:text-lg lg:text-xl font-helvetica font-extralight leading-relaxed max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitati
            </p>
          </div>
        </div>

        {Object.keys(dataToUse).map((sectionKey, sectionIndex) => {
          const section = dataToUse[sectionKey][0];

          return (
            <div
              key={sectionIndex}
              className="w-dvw h-dvh relative px-4 sm:px-8"
            >
              <h1 className="absolute top-4 sm:top-6 md:top-8 left-1/2 transform -translate-x-1/2 text-3xl sm:text-4xl md:text-6xl lg:text-[120px] text-[#FFFFFF] font-normal font-helvetica text-center mix-blend-overlay leading-tight tracking-tight backdrop-blur-[20px] opacity-100 bg-clip-text z-20">
                {section.category}.
              </h1>

              <div className="absolute top-20 sm:top-24 md:top-32 lg:top-40 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 h-[calc(100vh-120px)] sm:h-[calc(100vh-140px)] md:h-[calc(100vh-180px)] lg:h-[calc(100vh-200px)]">
                {needsScrolling(section.members.length) ? (
                  <div
                    className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent pl-2"
                    style={{
                      scrollbarWidth: "thin",
                      scrollbarColor: "rgba(255, 255, 255, 0.2) transparent",
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center place-items-center pb-8 pr-4">
                      {section.members.map((member, memberIndex) => (
                        <MemberCard key={memberIndex} member={member} />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <div
                      className={`
                      grid gap-6 justify-items-center place-items-center
                      ${
                        section.members.length === 1
                          ? "grid-cols-1"
                          : section.members.length === 2
                          ? "grid-cols-1 lg:grid-cols-2"
                          : section.members.length <= 4
                          ? "grid-cols-1 md:grid-cols-2"
                          : section.members.length <= 6
                          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
                      }
                    `}
                    >
                      {section.members.map((member, memberIndex) => (
                        <MemberCard key={memberIndex} member={member} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const MemberCard = ({ member }) => (
  <div className="w-[400px] max-w-[90vw] flex items-center bg-gray-800/95 rounded-tl-[50px] rounded-tr-[25px] rounded-bl-[50px] rounded-br-[25px] sm:rounded-tl-[100px] sm:rounded-tr-[50px] sm:rounded-bl-[100px] sm:rounded-br-[50px] border border-white backdrop-blur-sm transition-transform duration-300 hover:scale-105 shadow-lg">
    <div className="flex-shrink-0">
      <img
        className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full object-cover bg-blend-luminosity"
        src={`/teams/${member.name}.jpg`}
        alt={member.name}
        loading="lazy"
      />
    </div>

    <div className="flex-1 ml-3 sm:ml-6 mr-2 sm:mr-4 py-2 sm:py-4 min-h-[100px] sm:min-h-[140px] flex flex-col justify-center">
      <h3 className="text-white text-sm sm:text-lg lg:text-xl font-normal font-helvetica mb-1 line-clamp-2 sm:line-clamp-1">
        {member.name}
      </h3>
      <p className="text-white text-xs sm:text-base lg:text-lg font-extralight font-helvetica mb-2 sm:mb-3 line-clamp-2 sm:line-clamp-1">
        {member.designation}
      </p>

      <div className="flex gap-1 sm:gap-2 flex-wrap">
        {member.social
          .filter(
            (socialItem) => socialItem.url && socialItem.url.trim() !== ""
          )
          .slice(0, 4)
          .map((socialItem, socialIndex) => {
            const iconSrc = socialIconMap[socialItem.name.toLowerCase()];
            if (!iconSrc) return null;

            return (
              <a
                key={socialIndex}
                href={socialItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#64b5f6] transition-all duration-300 hover:scale-110 border border-white/20"
                title={socialItem.name}
              >
                <img
                  src={iconSrc}
                  alt={socialItem.name}
                  className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 object-contain filter brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
                />
              </a>
            );
          })}
      </div>
    </div>
  </div>
);

export default OurTeam;
