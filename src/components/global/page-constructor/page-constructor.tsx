import Footer from '@/components/global/footer';
import NavigationBar from '@/components/global/navbar';
import { NextPage } from 'next';
import React from 'react';
import { PageData } from 'types';

const PageConstructor: NextPage<{ data: PageData }> = ({ data }) => {
  
  return (
    <>
      {data?.nav?.data && (
        <div className="header">
          <NavigationBar data={[]} />
        </div>
      )}
      {/* <NavigationBar data={data.nav.data} /> */}
      <div className="container p-4">
        <h1 className="mb-4 text-3xl font-bold">{data.Title}</h1>

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
      {data?.footer?.data && (
        <div className="footer fixed bottom-0 w-full">
          <Footer />
        </div>
      )}
    </>
  );
};

export default PageConstructor;
