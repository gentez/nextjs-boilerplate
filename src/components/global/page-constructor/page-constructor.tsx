'use client';
import Banner from '@/components/banner';
import Faq from '@/components/faqs';
import Footer from '@/components/global/footer';
import NavigationBar from '@/components/global/navbar';
import ProjectSlider from '@/components/slider';
import parser, {
  Element,
  HTMLReactParserOptions,
  domToReact,
} from 'html-react-parser';
import { NextPage } from 'next';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/navigation';
import { PageData } from 'types';
import { IRootState } from '../../../store';
import Seo from '../seo';
const PageConstructor: NextPage<{ data: PageData }> = ({ data }) => {
  const [showTopButton, setShowTopButton] = useState(false);

  const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const onScrollHandler = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  };
  const [active, setActive] = useState<any>(0);
  const isRtl =
    useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl'
      ? true
      : false;
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      const typedDomNode = domNode as Element;
      const { name, children, attribs } = typedDomNode;
      if (!attribs) {
        return;
      }
      if (attribs?.id === 'main') {
        return (
          <h1 style={{ fontSize: 42 }}>{domToReact(children, options)}</h1>
        );
      }
      if (name === 'summary') {
        return (
          <summary className="text-orange-500 cursor-pointer">
            {domToReact(children, options)}
          </summary>
        );
      }

      if (name === 'img' && attribs?.class === 'pencil-ruler') {
        return (
          <img
            src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path opacity='0.5' d='M14.2371 18.7087L18.7103 14.2366L21.4893 17.0156V21.4888H17.0172L14.2371 18.7087ZM5.2917 9.76334L2.3092 6.7819C2.21118 6.68399 2.13342 6.56771 2.08036 6.43973C2.02731 6.31174 2 6.17455 2 6.03601C2 5.89746 2.02731 5.76027 2.08036 5.63229C2.13342 5.5043 2.21118 5.38803 2.3092 5.29012L5.2917 2.30867C5.4894 2.11103 5.75751 2 6.03706 2C6.31662 2 6.58472 2.11103 6.78242 2.30867L9.76598 5.29012L5.2917 9.76334Z' fill='white'/><path d='M5.29177 12.7459L7.21895 14.6742L8.71179 13.1813L6.78249 11.2552L8.27321 9.76449L10.2015 11.6917L11.6922 10.201L9.76605 8.27271L11.2568 6.78199L13.1818 8.71128L14.6736 7.2195L12.7454 5.29232L15.7279 2.31087C15.9256 2.11323 16.1937 2.0022 16.4732 2.0022C16.7528 2.0022 17.0209 2.11323 17.2186 2.31087L21.6908 6.78304C21.8884 6.98074 21.9994 7.24885 21.9994 7.5284C21.9994 7.80795 21.8884 8.07606 21.6908 8.27376L8.27321 21.6913C8.07551 21.889 7.8074 22 7.52785 22C7.2483 22 6.98019 21.889 6.78249 21.6913L2.31032 17.2192C2.11268 17.0215 2.00165 16.7533 2.00165 16.4738C2.00165 16.1942 2.11268 15.9261 2.31032 15.7284L5.29177 12.7459Z' fill='white'/></svg>"
            alt="SVG Image"
          />
        );
      }
      if (name === 'img' && attribs?.class === 'html-code') {
        return (
          <img
            src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path opacity='0.5' d='M10.1658 20C10.5862 20 10.9617 19.7371 11.1054 19.342L15.8374 6.34204C16.0749 5.68981 15.5919 5 14.8978 5H13.8341C13.4137 5 13.0382 5.26292 12.8945 5.65796L8.16245 18.658C7.92504 19.3102 8.40804 20 9.10214 20H10.1658Z' fill='white'/><path d='M17.9889 17.0964C18.3794 17.4871 19.0127 17.4873 19.4034 17.0966L23.2929 13.2071C23.6834 12.8166 23.6834 12.1834 23.2929 11.7929L19.4036 7.90359C19.0129 7.51287 18.3793 7.5131 17.9889 7.90409L17.2814 8.61254C16.8913 9.00328 16.8916 9.63632 17.2823 10.0266L19.0501 11.7927C19.441 12.1832 19.441 12.8168 19.0502 13.2074L17.2822 14.9746C16.8916 15.365 16.8914 15.9981 17.2818 16.3888L17.9889 17.0964ZM4.94994 13.2073C4.55904 12.8167 4.55896 12.1832 4.94977 11.7925L6.71781 10.0253C7.10839 9.63494 7.10858 9.00184 6.71823 8.61121L6.01111 7.90359C5.62062 7.51283 4.98726 7.51272 4.59664 7.90334L0.707106 11.7929C0.316582 12.1834 0.316582 12.8166 0.707107 13.2071L4.59639 17.0964C4.98711 17.4871 5.62066 17.4869 6.01111 17.0959L6.71856 16.3874C7.10874 15.9967 7.10837 15.3637 6.71773 14.9734L4.94994 13.2073Z' fill='white'/></svg>"
            alt="SVG Image"
          />
        );
      }
      if (name === 'img' && attribs?.class === 'bar-chart') {
        return (
          <img
            src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path opacity='0.5' d='M6.21053 20H3.05263C2.77346 20 2.50572 19.8891 2.30831 19.6917C2.1109 19.4943 2 19.2265 2 18.9474V10.5263C2 10.2471 2.1109 9.97941 2.30831 9.782C2.50572 9.58459 2.77346 9.47369 3.05263 9.47369H6.21053C6.4897 9.47369 6.75744 9.58459 6.95485 9.782C7.15226 9.97941 7.26316 10.2471 7.26316 10.5263V18.9474C7.26316 19.2265 7.15226 19.4943 6.95485 19.6917C6.75744 19.8891 6.4897 20 6.21053 20ZM20.9474 20H17.7895C17.5103 20 17.2426 19.8891 17.0452 19.6917C16.8477 19.4943 16.7368 19.2265 16.7368 18.9474V7.36843C16.7368 7.08925 16.8477 6.82151 17.0452 6.6241C17.2426 6.4267 17.5103 6.3158 17.7895 6.3158H20.9474C21.2265 6.3158 21.4943 6.4267 21.6917 6.6241C21.8891 6.82151 22 7.08925 22 7.36843V18.9474C22 19.2265 21.8891 19.4943 21.6917 19.6917C21.4943 19.8891 21.2265 20 20.9474 20Z' fill='white'/><path d='M13.5789 20H10.421C10.1419 20 9.87412 19.8891 9.67672 19.6917C9.47931 19.4943 9.36841 19.2265 9.36841 18.9474V1.05263C9.36841 0.773456 9.47931 0.505715 9.67672 0.308309C9.87412 0.110902 10.1419 0 10.421 0H13.5789C13.8581 0 14.1259 0.110902 14.3233 0.308309C14.5207 0.505715 14.6316 0.773456 14.6316 1.05263V18.9474C14.6316 19.2265 14.5207 19.4943 14.3233 19.6917C14.1259 19.8891 13.8581 20 13.5789 20Z' fill='white'/></svg>"
            alt="SVG Image"
          />
        );
      }
      if (name === 'img' && attribs?.class === 'arrow-right') {
        return (
          <img
            src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'><path d='M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z' fill='orange'/></svg>"
            alt="SVG Image"
          />
        );
      }
      if (attribs?.classname === 'mce-accordion') {
        return (
          <details className="mce-accordion bg-white p-4 shadow-md transition duration-300 hover:shadow-lg">
            {domToReact(children, options)}
          </details>
        );
      }
    },
  };
  return (
    <>
      <Seo title={data?.Title} />
      <div className="flex min-h-screen flex-col bg-white bg-gradient-to-r from-[#FCF1F4] to-[#EDFBF9] font-mulish text-base font-normal text-gray antialiased dark:bg-[#101926] dark:from-transparent dark:to-transparent">
        {data?.nav && (
          <NavigationBar
            sticky={showTopButton ? 'sticky-header' : ''}
            data={data}
          />
        )}
        <div className="overflow-x-hidden">
          {data?.banner?.editor && <Banner data={data} />}

          {data?.Section?.map((section, index) => (
            <section key={index} className="mb-5 pt-12 lg:pt-24">
              <div className="container">
                <div className="grid grid-cols-12 gap-3">
                  {section?.column_html?.map((column, index) => (
                    <div
                      key={index}
                      className={`md:col-span-${column?.lg} sm:col-span-${
                        column?.md || column?.lg
                      } col-span-${column?.sm || column?.lg}`}
                    >
                      {parser(column?.editor, options)}
                    </div>
                  ))}
                  {/*flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary col-span-1: sm:col-span-2md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2 col-span-3: sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3 col-span-4: sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4 col-span-5: sm:col-span-5 md:col-span-5 lg:col-span-5 xl:col-span-5 2xl:col-span-5 col-span-6: sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-6 col-span-7: sm:col-span-7 md:col-span-7 lg:col-span-7 xl:col-span-7 2xl:col-span-7 col-span-8: sm:col-span-8 md:col-span-8 lg:col-span-8 xl:col-span-8 2xl:col-span-8 col-span-9: sm:col-span-9 md:col-span-9 lg:col-span-9 xl:col-span-9 2xl:col-span-9 col-span-10: sm:col-span-10 md:col-span-10 lg:col-span-10 xl:col-span-10 2xl:col-span-10 col-span-11: sm:col-span-11 md:col-span-11 lg:col-span-11 xl:col-span-11 2xl:col-span-11 col-span-12: sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 2xl:col-span-12 */}
                  {section?.column_image?.map((column, index) => (
                    <div
                      key={index}
                      className={`md:col-span-${column?.lg} sm:col-span-${
                        column?.md || column?.lg
                      } col-span-${
                        column?.sm || column?.lg
                      } mt-2 hidden sm:block md:mt-0`}
                    >
                      <img
                        src={'http://localhost:1337' + column?.image?.url}
                        alt={column?.image?.alternativeText}
                      />
                    </div>
                  ))}
                  {section?.column_card?.map((column, index) => (
                    <div
                      key={index}
                      className={`md:col-span-${column?.lg} sm:col-span-${
                        column?.md || column?.lg
                      } col-span-${column?.sm || column?.lg} mb-2 md:mb-0`}
                    >
                      {parser(column?.editor, options)}
                    </div>
                  ))}
                  {section?.column_accordion !== null && (
                    <div
                      key={index}
                      className={`md:col-span-${
                        section?.column_accordion?.lg
                      } sm:col-span-${
                        section?.column_accordion?.md ||
                        section?.column_accordion?.lg
                      } col-span-${
                        section?.column_accordion?.sm ||
                        section?.column_accordion?.lg
                      }`}
                    >
                      <Faq queries={section?.column_accordion?.accordion} />
                    </div>
                  )}
                </div>
              </div>
            </section>
          ))}

          {data?.column_slider?.length >= 1 && (
            <ProjectSlider
              data={data?.column_slider[0].slider_card}
              title1={data?.column_slider[0].title}
              title2={data?.column_slider[0].subtitle}
            />
          )}
        </div>
        {data?.footer && <Footer data={data} />}
      </div>
    </>
  );
};

export default PageConstructor;
