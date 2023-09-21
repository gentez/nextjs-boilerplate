import Link from 'next/link';
import { useState } from 'react';

const index = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
        <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
          <h6>Our Project</h6>
          <h4>Some of our finest work.</h4>
        </div>
      </div>
      <div className="mb-7">
        <ul className="filters home-filter mt-10 flex gap-8 overflow-x-auto whitespace-nowrap pb-3 font-bold lg:mt-0 lg:gap-10">
          <li className={`filter ${activeTab === 'all' ? 'active' : ''}`}>
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className="transition hover:text-secondary"
            >
              All Work
            </button>
          </li>
          <li className={`filter ${activeTab === 'design' ? 'active' : ''}`}>
            <button
              type="button"
              onClick={() => setActiveTab('design')}
              className="transition hover:text-secondary"
            >
              Design
            </button>
          </li>
          <li className={`filter ${activeTab === 'website' ? 'active' : ''}`}>
            <button
              type="button"
              onClick={() => setActiveTab('website')}
              className="transition hover:text-secondary"
            >
              Website
            </button>
          </li>
          <li className={`filter ${activeTab === 'app' ? 'active' : ''}`}>
            <button
              type="button"
              onClick={() => setActiveTab('app')}
              className="transition hover:text-secondary"
            >
              Mobile App
            </button>
          </li>
          <li className={`filter ${activeTab === 'web' ? 'active' : ''}`}>
            <button
              type="button"
              onClick={() => setActiveTab('web')}
              className="transition hover:text-secondary"
            >
              Web Application
            </button>
          </li>
          <li className={`filter ${activeTab === 'ecommerce' ? 'active' : ''}`}>
            <button
              type="button"
              onClick={() => setActiveTab('ecommerce')}
              className="transition hover:text-secondary"
            >
              Ecommerce
            </button>
          </li>
        </ul>
      </div>
      <div className="projects grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          className={`project ${
            activeTab === 'all' || activeTab === 'web' ? 'block' : 'hidden'
          }`}
        >
          <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
            <Link
              href="/portfolio-detail"
              className="absolute left-0 top-0 h-full w-full"
            ></Link>
            <img
              src="/images/project-1.png"
              alt="project-1"
              className="h-52 w-full rounded-t-3xl object-cover"
            />
            <div className="p-5 text-sm font-bold">
              <h6 className="mb-1 text-black dark:text-white">
                Space Landing page
              </h6>
              <p>Website</p>
            </div>
          </div>
        </div>
        <div
          className={`project ${
            activeTab === 'all' || activeTab === 'ecommerce'
              ? 'block'
              : 'hidden'
          }`}
        >
          <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
            <Link
              href="/portfolio-detail"
              className="absolute left-0 top-0 h-full w-full"
            ></Link>
            <img
              src="/images/project-2.png"
              alt="project-2"
              className="h-52 w-full rounded-t-3xl object-cover"
            />
            <div className="p-5 text-sm font-bold">
              <h6 className="mb-1 text-black dark:text-white">
                Crypto Game - UX Interface
              </h6>
              <p>Website, App</p>
            </div>
          </div>
        </div>
        <div
          className={`project ${
            activeTab === 'all' || activeTab === 'app' ? 'block' : 'hidden'
          }`}
        >
          <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
            <Link
              href="/portfolio-detail"
              className="absolute left-0 top-0 h-full w-full"
            ></Link>
            <img
              src="/images/project-3.png"
              alt="project-3"
              className="h-52 w-full rounded-t-3xl object-cover"
            />
            <div className="p-5 text-sm font-bold">
              <h6 className="mb-1 text-black dark:text-white">
                Looking for a quiet place
              </h6>
              <p>Website</p>
            </div>
          </div>
        </div>
        <div
          className={`project ${
            activeTab === 'all' || activeTab === 'design' ? 'block' : 'hidden'
          }`}
        >
          <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
            <Link
              href="/portfolio-detail"
              className="absolute left-0 top-0 h-full w-full"
            ></Link>
            <img
              src="/images/project-4.png"
              alt="project-4"
              className="h-52 w-full rounded-t-3xl object-cover"
            />
            <div className="p-5 text-sm font-bold">
              <h6 className="mb-1 text-black dark:text-white">
                WeTour - Travel Hero Illustration
              </h6>
              <p>Website</p>
            </div>
          </div>
        </div>
        <div
          className={`project ${
            activeTab === 'all' || activeTab === 'website' ? 'block' : 'hidden'
          }`}
        >
          <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
            <Link
              href="/portfolio-detail"
              className="absolute left-0 top-0 h-full w-full"
            ></Link>
            <img
              src="/images/project-5.png"
              alt="project-5"
              className="h-52 w-full rounded-t-3xl object-cover"
            />
            <div className="p-5 text-sm font-bold">
              <h6 className="mb-1 text-black dark:text-white">
                Digital Art Guide
              </h6>
              <p>Branding</p>
            </div>
          </div>
        </div>
        <div
          className={`project ${
            activeTab === 'all' || activeTab === 'app' ? 'block' : 'hidden'
          }`}
        >
          <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
            <Link
              href="/portfolio-detail"
              className="absolute left-0 top-0 h-full w-full"
            ></Link>
            <img
              src="/images/project-6.png"
              alt="project-6"
              className="h-52 w-full rounded-t-3xl object-cover"
            />
            <div className="p-5 text-sm font-bold">
              <h6 className="mb-1 text-black dark:text-white">
                Frozeverse - 3D and motion design
              </h6>
              <p>Branding, Website, App</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
