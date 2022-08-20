import Link from 'next/link';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <div className="bottom-0 fixed bg-zinc-700 h-14 flex flex-row w-full">
      <p className="text-gray-300 text-2xl mx-auto my-3">
        Made with {'<3'} by{' '}
        <Link href="https://github.com/mazylol">
          <span
            className="bg-gradient-to-r from-blue-500 to-blue-500
      bg-no-repeat [background-position:0_88%]
      [background-size:100%_0.2em]
      motion-safe:transition-all motion-safe:duration-200
      hover:[background-size:100%_100%]
      focus:[background-size:100%_100%] hover:text-gray-100"
          >
            Mazy
          </span>
        </Link>
      </p>
    </div>
  );
}

export default Footer;
