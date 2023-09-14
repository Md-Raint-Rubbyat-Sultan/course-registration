import './App.css'
import CourseCart from './components/CourseCart/CourseCart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

const App = () => {

  return (
    <div className='mainContainer container mx-auto px-6 lg:px-0'>
      <Header />
      <main className='my-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <Courses />
        <CourseCart />
      </main>
    </div>
  )
}

export default App
