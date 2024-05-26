import './App.css'
import Nur from './Nur'
import {planet, myname} from './Nur'
import Header from './Header'

export default function App(){
  return(
    <>
    <div className='body'>
      <header>
          <h1>Planet-planet</h1>
          <Header user={myname} />
      </header>      
      <Nur/>
    </div>
    </>
  )
}