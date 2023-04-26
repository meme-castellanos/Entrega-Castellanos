import React from 'react'

const ItemListContainer = (props) => {
  return (
    <div className="container-fluid bg-info">
        <p className="text-secondary">
            {props.greeting}
        </p>
    </div>
  )
}

export default ItemListContainer