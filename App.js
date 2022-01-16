import {Route, Routes} from 'react-router-dom';
import Item from './Item'
import Character from './Charcter'



import React from 'react'

const App = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Character/>}/>
        <Route path='/item' element={<Item/>}/>
    </Routes>
    {/* <Character />
    <Item /> */}
    </>
  )
}

export default App
