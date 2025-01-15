import { signOut } from "@/auth";
import { FiPower } from "react-icons/fi";

export default function Dashboard() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <span className="text-purple-700">
        Hai welcome to the dahboard fo futuraa
      </span>

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-sky-600 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <FiPower className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
      </form>
    </div>
  );
}
