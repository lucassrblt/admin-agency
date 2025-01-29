import clsx from "clsx";
import { useFormStore } from "@/store/useFormStore";

export function FormNav() {
  const { currentTab, tab } = useFormStore();
  return (
    <nav className="w-1/5 h-full">
      <ul className="flex flex-col gap-2 min-w-full">
        {tab.map((item) => {
          return (
            <li
              key={item}
              className={clsx(
                "w-full px-2 py-2.5 hover:underline text-gray-900 text-sm cursor-pointer font-medium rounded-md",
                { "bg-[#f4f5f5]": currentTab === item }
              )}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
