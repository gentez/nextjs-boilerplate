import {NextPage } from 'next';
import { PageData } from 'types';
import { getAllEntries, getEntryBySlug } from '@/app-modules/repositories/strapi-repository';

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
export async function getStaticPaths() {
  try {
    const res = await getAllEntries("pagesName");
    return {
      paths: res.map(({ slug }: any) => ({ params: { slug: slug } })),
      fallback: false,
    };
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    };
  }
}

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
  try {
    const res = await getEntryBySlug("page", params.slug);
    return {
      props: {
        data: res || null,
      },
      revalidate: 30,
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
      revalidate: 30,
    };
  }
};

// Suppress the console error during build
if (typeof window === "undefined") {
  console.error = () => {};
}


export default Page;
