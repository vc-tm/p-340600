import React from "react";

const Partners: React.FC = () => {
  return (
    <section>
      <h2 className="text-[rgba(40,40,40,1)] text-[28px] font-extrabold leading-none tracking-[-0.28px] text-center mt-[57px] max-md:max-w-full max-md:mt-10">
        POWERED BY THE BEST
      </h2>
      <p className="text-[rgba(20,20,20,1)] text-xl font-medium leading-[1.4] mt-3 max-md:max-w-full">
        We only work with brands that match our extreme standards.
      </p>

      <div className="self-stretch flex w-full items-stretch flex-wrap mt-[49px] max-md:max-w-full max-md:mt-10">
        <div className="border flex flex-col justify-center py-[82px] border-[rgba(141,141,141,1)] border-solid">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/bed8ff3846e40ef3bca3f297d1c30a909032d1bf?placeholderIfAbsent=true"
            className="aspect-[1.94] object-contain w-[33px]"
            alt="Partner logo"
          />
        </div>
        <div className="border flex flex-col items-center justify-center px-[52px] py-[83px] border-[rgba(141,141,141,1)] border-solid max-md:px-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/8848b07dff2af56d1a13aa42c2288493793c97f1?placeholderIfAbsent=true"
            className="aspect-[7.52] object-contain w-[120px] max-w-full"
            alt="Partner logo"
          />
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/664bd600caada0ca4d0a1ce0881e3c8519254951?placeholderIfAbsent=true"
          className="aspect-[1.43] object-contain w-[259px] shrink-0 max-w-full"
          alt="Partner logo"
        />
        <div className="border flex flex-col items-center justify-center px-[52px] py-[70px] border-[rgba(141,141,141,1)] border-solid max-md:px-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/634f20dc2975f43cf113e7f588884c1dedeeb0ce?placeholderIfAbsent=true"
            className="aspect-[1.78] object-contain w-[73px]"
            alt="Partner logo"
          />
        </div>
        <div className="border flex flex-col items-center justify-center px-[52px] py-[72px] border-[rgba(141,141,141,1)] border-solid max-md:px-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/b9d260c04dd102217dd143eb1301cd4d34b6c7e0?placeholderIfAbsent=true"
            className="aspect-[3.06] object-contain w-[113px] max-w-full"
            alt="Partner logo"
          />
        </div>
        <div className="border flex flex-col items-center justify-center px-[52px] py-[82px] border-[rgba(141,141,141,1)] border-solid max-md:px-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/bb2936c2ef4b67c30a0b9f55aa25a7efedb117b6?placeholderIfAbsent=true"
            className="aspect-[6.8] object-contain w-[116px] max-w-full"
            alt="Partner logo"
          />
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/f03758d69013e97e12c77cc8ae0fec6a71a9a81f?placeholderIfAbsent=true"
          className="aspect-[0.25] object-contain w-[46px] shrink-0"
          alt="Partner logo"
        />
      </div>

      <div className="bg-[rgba(80,80,80,0.66)] self-stretch z-10 flex w-full flex-col items-center justify-center mt-[115px] px-20 py-0.5 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/4b5bae0975cb03c73e6d6de3955087f732ad8763?placeholderIfAbsent=true"
          className="aspect-[1.5] object-contain w-full max-w-[1119px] max-md:max-w-full"
          alt="Featured image"
        />
      </div>
    </section>
  );
};

export default Partners;
