import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Programming from '../../../public/programming.jpg';
import Nextjs from '../../../public/nextjs.jpg';
import Earn from '../../../public/earn.jpg';
import AI from '../../../public/AI.jpg';
import Meta from '../../../public/metaverse.jpg';
import CN from '../../../public/cloudComputing.jpg';
import IOT from '../../../public/iot.jpg';
import GB from '../../../public/genomics.jpg';
import Auto from '../../../public/automation.jpg';

type CourseCard = {
  src:StaticImageData;
  alt:string;
  title:string
}

// Reusable CourseCard Component
const CourseCard = ({ src, alt, title }:CourseCard) => (
  <div className="text-center text-zinc-600 text-sm sm:text-base font-bold">
    <Image
      src={src}
      alt={alt}
      className="w-full rounded hover:scale-105 hover:rounded-lg transition-transform duration-300"
    />
    <p>{title}</p>
  </div>
);

const Third = () => {
  return (
    <div className="px-4 md:px-8 lg:px-14">
      <hr className="mt-6 mb-6" />

      {/* Core Courses Section */}
      <section>
        <h2 className="text-sky-900 font-bold text-xl sm:text-2xl md:text-3xl">Core Courses Sequence</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          <CourseCard src={Programming} alt="Programming" title="Programming Language" />
          <CourseCard src={Nextjs} alt="Next.js" title="Web2 using Next.js" />
          <CourseCard src={Earn} alt="Earn as you Learn" title="Earn as you Learn" />
        </div>
      </section>

      {/* Advanced Courses Section */}
      <section className="mt-12">
        <h2 className="text-sky-900 font-bold text-xl sm:text-2xl md:text-3xl">Advanced Courses</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          <CourseCard src={AI} alt="Web 3 and Metaverse" title="Web 3 and Metaverse" />
          <CourseCard src={Meta} alt="Cloud-Native Computing" title="Cloud-Native Computing" />
          <CourseCard src={CN} alt="AI and Deep Learning" title="Artificial Intelligence (AI) and Deep Learning" />
          <CourseCard src={IOT} alt="IoT" title="Ambient Computing and IoT" />
          <CourseCard src={GB} alt="Genomics and Bioinformatics" title="Genomics and Bioinformatics" />
          <CourseCard src={Auto} alt="Network Automation" title="Network Programmability and Automation" />
        </div>
      </section>
    </div>
  );
};

export default Third;

