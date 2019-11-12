import React from "react"

const Category = ({ title, image = "https://refactoring.guru/images/patterns/cards/factory-method-mini.png" }) => (
    <div className="border border-solid flex justify-center flex-col items-center p-5 hover:bg-green-100">
        <img src={image} className="mb-2 h-24"/>
        <p className="text-center">{title}</p>
    </div>
)

export default Category;