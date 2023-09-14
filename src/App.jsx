import { useEffect, useState } from 'react'
import './App.css'
import CourseCart from './components/CourseCart/CourseCart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import Toast from './components/Toast/Toast'

const App = () => {
  const [cart, setCart] = useState(() => []);
  const [isActive, SetIsActive] = useState(() => true);

  const toastInterval = () => {
    SetIsActive(() => true);
  }

  useEffect(() => {
    if (isActive) return;
    const interval = setTimeout(toastInterval, 5000);
    return () => clearTimeout(interval);
  }, [isActive])

  const handelAddToCart = course => {
    setCart((cart) => {
      const isExist = cart.find(item => item?.id === course?.id)
      const remainingCourse = cart.filter(item => item?.id !== course?.id);

      if (isExist) {
        SetIsActive(() => false)
      }

      return [...remainingCourse, course]
    });
  }
  return (
    <div className='mainContainer container mx-auto px-6 lg:px-0'>
      <Header />
      <main className='my-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <Courses handelAddToCart={handelAddToCart} />
        <CourseCart cart={cart} />
      </main>
      <Toast isActive={isActive} />
    </div>
  )
}

export default App
