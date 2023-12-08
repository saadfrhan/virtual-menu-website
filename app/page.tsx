import Image from "next/image";

export default function Home() {
  return (
    <>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] dark:drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] bg-gradient-to-b from-neutral-50/90 to-neutral-100/90 transition duration-300 dark:from-neutral-950/90 dark:to-neutral-800/90 lg:bg-gradient-to-br border bg-white min-[810px]:border-2 min-[810px]:rounded-3xl pl-10 py-3 pr-3 max-[810px]:p-5">
  <div className="lg:col-span-2 min-[810px]:pt-12 w-full pr-10 flex flex-col gap-10">
    <h1 className="text-8xl font-bold font-raleway">
      Delicious Shakes & Yogurts Await!
    </h1>
    <p className="text-lg mb-6 font-nunitosans font-thin">
      Bliss in Every Sip, Joy in Every Bite!
    </p>
  </div>
  <div className="lg:col-span-1 w-full max-w-[450px] mx-auto h-[450px] overflow-hidden">
    <Image
      alt="Bethany Jones"
      className="rounded-3xl object-cover w-full h-full"
      height="350"
      src="/lassi.jpg"
      width="350"
    />
  </div>
</div>


      {/* two large buttons as grid items */}
      <div className="grid grid-flow-row-dense font-semibold gap-2 max-[810px]:gap-0 grid-cols-3 max-[1000px]:grid-cols-4 ...">
  {/* Featured Items */}
  <div className="col-span-2 row-span-2 p-7 rounded-3xl max-[810px]:rounded-none max-[810px]:border shadow-lg aspect-w-4 aspect-h-4 justify-end text-left drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] dark:drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] bg-gradient-to-b from-neutral-50/90 to-neutral-100/90 transition duration-300 dark:from-neutral-950/90 dark:to-neutral-800/90 lg:bg-gradient-to-br border text-5xl font-raleway">
    Featured Items
  </div>

  {/* Menu */}
  <div className="p-7 rounded-3xl max-[810px]:rounded-none max-[810px]:border shadow-lg max-[1000px]:col-span-2 h-80 aspect-w-4 aspect-h-4 justify-end text-left drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] dark:drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] bg-gradient-to-b from-neutral-50/90 to-neutral-100/90 transition duration-300 dark:from-neutral-950/90 dark:to-neutral-800/90 lg:bg-gradient-to-br border text-5xl font-raleway">
    Menu
  </div>

  {/* Contact */}
  <div className="p-7 max-[810px]:rounded-none max-[1000px]:col-span-2 h-80 aspect-w-4 aspect-h-4 justify-end rounded-3xl text-left drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] dark:drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] bg-gradient-to-b from-neutral-50/90 to-neutral-100/90 transition duration-300 dark:from-neutral-950/90 dark:to-neutral-800/90 lg:bg-gradient-to-br border text-5xl font-raleway">
    Contact
  </div>
</div>

    </>
  );
}
