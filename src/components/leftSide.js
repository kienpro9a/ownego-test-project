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
  min-height: 100vh;
  background-color: #1d2c53;
  height:100%;
  .logo{
    color:#ffffff;
    line-height: 100px;
    text-align: center;
    font-size: 40px;
    margin-bottom: 20px;
  }
  .ant-menu{
    background-color: #1d2c53 !important;
    border: none !important;
    .ant-menu-item{
      line-height: 80px!important;
      color:#777d97!important;
      cursor: pointer;
      .ant-menu-title-content{
        font-size: 24px;
      }
    }
    .ant-menu-item-selected{
      color:#f6f5fa !important;
      background-color: #304476!important;
    }
    .ant-menu-inline{
      display: none !important;
    }
  }
  
`;