import React from "react"
import ItemCard from "../ItemCard/ItemCard"
import ItemCount from "../ItemCount/ItemCount"
import './Body.css'

const Body = () => {
    return (
        <main className='main_body'>
            <ItemCard
                item='Notebook'
            />
            <ItemCount />
        </main>
    )
}

export default Body