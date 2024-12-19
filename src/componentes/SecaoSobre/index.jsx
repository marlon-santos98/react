import styles from "@/componentes/SecaoSobre/SecaoSobre.module.css"
import Image from "next/image"

export default function SecaoSobre(){
    return(
        <section>
            <h2>QUEM SOMOS NÓS</h2>
            <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
            <div>
                <div>
                    <Image
                    src="/loja.png"
                    alt="Loja"
                    width={50}
                    height={50}
                    />
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}