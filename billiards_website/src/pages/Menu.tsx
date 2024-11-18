import Navbar from "./components/Navbar"
import CardDisplay from "./components/cards/CardDisplay"
import { menuCardsList } from './datasets/infoCards'
import Footer from "./components/Footer"
const Menu = () => {
    return (
        <>
            <Navbar />
            <div className="absolute top-72 md:top-36">
                <div className="px-8">
                    <h3 className="font-fascinate text-yellow-400 text-6xl border-yellow-400 ml-4 border-b-2 mb-4">Menu</h3>
                    <img src="assets/beverages_background_picture.webp" alt="banner image for beverages section in menu page" className="object-cover w-100 opacity-50 h-[400px] mb-4" />
                    <h4 className="font-fascinate absolute text-yellow-400 top-60 left-12 md:left-24 text-2xl md:text-5xl"> Bebidas </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <CardDisplay cardList={menuCardsList} />
                    </div>
                    <div className="">
                        <img src="assets/billiards-bg-2.jpg" alt="banner image for pool table section in menu page" className="object-cover w-100 opacity-50 md:h-[400px] mb-4" />
                        <h4 className="font-fascinate relative bottom-64 text-yellow-400 left-4 lg:left-8 text-2xl md:text-5xl"> Mesas de billar </h4>
                    </div>
                    <h4 className="text-4xl text-yellow-400"> Precio: $20 por hora</h4>
                    <h6 className="text-yellow-400"> Por su informacion: </h6>
                    <ul className="text-yellow-400">
                        <li> - Los tiempos de las mesas se cobran por hora. No viene gratis con la compra de bebidas. </li>
                        <li> - Si buscan para  </li>
                    </ul>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Menu