import Layout from "./components/template/Layout";
import useAppData from "./data/hook/useAppData";

export default function Home() {
  const { toggleTheme } = useAppData();

  return (
    <Layout title="Pagina inicial" subTitle="Estamos construindo">
      <button onClick={toggleTheme}>alternar tema</button>
      <h3>content</h3>
    </Layout>
  );
}
