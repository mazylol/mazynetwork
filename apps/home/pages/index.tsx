import Image from 'next/image';
import { FaArrowDown } from 'react-icons/fa';
import ScrollIntoView from 'react-scroll-into-view';

export default function Index() {
  return (
    <div className="w-full mt-5">
      <div className="text-center text-gray-200 font-semibold">
        <p className="text-7xl">Mazylol</p>
        <p className="text-3xl italic mt-2">A very dumb developer</p>
      </div>
      <div
        className="h-96 w-96 relative mx-auto mt-5"
        data-aos="zoom-in"
        data-aos-delay="250"
      >
        <Image
          src="/prof.jpg"
          alt="profile"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <ScrollIntoView selector="#aboutbox">
        <FaArrowDown className="mx-auto mt-12 h-12 w-12 text-blue-500 animate-bounce" />
      </ScrollIntoView>
      <div
        id="aboutbox"
        className="max-w-4xl mx-auto rounded-xl bg-zinc-700 mt-12 mb-6 pb-5"
      >
        <p className="text-4xl text-gray-200 text-center py-5">Hi 👋</p>
        <p className="text-center bg-zinc-600 text-gray-300 text-2xl rounded-md py-2 mx-5">
          My name is Landon and I code (too much). I am a Sophomore by day and a
          techie by Night. I enjoy remaking my website every few weeks, making
          bots, networking, and tinkering with random stuff.
        </p>
      </div>
    </div>
  );
}
