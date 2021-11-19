import './Home.css'
import { Layout } from '../../components'
// import { NavLink } from 'react-router-dom'
// import ControlledCarousel from '../../components/Carousel/Carousel'

const Home = (props) => {
  return (
    <Layout user={props.user} setUser={props.setUser}>
      <div className="home-background-image">
        {/* <ControlledCarousel /> */}
        <div className='welcome-browse'>
          <h1>WELCOME TO THE FUTURE</h1>
          {/* <NavLink to="/cars">Browse Inventory</NavLink> */}
        </div>
        <div className="home-logo">
          <img src={'/images/logo.png'} alt="Logo" className="home-logo" />
          <p>Your one-stop shop for Electric Supercars</p>
        </div>
      </div>
    </Layout>
  )
}

export default Home
