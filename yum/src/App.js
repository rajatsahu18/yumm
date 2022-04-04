import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {AnimatePresence} from "framer-motion"
import { getAllFoodItems } from './utils/firebaseFunctions'
import { useStateValue } from './Redux/StateProvider';
import { actionType } from './Redux/reducer';
import { Header } from './Components/Header';
import { MainContainer } from './Components/MainContainer';
import { CreateContainer } from './Components/CreateContainer';

const App = () => {

  const [{foodItems}, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then(data => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      })
    })
  }

  React.useEffect(() => {
    fetchData()
  }, [])
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header/>
        <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
            <Routes>
                <Route path="/*" element={<MainContainer/>} />
                <Route path='/createItem' element={<CreateContainer />} />
            </Routes>
        </main>
      </div>
    </AnimatePresence>
  )
}

export default App