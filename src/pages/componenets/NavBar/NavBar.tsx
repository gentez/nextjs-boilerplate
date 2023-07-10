import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { NavBar } from 'types';
import { getAllPages } from '../../../apis/getApis';
import Link from 'next/link';
interface NavBarProps {
  data: NavBar[];
}

const NavBarComponent: NextPage<NavBarProps> = () => {
  // State to store the fetched data
  const [navbarData, setNavbarData] = useState<NavBar[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const fetchedData: NavBar[] = await getAllPages(); // Replace with your API call or data-fetching logic

        // Update the state with the fetched data
        setNavbarData(fetchedData);
      } catch (error) {
        // Handle any errors
        console.error('Error fetching navbar data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  // Render the navbar component using the fetched data
  return (
    <>
    <nav>
      <ul>
        {navbarData.map(({ Title, slug }) => (
          <li key={Title+slug}><Link href={Title==="Home"?"/":`/pages/${slug}`}>{Title}</Link></li>
        ))}
      </ul>
    </nav></>
  );
};

export default NavBarComponent;