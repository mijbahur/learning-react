import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    userName: 'Hacin',
    age: 23
  }
  return (
    <>
      <h1 className='bg-green-700 text-white p-10'>Card Details</h1>
      <Card email='hacin@gmail.com' user={myObj}/>
    </>
  )
}

export default App
