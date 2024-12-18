import styles from "@/componentes/SecaoCapa/SecaoCapa.module.css"
import Image from "next/image"

export default function SecaoCapa(){
    return(
        <section className={styles.sectionCapa}>
        <Image
        src="/capa.png"
        alt="Capa"
        width={950}
        height={950}
        className={styles.image}
        />
        <div className={styles.sectionContent}>
            <p className={styles.p}>Preços baixos em</p>
            <h1 className={styles.h1}>Óculos de grau e de sol</h1>
            <p className={styles.p}>Você só encontra aqui</p>
        </div>
        </section>
    )
}