import { getEntryBySlug } from '@/app-modules/repositories/strapi-repository';
import PageConstructor from '@/components/global/page-constructor/page-constructor';
import { NextPage } from 'next';
import { PageData } from 'types';
const Home: NextPage<{ data: PageData }> = ({ data }) => {
  return <PageConstructor data={data} />;
};

export const getStaticProps = async () => {
  try {
    const res = await getEntryBySlug('page', 'home');
    // console.log(res);
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
if (typeof window === 'undefined') {
  console.error = () => {};
}

export default Home;
