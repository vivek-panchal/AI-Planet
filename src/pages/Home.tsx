import '../App.css'
import BenefitCardComponent from '../components/BenefitCardComponent'
import EventCards from '../components/EventCards'
import Filters from '../components/Filters'
import Hero from '../components/Hero'
import Stats from '../components/Stats'


const Home = () => {
  return (
    <main className=' w-full min-h-screen flex flex-col items-center justify-start  bg-white '>
      <Hero/>
      <Stats/>
      <BenefitCardComponent/>
      <Filters/>

      <div className=' w-full  grid place-items-center  bg-[#003145] '>
        <div className=' w-full max-w-[1280px] grid place-items-center p-10 px-14  ' ><EventCards/></div>
      </div>
    </main>
  )
}

export default Home
