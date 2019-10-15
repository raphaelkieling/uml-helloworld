import { Link } from "gatsby"
import React from "react"

const Category = ({ title }) => (
    <div className="border border-solid flex justify-center flex-col items-center p-5">
        <img src="https://refactoring.guru/images/patterns/cards/factory-method-mini.png" />
        <p>{ title }</p>
    </div>
)

export default Category;