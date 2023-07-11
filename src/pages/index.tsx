export default function Home() {
  return (
    <>
      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
    </>
  );
}
// import { GetStaticProps, NextPage } from 'next';
// import { PageData } from 'types';
// import Header from './componenets/Head/Head';
// import Page from './pages/[slug]';
// import {getEntryBySlug } from '@/app-modules/repositories/strapi-repository';

// const Home: NextPage<{data:PageData}> = ({data}) => {
//   return (
//     <>
//     <Header title={data.Title}/>
//     <Page data={data}/>
//     </>
// );
// };
// export const getStaticProps: GetStaticProps = async () => {
//   const res = await getEntryBySlug("page","home")
//   const data: PageData | null = res ? res : null;
//   return {
//     props: {
//       data: data
//     },revalidate: 30
//   };
// };

// export default Home;
