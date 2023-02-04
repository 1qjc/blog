import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between items-center space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className=" rounded-full"
            height={50}
            width={50}
            src="https://links.papareact.com/1m8"
            alt="logo"
          />
        </Link>
        <h1>The JC</h1>
      </div>
      <div className=" px-5 py-3 text-sm md:text-base bg-gray-900 text-yellow-400 flex items-center rounded-full text-center">
        <Link href="/"> Welcome to JC Blog</Link>
      </div>
    </header>
  );
}

export default Header;
