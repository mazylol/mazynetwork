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
            Hey, my name is{' '}
            <span className="text-yellow-500 font-semibold">Landon</span> and I
            like to do a lot of stuff. Including but not limited to{' '}
            <span className="text-yellow-500 font-semibold">programming</span>{' '}
            random stuff, tinkering with{' '}
            <span className="text-yellow-500 font-semibold">hardware</span>, and{' '}
            <span className="text-yellow-500 font-semibold">networking</span>.
            For the most part I make{' '}
            <span className="text-yellow-500 font-semibold">discord bots</span>,{' '}
            <span className="text-yellow-500 font-semibold">websites</span>, and
            stuff that makes my life{' '}
            <span className="text-yellow-500 font-semibold">easier</span>. In my
            free time (which I have a lot of) I like to play with computers and
            mess with my{' '}
            <span className="text-yellow-500 font-semibold">Linux</span>{' '}
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
              <Link href="https://kotlinlang.org/">
                <span className="link-hover bg-gradient-to-r from-[#7f52ff] to-[#7f52ff] font-medium">
                  Kotlin
                </span>
              </Link>
              ,{' '}
              <Link href="https://learn.microsoft.com/en-us/dotnet/csharp/">
                <span className="link-hover bg-gradient-to-r from-[#009404] to-[#009404] font-medium">
                  C#
                </span>
              </Link>
              ,{' '}
              <Link href="https://en.wikipedia.org/wiki/C_(programming_language)">
                <span className="link-hover bg-gradient-to-r from-[#00599c] to-[#00599c] font-medium">
                  C
                </span>
              </Link>
              ,{' '}
              <Link href="https://go.dev">
                <span className="link-hover bg-gradient-to-r from-[#007d9c] to-[#007d9c] font-medium">
                  Go
                </span>
              </Link>
              ,{' '}
              <Link href="https://www.rust-lang.org/">
                <span className="link-hover bg-gradient-to-r from-[#aa4422] to-[#aa4422] font-medium">
                  Rust
                </span>
              </Link>
              ,{' '}
              <Link href="https://www.typescriptlang.org/">
                <span className="link-hover bg-gradient-to-r from-[#007acc] to-[#007acc] font-medium">
                  Typescript
                </span>
              </Link>
              , and{' '}
              <Link href="https://www.python.org/">
                <span className="link-hover bg-gradient-to-r from-[#3776ab] to-[#3776ab] font-medium">
                  Python
                </span>
              </Link>
            </li>
            <li className="py-1">
              <span className="text-blue-500 font-semibold">
                Web Development
              </span>{' '}
              with{' '}
              <Link href="https://reactjs.org/">
                <span className="link-hover bg-gradient-to-r from-[#61dafb] to-[#61dafb] font-medium">
                  React
                </span>
              </Link>
              ,{' '}
              <Link href="https://svelte.dev">
                <span className="link-hover bg-gradient-to-r from-[#ff3e00] to-[#ff3e00] font-medium">
                  Svelte
                </span>
              </Link>
              , and{' '}
              <Link href="https://www.w3schools.com/html/">
                <span className="link-hover bg-gradient-to-r from-[#e44d26] to-[#e44d26] font-medium">
                  HTML
                </span>
              </Link>
              /
              <Link href="https://www.w3schools.com/css/">
                <span className="link-hover bg-gradient-to-r from-[#254bdd] to-[#254bdd] font-medium">
                  CSS
                </span>
              </Link>
            </li>
            <li className="py-1">
              <span className="text-blue-500 font-semibold">Networking</span>{' '}
              with{' '}
              <Link href="https://www.cloudflare.com">
                <span className="link-hover bg-gradient-to-r from-[#f6821f] to-[#f6821f] font-medium">
                  Cloudflare
                </span>
              </Link>
              ,{' '}
              <Link href="https://vercel.com">
                <span className="link-hover bg-gradient-to-r from-black to-black font-medium">
                  Vercel
                </span>
              </Link>
              , and{' '}
              <Link href="https://www.netlify.com/">
                <span className="link-hover bg-gradient-to-r from-[#3dc9c9] to-[#3dc9c9] font-medium">
                  Netlify
                </span>
              </Link>
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
              <span className="link-hover bg-gradient-to-r from-red-500 to-red-500">
                <Link href="https://discode.mazylol.com">
                  <span className="font-semibold">Discode</span>
                </Link>
              </span>
              : My discord bot that gives programming info
            </li>
            <li className="py-1">
              <span className="link-hover bg-gradient-to-r from-red-500 to-red-500">
                <Link href="https://github.com/mazylol/glitter">
                  <span className="font-semibold">Glitter</span>
                </Link>
              </span>
              : A Git wrapper that speeds up some of my daily tasks
            </li>
            <li className="py-1">
              <span className="link-hover bg-gradient-to-r from-red-500 to-red-500">
                <Link href="https://github.com/warper-development/homepage">
                  <span className="font-semibold">Warper</span>
                </Link>
              </span>
              : A possible discord alternative with a focus on privacy (very
              alpha)
            </li>
          </ul>
        </div>
        <div className="bg-green-500 box group">
          <div className="group-hover:bg-green-500 inner-box"></div>
          <p className="box-title group-hover:hidden">Links</p>
          <p className="inner-title group-hover:block">See More Of Me</p>
          <ul className="list-style">
            <li className="py-1">
              <span className="link-hover bg-gradient-to-r from-green-500 to-green-500">
                <Link href="https://github.com/mazylol">
                  <span className="font-semibold">Github</span>
                </Link>
              </span>
            </li>
            <li className="py-1">
              <span className="link-hover bg-gradient-to-r from-green-500 to-green-500">
                <Link href="https://twitter.com/mazylol">
                  <span className="font-semibold">Twitter</span>
                </Link>
              </span>
            </li>
            <li className="py-1">
              <span className="link-hover bg-gradient-to-r from-green-500 to-green-500">
                <Link href="mailto:mazy@cock.li">
                  <span className="font-semibold">Email</span>
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Index;
