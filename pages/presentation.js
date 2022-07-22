import { motion } from "framer-motion";
import styles from '../styles/Presentation.module.css'
import Image from "next/image";
import Link from "next/link";

function Presentation() {
    return (
        <div className={styles.container}>
            <Link href="/">
              <h1 className={styles.homelink}>
                BACK
              </h1>
            </Link>
            <motion.div
                animate="visible"
                initial="hidden"
                variants={{
                    hidden: {
                        scale: 0.8,
                        opacity: 0,
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: 0.4,
                        },
                    },
                }}
            >
                <h1 className={styles.title}>
                    APRENSETAÇÃO PMI
                </h1>

                <div className={styles.title_block}>
                    <h3 className={styles.subtitle}>GERENCIAMENTO DE PROJETOS</h3>
                    <h2 className={styles.subtitle_2}>DISCIPLINAS PMI</h2>
                </div>

                <div className={styles.content}>
                    <h1 className={styles.title_content}>GERENCIAMENTO DE PROJETO</h1>
                    <p>O conceito de projeto pode ser definido como um esforço temporário aplicado para criar um produto,
                        serviço ou resultado, o papel do gestor é justamente controlar e direcionar esse esforço dentro dos
                        recursos que são escassos e limitados.</p>
                    <h2 className={styles.subtitle}>
                        PMI, PMBOK E PMP:
                    </h2>
                    <p>PMI é o instituto responsável por documentar, atualizar e certificar as boas
                        práticas de Gerenciamento de Projetos.
                    </p>
                    <p>Essas boas práticas constituem o PMBOK (Project Management Body of
                        Knowledge), que serve como cartilha para o conhecimento básico para gerir
                        um projeto. A principal certificação emitida pelo instituto é a de PMP - Project
                        Management Professional.</p>

                    <h1 className={styles.title_content}>EQUIPES E DISCIPLINA</h1>
                    <p>`&quot;`Meu modelo de negócio é como os Beatles. Eles eram quatro
                        caras que conseguiam controlar as tendências negativas um
                        do outro, eles equilibravam um ao outro. E na minha visão as
                        grandes coisas em termos de negócios nunca são feitas por
                        uma pessoa só. São feitas por uma equipe de pessoas, cada
                        um com as suas indivialidades`&quot;` - Steve Jobs</p>
                    <p>E Jobs realmente estava correto, o papel do
                        gestor vai ser justamente identificicar, conduzir e harmonizar as individualidades
                        do time, trazendo a evolução e retorno a todos os stakeholders do projeto, se
                        baseando sempre nas disiciplinas do PMBOK</p>

                    <h1 className={styles.title_content}>STAKEHOLDERS</h1>
                    <p>Os stakeholders são considerados os públicos-alvo e de maior interesse, serão eles os
                        impactados pelo projeto, sendo ponto chave nas tomadas de decisão.</p>
                    <p>Na Foursys, o financeiro por exemplo, está
                        interessado em manter as contas sob controle,
                        faturando mais do que gastando, o comercial está
                        interessado em atingir novos clientes e aumentar as
                        vendas, etc.</p>
                    <p>O gerente de projeto está no meio desse fogo
                        cruzado, por isso suas decisões devem sempre levar
                        em consideração o retorno de investimento a todos
                        os envolvidos, dessa forma limitando e priorizando
                        recursos nos lugares certos.</p>

                    <h1 className={styles.title_content}>GERENCIAMENTO DE ESCOPO</h1>
                    <p>“O escopo de um projeto é o conjunto de conteúdo ou componentes de trabalho. Também
                        pode ser descrito como a nomeação de todas as atividades realizadas, produtos finais e os
                        recursos que serão utilizados” - Scope Management</p>
                    <p>Um projeto é definido pelo Triângulo de
                        Gerenciamento, que é constituído de escopo, tempo e
                        custo. Se o escopo aumentar, consequentemente o
                        custo e tempo aumentarão, como costumam ser
                        limitados o que tende a variar para menos é o escopo.
                    </p>
                    <p>Porém existe a quarta variável invisível: sempre que tentamos enxugar o escopo, cortando
                        tempo e custo, automaticamente a qualidade da entrega vai reduzir de forma drástica.</p>
                </div>
            </motion.div>
        </div>
    )
}

export default Presentation

