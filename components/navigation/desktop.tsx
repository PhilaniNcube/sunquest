import Link from "next/link";
import { Button } from "../ui/button";

const DesktopNavigation = () => {
  return <header className="bg-teal-800 shadow-lg hidden lg:block">
    <div className="container flex justify-between text-white py-3">
      <div className="flex items-center">
        <Link href="/" className="text-lg font-medium">
          SunQuest
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/home">
          Home Solar
        </Link>
        <Link href="/business">
          Business Solar
        </Link>
        <Link href="/quote">
         <Button type="button" className="rounded-full px-6 py-2 bg-white text-teal-800 hover:text-white">
            Get a Quote
         </Button>
        </Link>
      </div>
    </div>
  </header>;
};
export default DesktopNavigation;
