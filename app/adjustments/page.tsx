"use client";
import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Adjustments() {
  const { toggleTheme } = useAppData();
  return (
    <Layout
      title="Ajustes & Configurações"
      subTitle="Personalize o sistema aqui!"
    >
      <button onClick={toggleTheme}>alternar tema</button>
    </Layout>
  );
}
