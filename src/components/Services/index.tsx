import { AiOutlineMessage } from 'react-icons/ai';
import { BiAnalyse, BiMedal } from 'react-icons/bi';

interface Props {}

const index = () => {
  return (
    <div className="mt-10 py-10 ">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between px-10 py-10">
          <div>
            <h1 className="text-4xl  font-bold ">Build A Future Strategy!</h1>
            <p className="w-1/2">
              Our success in creating business solutions is due in large part to
              our talented and highly committed team.
            </p>
          </div>
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="rounded border-warmGray-50 bg-orange-500 px-8 py-3 text-lg font-semibold  hover:bg-orange-400"
            >
              View All
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="wrapper text-gray-900 antialiased">
            <div>
              <img
                src="image/servics.jpg"
                alt=" random imgee"
                className="w-full rounded-lg object-cover object-center shadow-md"
              />

              <div className="relative -mt-16 px-4  ">
                <div className="rounded-lg bg-white p-6 shadow-lg">
                  <div className="flex items-baseline"></div>
                  <AiOutlineMessage size={70} />

                  <h4 className="mt-1 truncate text-xl font-semibold uppercase leading-tight">
                    Web development
                  </h4>
                  <div className="mt-4">
                    <span className="text-md font-semibold text-teal-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur eius animi fugiat!
                    </span>
                    <span className="text-sm text-gray-600">
                      (based on 234 ratings)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper text-gray-900 antialiased">
            <div>
              <img
                src="image/service2.jpg"
                alt=" random imgee"
                className="w-full rounded-lg object-cover object-center shadow-md"
              />

              <div className="relative -mt-16 px-4  ">
                <div className="rounded-lg bg-white p-6 shadow-lg">
                  <div className="flex items-baseline"></div>
                  <BiAnalyse size={70} />

                  <h4 className="mt-1 truncate text-xl font-semibold uppercase leading-tight">
                    Data Analytics
                  </h4>
                  <div className="mt-4">
                    <span className="text-md font-semibold text-teal-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur eius animi fugiat!
                    </span>
                    <span className="text-sm text-gray-600">
                      (based on 234 ratings)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper text-gray-900 antialiased">
            <div>
              <img
                src="image/service3.jpg"
                alt=" random imgee"
                className="w-full rounded-lg object-cover object-center shadow-md"
              />

              <div className="relative -mt-16 px-4  ">
                <div className="rounded-lg bg-white p-6 shadow-lg">
                  <div className="flex items-baseline"></div>
                  <BiMedal size={70} />

                  <h4 className="mt-1 truncate text-xl font-semibold uppercase leading-tight">
                    User Interface
                  </h4>
                  <div className="mt-4">
                    <span className="text-md font-semibold text-teal-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur eius animi fugiat!
                    </span>
                    <span className="text-sm text-gray-600">
                      (based on 234 ratings)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
