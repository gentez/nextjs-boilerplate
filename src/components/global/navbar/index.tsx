import { getAllEntries } from '@/app-modules/repositories/strapi-repository';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NavBar } from 'types';
interface NavBarProps {
  data: NavBar[];
}

const NavigationBar: NextPage<NavBarProps> = () => {
  const router = useRouter();
  const [navbarData, setNavbarData] = useState<NavBar[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData: NavBar[] = await getAllEntries('page');
        setNavbarData(fetchedData);
      } catch (error) {
        console.error('Error fetching navbar data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <nav
        className="sticky flex w-full flex-nowrap items-center justify-between bg-neutral-900 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:flex-wrap lg:justify-start lg:py-4"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="mx-2">
            <Link
              className="border-solid text-2xl text-white hover:text-warmGray-400"
              href={`/pages/home`}
            >
              Jaalnet
            </Link>
          </div>

          <button
            className="block border-0 bg-transparent px-2 text-neutral-300 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent10"
            aria-controls="navbarSupportedContent10"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>

          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent10"
            data-te-collapse-item
          >
            <ul
              className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
              data-te-navbar-nav-ref
            >
              {navbarData?.map(({ Title, slug }) => {
                
                return (
                  <>
                    <li
                      className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
                      data-te-nav-item-ref
                    >
                      <Link
                        className={
                          router?.query?.slug == slug
                            ? 'text-orange-500'
                            : '' +
                              'text-neutral-300 transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 [&.active]:text-neutral-200'
                        }
                        aria-current="page"
                        href={`/pages/${slug}`}
                        data-te-nav-link-ref
                      >
                        {Title}
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
            {/* #ff651c<Link href="https://strapi-dev-ddlv.onrender.com/admin/auth/login" target='_blank' className='text-white bg-blue-500 p-2 rounded-md hover:bg-white hover:text-blue-500 me-3'>Admin Panel</Link> */}
            <Link
              href="/register"
              target="_blank"
              className="me-3 font-semibold rounded bg-orange-500 p-2 text-white hover:bg-orange-400"
            >
              Admin Panel
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
