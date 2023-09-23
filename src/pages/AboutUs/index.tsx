interface Props {}

const index = () => {
  return (
    <section className="pt-12 lg:pt-24">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-0">
          <div className="text-center ltr:md:text-left rtl:md:text-right">
            <h6 className="mb-3 text-lg font-extrabold text-primary sm:mb-4">
              ABOUT US
            </h6>
            <h2 className="max-w-[457px] text-2xl font-extrabold text-black dark:text-white sm:text-3xl lg:text-[40px] lg:!leading-[50px]">
              You do the business, we’ll handle the money.
            </h2>
            <p className="mt-[18px]  max-w-[522px] text-lg font-semibold text-black">
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </p>
            <button type="button" className="btn mt-7 text-white">
              Get Started
            </button>
          </div>
          <div>
            <img
              src="/images/about.jpg"
              className="rtl:rotate-y-180 w-full max-w-[550px]"
              alt="crypto-about-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
