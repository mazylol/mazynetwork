import Link from 'next/link';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <div className="bottom-0 fixed bg-zinc-700 h-14 flex flex-row w-full">
      <p className="text-gray-300 text-2xl mx-auto my-3">
        Made with {'<3'} by{' '}
        <Link href="https://github.com/mazylol">
          <span className="link-hover">Mazy</span>
        </Link>
      </p>
    </div>
  );
}

export default Footer;
