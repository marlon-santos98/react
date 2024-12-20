import Head from "next/head";
import Topo from "@/componentes/Topo";
import SecaoCapa from "@/componentes/SecaoCapa";
import SecaoProdutos from "@/componentes/SecaoProdutos";
import SecaoSobre from "@/componentes/SecaoSobre";
import Rodape from "@/componentes/Rodape";

export default function Home() {
  return (
    <>
      <Head>
        <title>Óticas Vida</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topo/>
      <SecaoCapa/>
      <SecaoProdutos/>
      <SecaoSobre/>
      <Rodape/>
    </>
  );
}
