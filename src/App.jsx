import { useEffect, useState } from 'react'
import './App.css'
import CourseCart from './components/CourseCart/CourseCart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import Toast from './components/Toast/Toast'

const App = () => {
  // cart state
  const [cart, setCart] = useState(() => []);

  const [creditTime, setCreditTime] = useState(() => 0);

  const [coursePriceTotal, setCoursePriceTotal] = useState(() => 0);

  // toast states
  const [isActive, setIsActive] = useState(() => true);

  const [toastText, setToastText] = useState(() => "");

  // toast setup
  const setToast = text => {
    setToastText(() => text)
  }

  const toastInterval = () => {
    setIsActive(() => true);
  }

  useEffect(() => {
    if (isActive) return;
    const interval = setTimeout(toastInterval, 5000);
    return () => clearTimeout(interval);
  }, [isActive])

  // common warning setup
  const warning = (text, isFalse) => {
    setIsActive(() => isFalse)
    setToast(text);
  }

  // handel cart
  const handelAddToCart = (course, time, price) => {
    // finding the course already exist or not
    const isExist = cart.find(item => item?.id === course?.id);

    // setting credit time
    setCreditTime((prev) => {
      // calculation new time
      const newTime = prev + time;

      if (newTime < 20) {
        // if the credit is less than 20 and the course do not exist into the cart
        if (!isExist) {
          // setting course to cart
          setCart((cart) => {
            const remainingCourse = cart.filter(item => item?.id !== course?.id);

            return [...remainingCourse, course]
          });
          // setting price
          setCoursePriceTotal((prev) => prev + price);
          // setting total credits
          return newTime;
        } else {// if the credit is not more than 20 but the course is already exist into the cart
          warning(`${course?.title} course is already added to cart!`, false);
          // setting previous credit
          return prev;
        }
      } else {
        // if credit is more than 20 and the course do not exist on the cart
        if (!isExist) {
          warning("Credit limit over", false);
          return prev;
        } else { // if the credit is more then 20 and the course is already exist into the cart
          warning(`${course?.title} course is already added to cart!`, false);
          return prev;
        }
      }
    })
  }
  return (
    <div className='mainContainer container mx-auto px-6 lg:px-0'>
      <Header />
      <main className='my-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <Courses handelAddToCart={handelAddToCart} />
        <CourseCart cart={cart} creditTime={creditTime} coursePriceTotal={coursePriceTotal} />
      </main>
      <Toast isActive={isActive} toastText={toastText} />
    </div>
  )
}

export default App
