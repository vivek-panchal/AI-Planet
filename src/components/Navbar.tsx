
import { Link } from 'react-router-dom'
import logo from '../assets/icons/logo.svg'

const Navbar = () => {
  return (
    <div className=' w-full min-h-16 bg-white flex justify-start items-center px-16 '>
      <Link to='/'>
        <img src={logo} alt='logo' className='w-16 h-16' />
      </Link>
    </div>
  )
}

export default Navbar
