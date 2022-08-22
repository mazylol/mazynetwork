import Link from 'next/link';

/* eslint-disable-next-line */
export interface NavitemProps {
  name: string;
  path: string;
}

export function Navitem(props: NavitemProps) {
  return (
    <div>
      <Link href={props.path}>
        <div className="mx-2 my-2">
          <p className="text-3xl text-gray-300 link-hover">{props.name}</p>
        </div>
      </Link>
    </div>
  );
}

export default Navitem;
