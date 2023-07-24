import {NextPage } from 'next';
import { PageData } from 'types';
// import Header from '../componenets/Head/Head';
import { getAllEntries, getEntryBySlug } from '@/app-modules/repositories/strapi-repository';

const Page: NextPage<{data:PageData}> = ({data}) => {
  return (
    <>
    {/* <Header title={data.Title}/> */}
{
  <div className='container'>
    <h1>{data.Title}</h1>
    <p>{data.Description}</p>
  </div>
}
    </>
  );
};
export async function getStaticPaths(){
  const res=await getAllEntries("pagesName")
  return {
    paths:res.map(({slug}:any) => {
      return { params:{slug: slug} };
    }),
    fallback: false,
  }
}
export const getStaticProps= async ({params}:{params:{slug:string}}) => {
  const res = await getEntryBySlug("page",params.slug)
  const data: PageData | null = res ? res : null;
  return {
    props: {
      data: data
    },revalidate: 30,
  };
};

export default Page;
