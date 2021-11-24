import React from "react"
import { Card } from 'semantic-ui-react'

function ItemCard({item}) {
    return (
        <Card
            image='https://png.pngtree.com/png-vector/20190118/ourlarge/pngtree-vector-shop-icon-png-image_327584.jpg'
            header={item}
            centered='true'
            description='Produco en venta'
        />
    )
}

export default ItemCard