import styles from "@/componentes/SecaoSobre/SecaoSobre.module.css"
import Image from "next/image"

export default function SecaoSobre(){
    return(
        <section className={styles.sectionall}>
        <section className={styles.section}>
            <h2 className={styles.h2}>QUEM SOMOS NÓS</h2>
            <p className={styles.p}>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
            <div className={styles.container_card}>
                <div className={styles.card}>
                    <Image
                    src="/loja.png"
                    alt="Loja"
                    width={1250}
                    height={1250}
                    className={styles.image}
                    />
                </div>
                <div className={styles.card}>
                    <h2>NOSSAS FILIAIS</h2>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>
                <div className={styles.card}>
                    <h2>ATENDIMENTO FLEXÍVEL </h2>
                    <p>Nossa equipe possui é treinada para te atender</p>
                </div>
                <div className={styles.card}>
                    <Image
                    src="/atendimento.png"
                    alt="atendimento"
                    width={1250}
                    height={1250}
                    className={styles.image}
                    />
                </div>
            </div>
        </section>
        </section>
    )
}