import React from "react";

const Coaches: React.FC = () => {
  return (
    <section className="mt-[69px] max-md:mt-10">
      <h2 className="text-[rgba(40,40,40,1)] text-[28px] font-extrabold leading-none tracking-[-0.28px] text-center max-md:max-w-full">
        MEET YOUR TACTICAL COACHING TEAM
      </h2>
      <p className="text-black text-xl font-medium leading-[1.4] mt-3 max-md:max-w-full">
        World-class trainers who've been where you want to go.
      </p>

      <div className="w-full max-w-[1300px] mt-[59px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[52%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col relative min-h-[569px] w-full rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/dae1c0461a4223c09e7b0ca0ca29957383a0da9c?placeholderIfAbsent=true"
                className="absolute h-full w-full object-cover inset-0"
                alt="Coach Jake Torrez"
              />
              <div className="relative pt-2.5 pb-[30px] px-[17px] rounded-[98px_0px_0px_0px] max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-[45%] max-md:w-full max-md:ml-0">
                    <div className="relative grow max-md:mt-10">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/3bf9f959abe226f0e74075c8179d2fa2784c2f77?placeholderIfAbsent=true"
                        className="aspect-[0.63] object-contain w-[25px]"
                        alt="Quote icon"
                      />
                      <div className="flex flex-col items-stretch mt-[387px] pl-[9px] max-md:mt-10">
                        <h3 className="text-[rgba(231,27,75,1)] text-2xl font-extrabold leading-none">
                          Jake Torrez
                        </h3>
                        <p className="text-white text-base font-normal leading-7 mt-[46px] max-md:mt-10">
                          MMA Conditioning
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[55%] ml-5 max-md:w-full max-md:ml-0">
                    <p className="text-white text-base font-normal leading-[19px] relative mt-[487px] max-md:mt-10">
                      Former pro fighter with 12-3 record. Trained UFC athletes.
                      No-nonsense approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[16%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col relative aspect-[0.344] w-[196px] grow max-md:mt-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/e2f8b6f378f20864b0be3fcb004233ecfb35007e?placeholderIfAbsent=true"
                className="absolute h-full w-full object-cover inset-0"
                alt="Coach thumbnail"
              />
              <div className="relative flex flex-col pt-2 pb-[521px] px-[39px] max-md:pl-5 max-md:pb-[100px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/3bf9f959abe226f0e74075c8179d2fa2784c2f77?placeholderIfAbsent=true"
                  className="aspect-[0.63] object-contain w-[25px] mb-[-104px] max-md:mb-2.5"
                  alt="Quote icon"
                />
              </div>
            </div>
          </div>
          <div className="w-[16%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/97569c8877d5102c9028cbf76efb56ce8864f198?placeholderIfAbsent=true"
              className="aspect-[0.34] object-contain w-[196px] shrink-0 max-w-full grow max-md:mt-6"
              alt="Coach thumbnail"
            />
          </div>
          <div className="w-[16%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/cfd359b80f13df4268180234baf96c491d003db9?placeholderIfAbsent=true"
              className="aspect-[0.34] object-contain w-[196px] shrink-0 max-w-full grow max-md:mt-6"
              alt="Coach thumbnail"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coaches;
