import React from 'react'
import CategoryMenu from '../components/menu/CategoryMenu'
import Order from '../components/menu/Order'
import FoodItems from '../components/menu/FoodItems'

const MenuPage = () => {
  return (
    <div>
      <CategoryMenu/>
      <FoodItems/>
      <Order/>
    </div>
  )
}

export default MenuPage
