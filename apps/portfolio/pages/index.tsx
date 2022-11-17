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
            not limited to programming random stuff, tinkering with hardware,
            and networking. For the most part I make Discord bots, websites, and
            stuff that makes my life easier. In my free time (which I have a lot
            of) I like to play with computer hardware and mess with my Linux
            configs. Cheers!
          </p>
        </div>
        <div className="bg-blue-500 box group">
          <div className="group-hover:bg-blue-500 inner-box"></div>
          <p className="box-title group-hover:hidden">Skills</p>
          <p className="inner-title group-hover:block">Stuff I Know</p>
          <ul className="list-style">
            <li className="py-1">
              <span className="text-blue-500 font-semibold">Programming</span>{' '}
              with{' '}
              <a href="https://kotlinlang.org/">
                <span className="text-[#7f52ff] font-medium">Kotlin</span>
              </a>
              ,{' '}
              <a href="https://learn.microsoft.com/en-us/dotnet/csharp/">
                <span className="text-[#009404] font-medium">C#</span>
              </a>
              ,{' '}
              <a href="https://en.wikipedia.org/wiki/C_(programming_language)">
                <span className="text-[#00599c] font-medium">C</span>
              </a>
              ,{' '}
              <a href="https://go.dev">
                <span className="text-[#007d9c] font-medium">Go</span>
              </a>
              ,{' '}
              <a href="https://www.rust-lang.org/">
                <span className="text-[#aa4422] font-medium">Rust</span>
              </a>
              ,{' '}
              <a href="https://www.typescriptlang.org/">
                <span className="text-[#007acc] font-medium">Typescript</span>
              </a>
              , and{' '}
              <a href="https://www.python.org/">
                <span className="text-[#3776ab] font-medium">Python</span>
              </a>
            </li>
            <li className="py-1">
              <span className="text-blue-500 font-semibold">
                Web Development
              </span>{' '}
              with{' '}
              <a href="https://reactjs.org/">
                <span className="text-[#61dafb] font-medium">React</span>
              </a>
              ,{' '}
              <a href="https://svelte.dev">
                <span className="text-[#ff3e00] font-medium">Svelte</span>
              </a>
              , and{' '}
              <a href="https://www.w3schools.com/html/">
                <span className="text-[#e44d26] font-medium">HTML</span>
              </a>
              /
              <a href="https://www.w3schools.com/css/">
                <span className="text-[#254bdd] font-medium">CSS</span>
              </a>
            </li>
            <li className="py-1">
              <span className="text-blue-500 font-semibold">Networking</span>{' '}
              with{' '}
              <a href="https://www.cloudflare.com">
                <span className="text-[#f6821f] font-medium">Cloudflare</span>
              </a>
              ,{' '}
              <a href="https://vercel.com">
                <span className="text-black font-medium">Vercel</span>
              </a>
              , and{' '}
              <a href="https://www.netlify.com/">
                <span className="text-[#3dc9c9] font-medium">Netlify</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-red-500 box group">
          <div className="group-hover:bg-red-500 inner-box"></div>
          <p className="box-title group-hover:hidden">Projects</p>
          <p className="inner-title group-hover:block">
            I Make Stuff Sometimes
          </p>
          <ul className="list-style">
            <li className="py-1">
              <span className="link-hover">
                <Link href="https://discode.mazylol.com">Discode</Link>
              </span>
              : My Discord bot that gives programming info
            </li>
            <li className="py-1">
              <span className="link-hover">
                <Link href="https://github.com/mazylol/glitter">Glitter</Link>
              </span>
              : A Git wrapper that speeds up some of my daily tasks
            </li>
            <li className="py-1">
              <span className="link-hover">
                <Link href="https://github.com/warper-development/homepage">
                  Warper
                </Link>
              </span>
              : A possible discord alternative with a focus on privacy (very alpha)
            </li>
          </ul>
        </div>
        <div className="bg-green-500 box group">
          <div className="group-hover:bg-green-500 inner-box"></div>
          <p className="box-title group-hover:hidden">Links</p>
          <p className="inner-title group-hover:block">See More Of Me</p>
          <ul className="list-style">
            <li className="py-1">
              <span className="link-hover">
                <Link href="https://github.com/mazylol">Github</Link>
              </span>
            </li>
            <li className="py-1">
              <span className="link-hover">
                <Link href="https://twitter.com/mazylol">Twitter </Link>
              </span>
            </li>
            <li className="py-1">
              <span className="link-hover">
                <Link href="mailto:mazy@cock.li">Email</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Index;
