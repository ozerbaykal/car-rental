import { useEffect, useState } from "react"
import Filter from "./components/filter"
import Header from "./components/header"
import Hero from "./components/hero"
import SearcBar from "./components/searchbar"
import fetchCars from "./utils/fetchCars"
import { CarType } from "./types"
import { div, section } from "framer-motion/client"
import Warning from './components/warning/index';
import Card from "./components/card"
import LoadMore from "./components/loadmore"


const App = () => {
  const [cars, setCars] = useState<CarType[] | null>(null)
  const [isError, setisError] = useState<boolean>(false)
  const[limit,setLimit]=useState<number>(5)
  useEffect(() => {
    fetchCars()
      .then((data) => setCars(data))
      .catch(() => setisError(true))
  }, [])


  return (
    <div className="min-h-screen text-white bg-[rgb(23,23,23)]">
      <Header />
      <Hero />
      <div className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p > Beğenebileceğin arabaları keşfet</p>
        </div>
        <div className="home__filters">
          <SearcBar />
          <div className="home__filter-container">
            <Filter />
            <Filter />
          </div>
        </div>
        {/* Araçları listeleme
        1) Cars null ise > henüz API' den cevap gelmemiştir

        2)isError true ise >API 'den hata gelmiştir

        3) Cars boş dizi ise > Aranılan kritere uygun veri yok 

        4)Cars dolu ise > API dan araçlar gelmiştir
        
        
        */}
        {


          !cars ? <Warning>Loading..</Warning> : isError ? <Warning> Üzgünüz bir sorun Oluştu</Warning>
            : cars.length < 1 ? <Warning>Aranılan kritere uygun araç bulunamadı</Warning> :
              cars.length > 1 && <section>

                <div className="home__cars-wrapper">{cars.map((car, i) => (
                  <Card car={car} key={i} />
                ))}</div>
                <LoadMore limit={limit} handleClick={()=>{
                  setLimit((limit+5))
                } }/>

              </section>
        }


      </div>

    </div>
  )
}

export default App