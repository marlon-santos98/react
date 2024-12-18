import styles from "@/componentes/SecaoProdutos/SecaoProdutos.module.css"
import Image from "next/image"

export default function SecaoProdutos(){
    return(
        <section className={styles.section}>
            <h2 className={styles.h2}>NOSSOS PRODUTOS</h2>
            <p className={styles.p}>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos  masculinos, feminino e infantil</p>
            <p className={styles.p}>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            <div className={styles.container_card}>
                <div className={styles.card}>
                    <h3>Óculos de grau</h3>
                    <Image
                        src="/oculos01.png"
                        alt="Oculos de grau"
                        width={100}
                        height={50}
                        className={styles.image}
                    />
                    <p>R$ 500,00</p>
                </div>
                <div className={styles.card}>
                    <h3>Óculos de grau</h3>
                    <Image
                        src="/oculos02.png"
                        alt="Oculos Transition"
                        width={100}
                        height={50}
                        className={styles.image}

                    />
                    <p>R$ 700,00</p>
                </div>
                <div className={styles.card}>
                    <h3>Óculos de grau</h3>
                    <Image
                        src="/oculos03.png"
                        alt="Oculos de sol"
                        width={100}
                        height={50}
                        className={styles.image}

                    />
                    <p>R$ 400,00</p>
                </div>
                <div className={styles.card}>
                    <h3>Óculos de grau</h3>
                    <Image
                        src="/oculos04.png"
                        alt="Oculos Infantil"
                        width={100}
                        height={50}
                        className={styles.image}
                    />
                    <p>R$ 900,00</p>
                </div>
            </div>
            <div className={styles.lista}>
                <p>Todos os nossos produtos incluem: </p>
                <ul  className={styles.ul}> 
                    <li>Garantia de ano</li>
                    <li>Manutenção Preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    )
}