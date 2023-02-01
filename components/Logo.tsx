import Image from "next/image";

function Logo() {
  return (
    <div>
      <Image
        className=" rounded-full object-cover"
        height={50}
        width={50}
        src="https://links.papareact.com/1m8"
        alt="logo"
      />
    </div>
  );
}

export default Logo;
