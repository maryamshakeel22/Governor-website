import React from 'react';
import Image from 'next/image';
import Governor1 from '../../../public/about1.jpg';
import Governor2 from '../../../public/about2.jpg';
import Governor3 from '../../../public/abou3.jpg';
import Slide1 from '../../../public/slide1.jpg';
import Slide2 from '../../../public/slide2.jpg';

const About = () => {
  return (
    <>
      <div className="mt-12 flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-sky-900 mb-6">
          Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs
        </h1>
        <p className="text-justify text-base sm:text-lg md:text-2xl px-4 md:px-10">
          The pace of technological change is accelerating. Big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, directly connecting to customers by eliminating the middleman, and developing vertical metaverses. This program aims to train this new breed of billion-dollar solopreneurs who will adopt ultra-lean business models, work independently, and won`&apas;`t need to hire employees or team members.
        </p>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          <Image src={Governor1} alt="1" width={370} height={300} className="rounded-lg" />
          <Image src={Governor2} alt="2" width={600} height={400} className="rounded-lg" />
          <Image src={Governor3} alt="3" width={370} height={300} className="rounded-lg" />
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
          <Image src={Slide1} alt="Slide 1" width={590} height={300} className="rounded" />
          <Image src={Slide2} alt="Slide 2" width={550} height={300} className="rounded" />
        </section>
      </div>
    </>
  );
};

export default About;
