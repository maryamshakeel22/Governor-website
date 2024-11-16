import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="mt-20 bg-zinc-100">
        <div className="flex flex-wrap justify-around gap-10 px-4 py-10 lg:px-16">
          {/* Core Courses Section */}
          <div className="w-full md:w-auto">
            <h3 className="font-bold text-lg">Core Courses</h3>
            <p className="mt-5 text-base">Programming Fundamentals</p>
            <p className="mt-5 text-base">Web2 Using NextJS</p>
            <p className="mt-5 text-base">Earn as you Learn</p>
          </div>

          {/* Advanced Courses Section */}
          <div className="w-full md:w-auto">
            <h3 className="font-bold text-lg">Advanced Courses</h3>
            <p className="mt-5 text-base">Web 3 and Metaverse</p>
            <p className="mt-5 text-base">Cloud-Native Computing</p>
            <p className="mt-5 text-base">Artificial Intelligence (AI) and Deep Learning</p>
            <p className="mt-5 text-base">Ambient Computing and IoT</p>
            <p className="mt-5 text-base">Genomics and Bioinformatics</p>
            <p className="mt-5 text-base">Network Programmability and Automation</p>
          </div>

          {/* Social Links Section */}
          <div className="w-full md:w-auto">
            <h3 className="font-bold text-lg">Social Links</h3>
            <div className="mt-5 flex gap-3 text-base">
              {/* Social Media Icons */}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                className="h-5 w-5 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
              {/* Add other icons here */}
            </div>
            <section className="mt-5 text-base flex items-center gap-2 text-blue-500">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="h-6 w-6 text-main"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
              </svg>
              <p className="underline">education@governorsindh.com</p>
            </section>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
