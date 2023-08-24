import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { NavBar } from 'types';
import Link from 'next/link';
import { getAllEntries } from '@/app-modules/repositories/strapi-repository';

interface NavBarProps {
  data: NavBar[];
}

const NavigationBar: NextPage<NavBarProps> = () => {
  const [navbarData, setNavbarData] = useState<NavBar[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData: NavBar[] = await getAllEntries("page");
        setNavbarData(fetchedData);
      } catch (error) {
        console.error('Error fetching navbar data:', error);
      }
    };

    fetchData();
    
  }, []);
  return (
    <nav className="bg-gray-800">
      <ul className="flex justify-center">
        {navbarData.map(({ Title, slug }) => (
          <li key={Title + slug} className="px-4 py-2">
            <Link href={Title === "Home" ? "/" : `/pages/${slug}`} className="text-white">
              {Title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;

