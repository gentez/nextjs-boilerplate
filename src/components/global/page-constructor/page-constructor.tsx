import Banner from '@/components/banner';
import FAQS from '@/components/faqs';
import Footer from '@/components/global/footer';
import NavigationBar from '@/components/global/navbar';
import { NextPage } from 'next';
import { PageData } from 'types';
import Project from '../../Products/index';
import Services from '../../Services/index';
import Seo from '../seo';

const PageConstructor: NextPage<{ data: PageData }> = ({ data }) => {
  return (
    <>
      <Seo title={data.Title} />
      {data?.nav?.data && (
        <div className="header">
          <NavigationBar data={[]} />
        </div>
      )}

      <Banner />
      <div className="container p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {data.columns.map((column, index) => (
            <div
              key={index}
              className={`col-span-${column.grid} rounded-lg border p-4 shadow-md`}
            >
              <p>{column.editor}</p>
            </div>
          ))}
        </div>
      </div>
      <FAQS />
      <Project />
      <Services />
      {data?.footer?.data && (
        <div className="footer bottom-0 w-full">
          <Footer />
        </div>
      )}
    </>
  );
};

export default PageConstructor;
