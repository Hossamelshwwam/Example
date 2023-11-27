const Navbar = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap relative z-50 w-full bg-white text-sm py-4 dark:bg-gray-800 shadow-sm container">
      <nav
        className="max-w-[85rem] w-full mx-auto lg:flex lg:items-center lg:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="inline-flex items-center gap-x-2 text-4xl font-semibold dark:text-white text-[--main-color]"
            href="#"
          >
            Brand
          </a>
          <div className="lg:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-collapse="#navbar-image-and-text-2"
              aria-controls="navbar-image-and-text-2"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1={3} x2={21} y1={6} y2={6} />
                <line x1={3} x2={21} y1={12} y2={12} />
                <line x1={3} x2={21} y1={18} y2={18} />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-image-and-text-2"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block"
        >
          <div className="flex flex-col gap-5 lg:gap-14 mt-5 lg:flex-row lg:items-center lg:justify-end lg:mt-0 lg:ps-5 ">
            <a
              to="/"
              className={`${
                location.pathname === "/" ? "active" : null
              } duration-300 font-semibold text-xl text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
            >
              Home
            </a>
            <a
              to="/about"
              className={`${
                location.pathname === "/about" ? "active" : null
              } duration-300 font-semibold text-xl text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
            >
              About
            </a>
            <a
              to="/services"
              className={`${
                location.pathname == "/services" ? "active" : null
              } duration-300 font-semibold text-xl text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
            >
              Services
            </a>
            <a
              to="/blog"
              className={`${
                location.pathname == "/blog" ? "active" : null
              } duration-300 font-semibold text-xl text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
            >
              Blog
            </a>

            <a
              type="button"
              to="/contact"
              className=" duration-300 py-3 px-4 inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent bg-[--main-color] text-white hover:bg-[--hover-color] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:text-gray-800"
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
