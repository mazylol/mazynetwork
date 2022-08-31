import Link from 'next/link';

export function Index() {
  return (
    <div className="">
      <div className="grid grid-rows-2 grid-cols-2 px-5 pt-5 gap-2">
        <div className="bg-yellow-500 box group">
          <div className="group-hover:bg-yellow-500 inner-box"></div>
          <p className="box-title group-hover:hidden">Me</p>
          <p className="inner-title group-hover:block">A Tiny Bit About Me</p>
          <p className="inner-text group-hover:block">
            Hey, {"I'm"} Landon and I like to do a lot of stuff. Including but
            not limited to: Programming, Tinkering, and Networking. For the most
            part I make Discord Bots and Websites. Although there is a GraphQL
            API in the works. Have a good one!
          </p>
        </div>
        <div className="bg-blue-500 box group">
          <div className="group-hover:bg-blue-500 inner-box"></div>
          <p className="box-title group-hover:hidden">Skills</p>
          <p className="inner-title group-hover:block">
            Some Stuff That I Can Do {'(badly)'}
          </p>
          <ul className="list-style mx-auto text-center">
            <li className="py-1">Web Dev (TS, HTML, CSS)</li>
            <li className="py-1">
              Programming with Lua, Python, C, Rust, Kotlin, and Bash
            </li>
            <li className="py-1">Networking {'(Cloudflare)'}</li>
            <li className="py-1">Computer Building</li>
          </ul>
        </div>
        <div className="bg-red-500 box group">
          <div className="group-hover:bg-red-500 inner-box"></div>
          <p className="box-title group-hover:hidden">Projects</p>
          <p className="inner-title group-hover:block">I Make Stuff</p>
          <ul className="list-style mx-auto text-center">
            <li className="py-1">
              <span className="link-hover">
                <Link href="https://discode.mazylol.com">Discode</Link>
              </span>
              : My Discord bot that gives programming info
            </li>
          </ul>
        </div>
        <div className="bg-green-500 box group">
          <div className="group-hover:bg-green-500 inner-box"></div>
          <p className="box-title group-hover:hidden">Links</p>
          <p className="inner-title group-hover:block">See More About Me</p>
          <ul className="list-style ml-16">
            <li className="py-1">
              <span className="link-hover">
                <Link href="https://github.com/mazylol">Github</Link>
              </span>
            </li>
            <li className="py-1">
              <span className="link-hover">
                <Link href="https://twitter.com/mazylol">Twitter</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Index;
