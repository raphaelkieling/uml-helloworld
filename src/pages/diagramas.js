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
                    <Category title="Diagrama de Classes" />
                </Link>
                <Link to="/diagramas/pacote">
                    <Category title="Diagrama de Pacotes" />
                </Link>
                <Category title="Diagrama de Objetos" />
            </CategoryColumn>
            <CategoryColumn
                title="Comportamentais"
                description={`
                    Utilizado para visualizar, especificar, construir e documentar aspectos dinâmicos de um devido sistema. 
                    Considerando aspectos dinâmicos de um sistema como representação das suas partes que passam por alteração.
                `}>
                <Category title="Diagrama de Casos de Uso" />
                <Category title="Diagrama de Sequência" />
                <Category title="Diagrama de Atividade" />
            </CategoryColumn>
        </div>
    </Layout>
)

export default DiagramasPage
