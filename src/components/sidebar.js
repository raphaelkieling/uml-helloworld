import { Link } from "gatsby"
import React from "react"

const Sidebar = () => (
    <div className="sidebar bg-green-500 relative sm:fixed h-full border-r-4 border-solid border-green-300">
        <div className="flex justify-center pt-5 mb-4">
            <img src={require('../images/logo.png')} alt="" />
        </div>

        <Link to="/" activeClassName="bg-red-600">
            <div className="text-white p-2 bg-green-600 hover:bg-green-800 text-lg cursor-pointer">
                Home
            </div>
        </Link>
        <Link to="/diagramas">
            <div className="text-white p-2 bg-green-600 hover:bg-green-800 text-lg cursor-pointer">
                Catálogo
            </div>
        </Link>
    </div>
)

export default Sidebar
