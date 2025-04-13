import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col self-stretch relative min-h-[700px] w-full max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/133ad0f984ef064c5caefd5bf5e1c1fbe38b3335?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Hero background"
      />
      <div className="relative flex w-full flex-col items-stretch max-md:max-w-full">
        <nav className="w-full max-w-[1009px] mr-[70px] max-md:max-w-full max-md:mr-2.5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[61%] max-md:w-full max-md:ml-0">
              <div className="w-full max-md:max-w-full max-md:mt-[19px]">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-1/5 max-md:w-full max-md:ml-0">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/c84269699ab48d84baa13763552394af51b9d992?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-[125px] shrink-0 max-w-full"
                      alt="Logo"
                    />
                  </div>
                  <div className="w-4/5 ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex items-center gap-[40px_61px] text-base text-[rgba(205,205,205,1)] font-bold flex-wrap mt-[49px] max-md:max-w-full max-md:mt-10">
                      <Link to="/" className="text-white self-stretch my-auto">
                        Home
                      </Link>
                      <Link to="/about" className="self-stretch my-auto">
                        About us
                      </Link>
                      <Link to="/programs" className="self-stretch my-auto">
                        Training programs
                      </Link>
                      <Link to="/branches" className="self-stretch my-auto">
                        Branches
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[39%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex w-full items-stretch gap-5 text-base text-white font-bold justify-between mt-5 max-md:mt-[39px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/6ee8c81d7f132bcbe63e60b0c6ff77a12913f18e?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-[116px] shrink-0 max-w-full"
                  alt="Secondary logo"
                />
                <button className="bg-[rgba(231,27,75,1)] gap-2.5 mt-[18px] pt-2.5 pb-[11px] px-5">
                  Register now
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex w-full gap-5 justify-between mt-[60px] max-md:max-w-full max-md:mt-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/123fdb9317b08228c8bbb504afe6824e1e00deb2?placeholderIfAbsent=true"
            className="aspect-[0.6] object-contain w-[187px] shrink-0 max-w-full"
            alt="Decorative element"
          />
          <div className="flex flex-col items-stretch mt-6 max-md:max-w-full">
            <h1 className="text-[rgba(246,246,246,1)] text-6xl font-extrabold tracking-[-0.6px] text-center max-md:max-w-full max-md:text-[40px] max-md:mr-2.5">
              UNLEASH YOUR INNER <br />
              STALLION
            </h1>
            <h2 className="text-white text-2xl font-medium tracking-[-0.24px] text-center self-center mt-[17px]">
              Train Like an Athlete, Look Like a Champion
            </h2>
            <div className="z-10 mt-[-7px] ml-8 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[32%] max-md:w-full max-md:ml-0">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/0d7845377d3b458f669314ff082ecb7e4bda75c1?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-full mt-8 max-md:mt-10"
                    alt="Decorative element"
                  />
                </div>
                <div className="w-[16%] ml-5 max-md:w-full max-md:ml-0">
                  <button className="bg-[rgba(231,27,75,1)] flex min-h-[39px] items-center gap-2.5 text-base text-white font-bold text-center tracking-[-0.16px] w-full justify-center mt-[53px] px-5 py-2.5 max-md:mt-10">
                    <span className="self-stretch my-auto">Join now</span>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/da88696c98a43f8ac3a911c3a25827689212d850?placeholderIfAbsent=true"
                      className="aspect-[0.95] object-contain w-[18px] self-stretch shrink-0 my-auto"
                      alt="Arrow icon"
                    />
                  </button>
                </div>
                <div className="w-[15%] ml-5 max-md:w-full max-md:ml-0">
                  <button className="self-stretch bg-[rgba(255,255,255,0.1)] border gap-2.5 text-base text-white font-bold text-center tracking-[-0.16px] w-full mt-[53px] px-5 py-2.5 border-[rgba(231,27,75,1)] border-solid max-md:mt-10">
                    Explore now
                  </button>
                </div>
                <div className="w-[36%] ml-5 max-md:w-full max-md:ml-0">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/052e65d8fff4aff7ab1b28af7123a213da393951?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-full max-md:mt-[29px]"
                    alt="Decorative element"
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/6631bd71cf2e9cea70434249b5adfd4568bf64d3?placeholderIfAbsent=true"
            className="aspect-[0.61] object-contain w-[189px] shrink-0 max-w-full"
            alt="Decorative element"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
