import React from "react"

const CategoryColumn = ({ title, description, children }) => (
    <div className="uml-category mr-2">
        <h4 className="text-2xl text-gray-800 font-bold">{title}</h4>
        <p>{description}</p>

        <div className="grid-uml-diagram mt-5">
            {children}
        </div>
    </div>
)

export default CategoryColumn;