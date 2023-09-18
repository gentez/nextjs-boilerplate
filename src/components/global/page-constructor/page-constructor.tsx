'use client';
import Banner from '@/components/banner';
import Footer from '@/components/global/footer';
import NavigationBar from '@/components/global/navbar';
import parser, { HTMLReactParserOptions, domToReact } from 'html-react-parser';
import { NextPage } from 'next';
import { PageData } from 'types';
import Seo from '../seo';
const PageConstructor: NextPage<{ data: PageData }> = ({ data }) => {
  const options: HTMLReactParserOptions = {
    replace: ({ attribs, children, name }) => {
      console.log(name);
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
          <summary className="cursor-pointer text-orange-500">
            {domToReact(children, options)}
          </summary>
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
      {data?.nav?.data && (
        <div className="header">
          <NavigationBar data={[]} />
        </div>
      )}

      {/* <Banner /> */}
      
      
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            {data.columns.map((column, index) => (
              <div
                key={index}
                className={`col-span-${column.grid} shadow-md`}
              >
                {parser(column.editor, options)}
              </div>
            ))}
          </div>
      {data?.footer?.data && (
        <div className="footer bottom-0 w-full">
          <Footer />
        </div>
      )}
    </>
  );
};

export default PageConstructor;
// 'use client';
// import Banner from '@/components/banner';
// import FAQS from '@/components/faqs';
// import Footer from '@/components/global/footer';
// import NavigationBar from '@/components/global/navbar';
// import { NextPage } from 'next';
// import { PageData } from 'types';
// import Seo from '../seo';
// import logo  from "../../../public/wrap.jpg"
// import parse, { domToReact } from 'html-react-parser';
// import { HTMLReactParserOptions, Element } from 'html-react-parser';
// const PageConstructor: NextPage<{ data: PageData }> = ({ data }) => {
// const html = `
// <details className="mce-accordion">
//               <summary className="cursor-pointer">
//                 Accordion summary...
//               </summary>
//               <div className="mt-2 text-black">Accordion body...</div>
//             </details>
// `;

// const options:HTMLReactParserOptions = {
//   replace: ({attribs, children,name}) => {
//     console.log(name)
//       if (!attribs) {
//         return;
//       }

//       if (attribs?.id === 'main') {
//         return <h1 style={{ fontSize: 42 }}>{domToReact(children, options)}</h1>;
//       }
//       if (name === 'summary') {
//         return <summary className="cursor-pointer text-orange-500">{domToReact(children, options)}</summary>;
//       }
//       if (attribs?.classname === 'mce-accordion') {

//         return (
//           <details className="mce-accordion bg-white p-4 shadow-md transition duration-300 hover:shadow-lg">
//             {domToReact(children, options)}
//           </details>
//         );
//       }
//     }
//   }

//   return (
//     <>
//       {/* <Seo title={data?.Title} />
//       {data?.nav?.data && (
//         <div className="header">
//           <NavigationBar data={[]} />
//         </div>
//       )}

//       <Banner />
//       <section className="dark:bg-gray-800 dark:text-gray-100 bg-neutral-900 m-3">
//       <div className="container p-4 ">
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-12 bg-neutral-900">
//           {data.columns.map((column, index) => (
//             <div
//               key={index}
//               className={`col-span-${column.grid} rounded-lg border p-4 shadow-md`}
//             >
//              {parser(column.editor)}
//             </div>
//           ))}
//         </div>
//       </div>
//       </section>
//       <FAQS />
//       {data?.footer?.data && (
//         <div className="footer bottom-0 w-full">
//           <Footer />
//         </div>
//       )} */}
//       {parse(html, options)}
//     </>
//   );
// };

// export default PageConstructor;
