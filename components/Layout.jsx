import Connect from './Connect'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className='p-10 rounded-2xl h-screen'>
      <div className="border-2 border-white-2 border-solid p-10 rounded-2xl min-h-full relative">
      <Navbar/> 
      <Connect/>
      </div>
    </div>
  )
}

export default Layout