interface Props {}

const index = () => {
  return (
    <div className="container mt-11 ">
      <div className="flex flex-row justify-between px-10">
        <div>
          <h1 className="text-4xl  font-bold ">Discover our Projects</h1>
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

      <div className="py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="group fixed bottom-0 left-0 right-0 top-0 z-20 hidden h-full w-full cursor-pointer bg-black bg-opacity-50">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-center text-lg font-semibold text-white">
                  Title Here
                </p>
              </div>
            </div>
            <div className="transform overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 ease-in-out hover:scale-110">
              <img
                src="image/Project.jpg"
                alt="Image 1"
                className="h-48 w-full object-cover"
              />
            </div>

            <div className="transform overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 ease-in-out hover:scale-110">
              <img
                src="image/Project.jpg"
                alt="Image 1"
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="transform overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 ease-in-out hover:scale-110">
              <img
                src="image/Project.jpg"
                alt="Image 1"
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="transform overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 ease-in-out hover:scale-110">
              <img
                src="image/Project.jpg"
                alt="Image 1"
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="transform overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 ease-in-out hover:scale-110">
              <img
                src="image/Project.jpg"
                alt="Image 2"
                className="h-48 w-full object-cover"
              />
            </div>

            <div className="transform overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 ease-in-out hover:scale-110">
              <img
                src="image/Project.jpg"
                alt="Image 3"
                className="h-48 w-full object-cover"
              />
            </div>

            <div className="transform overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 ease-in-out hover:scale-110">
              <img
                src="image/Project.jpg"
                alt="Image 4"
                className="h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
