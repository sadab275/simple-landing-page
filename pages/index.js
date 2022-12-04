
import Carousel from './components/carousel/Carousel'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'


export default function Home() {
  return (
    <div className='w-5/6 mx-auto'>
      <Header></Header>
      <Carousel></Carousel>
      <Footer></Footer>
    </div>
  )
}
