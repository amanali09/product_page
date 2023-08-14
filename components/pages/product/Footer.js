import Link from "next/link";

const Footer = () => (
  <div className="pt-20">
    <div className="flex justify-center gap-12 uppercase text-sm">
      <Link className="underline" href="#">
        Jonathan Simkhai
      </Link>
      <Link className="underline" href="#">
        Blazers
      </Link>
      <Link className="underline" href="#">
        Viscose
      </Link>
    </div>

    <div className="grid grid-cols-5 pt-20">
      <div className="sm:col-start-2 sm:col-span-3 col-span-5 text-center">
        <p className="uppercase font-sm font-bold pb-3">
          a note from the editor
        </p>
        <p className="text-3xl ">
          The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
          lavishness by night and by day: a blazer in a linen blend shot with
          lurex for a shimmering surface that shines like a star in the sky.{" "}
        </p>

        <p className=" font-sm pb-3 relative mt-3">
          <span className="flex items-center gap-2 justify-center">
            <span className="left-0 top-0 w-[30px] border-t-2 border-gray-500"></span>
            <span>
              By <Link href="#">MINNA SHIM</Link>, Fashion Editor
            </span>
          </span>
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
