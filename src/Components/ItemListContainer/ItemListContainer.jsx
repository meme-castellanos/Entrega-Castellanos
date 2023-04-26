import React from 'react'

const ItemListContainer = (props) => {
  return (
    <div className="container-fluid bg-info m-0">
        <p className="text-dark m-0">
            {props.greeting}
        </p>
    </div>
  )
}

export default ItemListContainer