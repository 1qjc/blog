import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className=" text-red-600 flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-red-600 mr-2" />
          Go to Website
        </Link>
      </div>
      {props.renderDefault(props)}
    </div>
  );
}

export default StudioNavbar;
