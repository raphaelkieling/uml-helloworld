import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-6xl text-center font-bold text-gray-800">Hello World</h1>
    <p className="text-2xl mt-3">
      <strong>UML Hello World</strong> tenta fazer a descoberta e estudos dos diagramas mais fácil.
    </p>

    <p className="mt-3 text-sm">
      Vamos fazer um resumão dos diagramas e sua funcionalidades com sua utilização relevante
      dentro da área do desenvolvimento de sistemas. Nós sabemos que achar bom conteúdo, principalmente
      mastigado nos dias de hoje é muito complicado.
    </p>
  </Layout>
)

export default IndexPage
