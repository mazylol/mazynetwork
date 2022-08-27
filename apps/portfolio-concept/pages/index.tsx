export function Index() {
  return (
    <div className="">
      <div className="grid grid-rows-2 grid-cols-2 px-5 pt-5 gap-2">
        <div className="bg-yellow-500 box group">
          <div className="group-hover:bg-yellow-500 innerbox"></div>
          <p className="box-title group-hover:hidden">Me</p>
          <p className="inner-title group-hover:block">A Tiny Bit About Me</p>
        </div>
        <div className="bg-blue-500 box group">
          <div className="group-hover:bg-blue-500 innerbox"></div>
          <p className="box-title group-hover:hidden">Skills</p>
          <p className="inner-title group-hover:block">Some Stuff That I Do</p>
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
