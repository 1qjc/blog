import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

function StudioNavbar(props: any) {
  return (
    <div>
      <div>
        <Link href="/" className=" text-red-600">
          Go to Website
        </Link>
      </div>
      {props.renderDefault(props)}
    </div>
  );
}

export default StudioNavbar;
