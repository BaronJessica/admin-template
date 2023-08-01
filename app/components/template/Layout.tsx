import Content from "./Content";
import Header from "./Header";
import MenuBar from "./MenuBar";
import Title from "./Title";

interface LayoutProps {
  title: string;
  subTitle: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="dark flex h-screen w-screen">
      <MenuBar />
      <div className="flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-700">
        <Header title={props.title} subTitle={props.subTitle} />
        <Content>{props.children}</Content>
      </div>
    </div>
  );
}
