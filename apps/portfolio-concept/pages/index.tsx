export function Index() {
  return (
    <div className="">
      <div className="grid grid-rows-2 grid-cols-2 px-5 pt-5 gap-2">
        <div className="bg-yellow-500 box group">
          <div className="group-hover:bg-yellow-500 innerbox"></div>
          <p className="box-title group-hover:hidden">Me</p>
          <p className="inner-title group-hover:block">A Tiny Bit About Me</p>
          <p className="inner-text group-hover:block">Hey, {"I'm"} Landon and I like to do a lot of stuff. Including but not limited to: Programming, Tinkering, and Networking. For the most part I make Discord Bots and Websites. Although there is a GraphQL API in the works. Have a good one!</p>
        </div>
        <div className="bg-blue-500 box group">
          <div className="group-hover:bg-blue-500 innerbox"></div>
          <p className="box-title group-hover:hidden">Skills</p>
          <p className="inner-title group-hover:block">Some Stuff That I Can Do {"(badly)"}</p>
          <ul className="hidden group-hover:block mx-auto text-center pt-[1vh] text-neutral-600 font-medium text-xl">
            <li>* Web Dev (TS, HTML, CSS)</li>
            <li>* Coding with Rust, C, Python, and Kotlin</li>
          </ul>
        </div>
        <div className="bg-red-500 box group">
          <div className="group-hover:bg-red-500 innerbox"></div>
          <p className="box-title group-hover:hidden">Projects</p>
          <p className="inner-title group-hover:block">I Make Stuff</p>
        </div>
        <div className="bg-green-500 box group">
          <div className="group-hover:bg-green-500 innerbox"></div>
          <p className="box-title group-hover:hidden">Links</p>
          <p className="inner-title group-hover:block">See More About Me</p>
        </div>
      </div>
    </div>
  );
}

export default Index;
