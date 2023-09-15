import React from 'react';
import parse from 'html-react-parser';
const FAQS = () => {
  return (
    <section className="m-3 bg-neutral-900 dark:bg-gray-800 dark:text-gray-100">
      <div className="min-h-sceen mx-auto max-w-screen-xl bg-neutral-900 px-5">
        <div className="flex flex-col items-center">
          <h2 className="mt-5 text-5xl font-bold tracking-tight">FAQ</h2>
          <p className="mt-3 text-xl text-orange-500">
            Frequenty asked questions
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
				<div className="py-5">
            <details className="mce-accordion bg-white p-4 shadow-md transition duration-300 hover:shadow-lg">
              <summary className="cursor-pointer text-orange-500">
                Accordion summary...
              </summary>
              <p className="mt-2 text-black">Accordion body...</p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQS;
