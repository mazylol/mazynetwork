import Link from "next/link"

/* eslint-disable-next-line */
export interface NavitemProps {
  name: string,
  path: string
}

export function Navitem(props: NavitemProps) {
  return (
    <div>
      <Link href={props.path}>
        <div className="my-2 px-2 mx-2 rounded-md bg-zinc-600 hover:bg-blue-500 hover:rounded-xl transition-all duration-300">
          <p className="text-3xl text-gray-200 text-center">{props.name}</p>
        </div>
      </Link>
    </div>
  );
}

export default Navitem;
