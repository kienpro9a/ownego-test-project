import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Products from './products';
import { Checkbox } from 'antd';
import dataStores from '../stores.json';
import _ from 'lodash';
import dataProduct from '../products.json';
import dataStoreProduct from '../storeProducts.json';


const RightSide = (props) => {
  const [activeFilter, setActiveFilter] = useState(false);
  const [filter, setFilter] = useState([]);
  const [sort, setSort] = useState('');
  const options = [
    { label: 'Milk Foam', value: 'milk foam' },
    { label: 'White Pearl', value: 'white pearl' },
    { label: 'Pearl', value: 'pearl' },
    { label: 'Milk', value: 'milk' },
    { label: 'Foam', value: 'foam' },
    { label: 'White', value: 'white' },
  ]
  useEffect(() => {
    console.log(sort)
  }, [sort])
  const dataStore = _.orderBy(dataStoreProduct.shopProducts.map(x => Object.assign(x, dataProduct.products.find(y => x.product === y.id))).filter(z => z.shop === +props.currentStore).filter(w => {
    let count = 0
    _.split(w.toppings, ',').map(topping => {
      if (_.includes(filter, topping.toLowerCase().trim())) {
        count++
      }
    })
    if (!activeFilter || _.isEmpty(filter)) return true
    if (count > 0) {
      return true
    } else {
      return false
    }
  }), sort === '' || sort === "sort" ? [] : [_.split(sort, '-')[0]],sort === '' || sort === "sort" ? [] : [_.split(sort, '-')[1]])
  // useEffect(() => {
  //   let data = dataStoreProduct.shopProducts.map(x => Object.assign(x, dataProduct.products.find(y => x.product === y.id))).filter(z => z.shop === +props.currentStore).filter(w => {
  //     let count = 0
  //       _.split(w.toppings, ',').map(topping => {
  //         if (_.includes(filter, topping.toLowerCase().trim())) {
  //           count++
  //         }
  //       })

  //     if (count > 0) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   })
  //   console.log(data)
  //   console.log(filter)
  // }, [filter]);
  const nameStore = dataStores.stores.filter(x => x.id === +props.currentStore)
  return (
    <MainContainer>
      <div className='header'>
        Store {_.head(nameStore)?.name} Menu
      </div>
      <div className='main'>
        <div className='tool'>
          <button onClick={() => setActiveFilter(!activeFilter)}>Filter</button>
          <div className='sort'>
            <div className='sortText'>Sort By</div>
            <select defaultValue="sort" onChange={e => { setSort(e.target.value) }}>
              <option disabled value="sort">Sort</option>
              <option value="name-asc">Name Asc</option>
              <option value="name-desc">Name Dsc</option>
              <option value="price-asc">Price Asc</option>
              <option value="price-desc">Price Dsc</option>
            </select>
          </div>
        </div>
        <div className='filterToppings' style={{ display: `${activeFilter ? 'block' : 'none'}` }}>
          <p>Toppings:</p>
          <div className='checkBoxs'>
            <Checkbox.Group options={options} onChange={setFilter} value={filter} />
          </div>
        </div>
        <Products currentStore={props.currentStore} dataStore={dataStore} />
      </div>
    </MainContainer>
  )
}

export default RightSide

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #f0f0f0;
  .ant-checkbox-wrapper{
    margin-right: 20px;
    font-size: 26px;
    .ant-checkbox{
      margin-right: 20px;
    }
  }
`;