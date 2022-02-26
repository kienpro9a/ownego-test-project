import React from 'react'
import _ from 'lodash';

const Products = (props) => {
  return (
    <div className='products'>
      {
        _.isEmpty(props.dataStore) ? <div>khong co san pham</div> :
        props.dataStore.map((info, key) => {
          return (
            <div className='product' key={key}>
              <p className='id'>MT-0{info.id}</p>
              <p className='name'>{info.name}</p>
              <hr />
              <p className='textToppings'>Toppings:</p>
              <p className='toppings'>{info.toppings}</p>
              {
                key===0 ? <div className='trending'>Trending</div> : <></>
              }
              <div className='price'>${info.price}</div>
            </div>
          )
        }) 
      }
    </div>
  )
}

export default Products