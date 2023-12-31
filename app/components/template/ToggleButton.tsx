import { moonIcon, sunIcon } from "../icons";

interface ToggleButtonProps {
  theme: string;
  toggleTheme: () => void;
}
export default function ToggleButton(props: ToggleButtonProps) {
  return props.theme === "dark" ? (
    <div
      onClick={props.toggleTheme}
      className={`
      hidden
      sm:flex items-center cursor-pointer
    bg-gradient-to-r from-yellow-200 to-yellow-600 
    w-14 lg:w-24 h-8 p-1 rounded-full
    `}
    >
      <div
        className={`flex items-center justify-center
         bg-white text-yellow-500
         rounded-full w-6 h-6`}
      >
        {sunIcon(4)}
      </div>
      <div className={`hidden lg:flex items-center ml-2 text-white`}>
        <span className="text-sm">Light</span>
      </div>
    </div>
  ) : (
    <div
      onClick={props.toggleTheme}
      className={`hidden sm:flex items-center justify-end cursor-pointer
    bg-gradient-to-r from-gray-500 to-gray-900 w-14 lg:w-24 h-8 p1 rounded-full`}
    >
      <div className={`hidden lg:flex items-center mr-2 text-gray-300`}>
        <span className="text-sm">Dark</span>
      </div>{" "}
      <div
        className={`flex items-center mr-2 justify-center
  bg-black text-yellow-300 w-6 h-6 rounded-full`}
      >
        {moonIcon(4)}
      </div>
    </div>
  );
}
