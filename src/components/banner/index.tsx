// import Testimonial from '../../components/';
// import CounterComponent from '../components/CounterComponent';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
const Banner = () => {
  const isRtl =
    useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl'
      ? true
      : false;

  return (
    <div className="overflow-hidden bg-black pt-[10px] sm:-mx-[178px] sm:rounded-b-[50%] lg:-mx-[78px] lg:pt-[34px]">
      <div className="relative">
        <img
          src="/images/banner-lefticon.png"
          alt="banner-lefticon"
          className="absolute left-0 top-20 sm:left-[250px] lg:left-[150px]"
        />
        <img
          src="/images/banner-rightIcon.png"
          alt="banner-rightIcon"
          className="absolute -top-4 right-0 sm:right-[250px] lg:right-[150px]"
        />
        <div className="container">
          <div className="relative bg-[url(/images/world-map.png)] bg-cover bg-top bg-no-repeat pb-0 pt-14 lg:pb-60 lg:pt-20 xl:pt-36">
            <div className="relative z-[1] text-center text-white lg:w-3/5 ltr:lg:text-left rtl:lg:text-right xl:w-1/2">
              <h2 className="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[70px] lg:leading-[90px] ">
                Make your <span className="italic text-primary">team</span>{' '}
                <span className="italic text-secondary">work</span> together
              </h2>
              <p className="my-8 text-lg lg:w-[90%] ">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate.
              </p>
              <Link
                href="/about-us"
                className="btn mx-auto mt-2 block w-fit bg-white lg:mx-0 lg:rtl:ml-auto"
              >
                read more
              </Link>
            </div>
            <div
              className="bottom-0 mx-auto mb-2 mt-5 w-auto ltr:right-0 rtl:left-0 md:w-[540px] lg:absolute lg:mb-0 lg:mt-0 xl:w-[650px]"
              // data-aos={isRtl ? 'fade-right' : 'fade-left'}
              data-aos-duration="1000"
              data-aos-offset="0"
              data-aos-delay="200"
            >
              <img
                src="/images/home-banner-icon.svg"
                alt="home-banner-icon"
                className="rtl:rotate-y-180"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
