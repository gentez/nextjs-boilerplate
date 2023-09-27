'use client';
import Faq from '@/components/Faq';
import Footer from '@/components/global/footer';
import NavigationBar from '@/components/global/navbar';
import parser, { HTMLReactParserOptions, domToReact } from 'html-react-parser';
import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { PageData } from 'types';
import AboutUs from '../../../pages/AboutUs/index';
import Gallery from '../../../pages/Gallery/index';
import Services from '../../../pages/Services/index';
import { IRootState } from '../../../store';
import Seo from '../seo';
import Banner from '@/components/banner';
const PageConstructor: NextPage<{ data: PageData }> = ({ data }) => {
  const [active, setActive] = useState<any>(0);
  const isRtl =
    useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl'
      ? true
      : false;
  const options: HTMLReactParserOptions = {
    replace: ({ attribs, children, name }) => {
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
      if (name === 'a') {
        return <Link {...attribs}>{domToReact(children, options)}</Link>;
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
      {data?.nav?.data && (
        <div className="header">
          <NavigationBar data={[]} />
        </div>
      )}
      <Banner/>
      <div className="grid grid-cols-1 md:grid-cols-12">
        {data?.columns?.map((column, index) => (
          <div key={index} className={`col-span-${column.grid}`}>
            {parser(column?.editor, options)}
          </div>
        ))}
      </div>
      <AboutUs />
      <div className="my-10">
        <Gallery />
      </div>
      <Services />
      {data?.Faqs?.length > 0 && <Faq queries={data.Faqs} />}
      {data?.footer?.data && (
        <div className="footer bottom-0 w-full">
          <Footer />
        </div>
      )}
    </>
  );
};

export default PageConstructor;