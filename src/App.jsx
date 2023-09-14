import { useState } from 'react'
import './App.css'
import CourseCart from './components/CourseCart/CourseCart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import Toast from './components/Toast/Toast'

const App = () => {
  const [cart, setCart] = useState(() => []);

  const handelAddToCart = course => {
    setCart((cart) => {
      const remainingCourse = cart.filter(item => item?.id !== course?.id);
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
      <Toast />
    </div>
  )
}

export default App
