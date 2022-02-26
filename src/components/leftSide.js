import React, { useEffect, useState } from 'react'
import { Menu } from 'antd';
import dataStores from '../stores.json';
import _ from 'lodash'
import styled from "styled-components";


const LeftSide = (props) => {
  const [store, setStore] = useState(_.head(dataStores.stores).id);

  const handleClick = (e) => {
    setStore(e.key)
  }
  useEffect(() => {
    props.setCurrentStore(store)
  });
  return (
    <MenuContainer>
      <div className='logo'>Milk Tea Store</div>
      <Menu
        onClick={handleClick}
        selectedKeys={[`${store}`]}
        mode="inline"
      >
        {
          dataStores.stores.map(store => {
            return (
              <Menu.Item key={store.id}>
                Store {store.name}
              </Menu.Item>
            )
          })
        }
      </Menu>
    </MenuContainer>
  )
}

export default LeftSide;

const MenuContainer = styled.div`
  background-color: #1d2c53;
  width: 20%;
  height: 200vh;
  overflow: hidden;
  float: left;
  .logo{
    color:#ffffff;
    line-height: 100px;
    text-align: center;
    font-size: 40px;
    margin-bottom: 20px;
  }
  .ant-menu-item{
    line-height: 80px;
    font-size: 27px;
    color:#777d97;
    cursor: pointer;
  }
  .ant-menu-item-selected{
    color:#f6f5fa !important;
    background-color: #304476;
  }
`;