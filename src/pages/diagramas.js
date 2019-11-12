import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CategoryColumn from "../components/categoryColumn"
import Category from "../components/category"
import { Link } from "gatsby"

const DiagramasPage = () => (
    <Layout>
        <SEO title="Diagramas" />
        <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800">Catálogo da UML</h1>
            <p>Estão reunídos os resumos dos principais diagramas UML como diagramas de Classes, Pacotes ou Objetos.</p>
        </div>
        <hr className="mt-5" />
        <div className="flex flex-wrap mt-5">
            <CategoryColumn
                title="Estruturais"
                description="São diagramas de caso de uso, e descrevem a funcionalidade do sistema a partir do ponto de vista do usuário.">
                <Link to="/diagramas/classe">
                    <Category title="Diagrama de Classes" image="https://image.flaticon.com/icons/svg/773/773228.svg" />
                </Link>
                <Link to="/diagramas/pacote">
                    <Category title="Diagrama de Pacotes" image="https://image.flaticon.com/icons/svg/265/265729.svg" />
                </Link>
                <Link to="/diagramas/objeto">
                    <Category title="Diagrama de Objetos" image="https://image.flaticon.com/icons/svg/2137/2137350.svg" />
                </Link>
            </CategoryColumn>
            <CategoryColumn
                title="Comportamentais"
                description={`
                    Utilizado para visualizar, especificar, construir e documentar aspectos dinâmicos de um devido sistema. 
                    Considerando aspectos dinâmicos de um sistema como representação das suas partes que passam por alteração.
                `}>
                <Link to="/diagramas/caso_uso">
                    <Category title="Diagrama de Casos de Uso" image="https://image.flaticon.com/icons/svg/773/773340.svg" />
                </Link>
                <Link to="/diagramas/sequencia">
                    <Category title="Diagrama de Sequência" image="https://image.flaticon.com/icons/svg/1935/1935530.svg" />
                </Link>
                <Link to="/diagramas/atividade">
                    <Category title="Diagrama de Atividade" image="https://image.flaticon.com/icons/svg/333/333656.svg" />
                </Link>
            </CategoryColumn>
        </div>
    </Layout>
)

export default DiagramasPage
