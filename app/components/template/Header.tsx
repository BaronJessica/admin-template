import useAppData from "@/app/data/hook/useAppData";
import Title from "./Title";
import ToggleButton from "./ToggleButton";

interface HeaderProps {
  title: string;
  subTitle: string;
}

export default function Header(props: HeaderProps) {
  const { theme, toggleTheme } = useAppData();
  return (
    <div className={`flex`}>
      <Title title={props.title} subTitle={props.subTitle} />
      <div className={`flex flex-grow justify-end`}>
        <ToggleButton theme={theme ?? ""} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}
