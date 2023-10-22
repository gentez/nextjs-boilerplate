
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const ProjectSlider = (props: any) => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <section className="pt-12 lg:pt-24 mb-5">
            <div className="container">
                <div className="mb-7 flex flex-col items-center justify-center lg:mb-0 lg:flex-row lg:justify-between">
                    <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
                        <h6>{props.title1}</h6>
                        <h4>{props.title2}</h4>
                    </div>
                    <div className="flex items-center justify-end gap-4">
                        <Link
                            href="/portfolio-detail"
                            className="text-sm flex justify-end font-extrabold text-black transition hover:text-secondary dark:text-white dark:hover:text-secondary"
                        >
                            View All
                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'><path d='M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z' fill='orange'/></svg>" alt="SVG Image"/>

                        </Link>
                        
                        
                    </div>
                </div>
                
            </div>
            <div className="swiper project-slider px-6">
            <div className="container">
                <Slider {...settings}>
                    {props.data?.map((item:any, index:Number) => (
                        <div className="p-1"key={item?.id}>
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href={item.link} className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img src={"http://localhost:1337"+item?.image?.url} alt="Project" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="mb-1 text-black line-clamp-1 dark:text-white">{item?.heading}</h6>
                                    <p>{item?.content}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </Slider>
                </div>
            </div>
        </section>
    );
};

export default ProjectSlider;
