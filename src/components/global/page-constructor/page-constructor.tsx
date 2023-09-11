import Banner from '@/components/banner';
import FAQS from '@/components/faqs';
import Footer from '@/components/global/footer';
import NavigationBar from '@/components/global/navbar';
import { NextPage } from 'next';
import React from 'react';
import { PageData } from 'types';
import Seo from '../seo';

const PageConstructor: NextPage<{ data: PageData }> = ({ data }) => {
  
  return (
    <>
    <Seo title={data.Title}/>
      {data?.nav?.data && (
        <div className="header">
          <NavigationBar data={[]} />
        </div>
      )}
     
      <Banner/>
      <div className="container p-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {data.columns.map((column, index) => (
            <div
              key={index}
              className={`col-span-${column.grid} p-4 border rounded-lg shadow-md`}
            >
              <p>{column.editor}</p>
            </div>
          ))}
        </div>
      </div>
      <FAQS/>
      {data?.footer?.data && (
        <div className="footer bottom-0 w-full">
          <Footer />
        </div>
      )}
    </>
  );
};

export default PageConstructor;
