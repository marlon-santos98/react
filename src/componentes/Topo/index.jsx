import styles from "@/componentes/Topo/Topo.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Topo(){
    return(
        <header className={styles.header}>
            <div>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={160}
                    height={40}
                />
            </div>
            <div className={styles.link}>
                <Link href="#produtos">PRODUTOS</Link>
                <Link href="#sobre">SOBRE</Link>
                <Link href="#contato">CONTATO</Link>
            </div>
        </header>
    )
}