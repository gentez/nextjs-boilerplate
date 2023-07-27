import {NextPage } from 'next';
import { PageData } from 'types';
import { getAllEntries, getEntryBySlug } from '@/app-modules/repositories/strapi-repository';
import logger from '@/app-modules/logging/winston-logger';

const Page: NextPage<{data:PageData}> = ({data}) => {
  return (
    <>
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
  logger.info("Called")
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
