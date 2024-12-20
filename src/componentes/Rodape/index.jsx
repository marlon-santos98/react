import styles from "@/componentes/Rodape/Rodape.module.css"
import Image from "next/image"

export default function Rodape(){
    return(
        <footer className={styles.footer}>
            <section  className={styles.section}>
            <div>
                <h2 className={styles.h2}>FALE CONOSCO</h2>
                <p className={styles.p}>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
            </div>
            <div className={styles.card}>
            <div>
                <h3 className={styles.h3}>Contato</h3>
                <p className={styles.p1}>Nova Iguaçu, RJ</p>
                <p className={styles.p2}>(21) 9999-9999</p>
                <p className={styles.p3}>contato@gmail.com</p>
            </div>
            <div>
            <h3 className={styles.h3}>Nossa Redes Sociais</h3>
                <p className={styles.p4}>/Otica Vida</p>
                <p className={styles.p5}>@oticavidarj</p>
                <p className={styles.p6}>@oticavidarj</p>
            </div>
            </div>
            <div className={styles.direitos}>
                <p>@2022 Óticas Vida. - Todos os direitos reservados.</p>
            </div>
            </section>
        </footer>
    )
}