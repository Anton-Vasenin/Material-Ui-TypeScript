import React, { useEffect } from 'react'

import { Navbar } from '../components/navbar'
import { useDispatch } from 'react-redux'
import { ADD_WIDTH  } from '../constant/type'

export const MainLayout = ({ children }: any) => {

  const dispatch = useDispatch()
  //  ширина нужна для слайдера  загрузки баннеров мини или фулл
  useEffect(() => {
    dispatch({ // ширина екрана при запуске
      type: ADD_WIDTH,
      width: window.innerWidth
    })
     // eslint-disable-next-line
  }, [true])

  useEffect(() => {
    window.addEventListener('resize', ()=>{
      dispatch({ // ширина екрана 
        type: ADD_WIDTH,
        width: window.innerWidth
      })
    })
     // eslint-disable-next-line
  }, [true])



  return (
    <>
      <Navbar />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh'}}>
        {children}
      </div>
    </>
  )
}