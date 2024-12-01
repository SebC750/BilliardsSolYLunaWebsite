import Navbar from "./components/Navbar"
import CardDisplay from "./components/cards/CardDisplay"
import { menuCardsList} from './datasets/infoCards'
import Footer from "./components/Footer"
const Menu = () => {
    return (
        <>
            <Navbar isHomepage={false}/>
            <div className="absolute top-72 md:top-36">
                <div className="px-8">
                    <h3 className="font-fascinate text-yellow-400 text-6xl border-yellow-400 ml-4 border-b-2 py-4">Menu</h3>
                    <div className="flex md:flex-row flex-col items-center py-2 gap-4">
                        <a role="button" aria-label="alcoholic beverages section anchor link" className="btn btn-outline-warning" href="#alcoholic-beverages-section"> <span className="text-2xl"> Bebidas <i className="ml-2 bi bi-arrow-down-circle text-2xl"></i></span> </a>
                        <a role="button" aria-label="pool table section anchor link" className="btn btn-outline-warning" href="#pool-tables-section"> <span className="text-2xl"> Mesas de billar <i className="ml-2 bi bi-arrow-down-circle text-2xl"></i> </span></a>
                    </div>
                    <img src="images/beverages_bg_image.webp" alt="banner image for beverages section in menu page" className="object-cover w-100 opacity-50 h-[400px] mb-4" />
                    <h4 className="font-fascinate text-yellow-400 text-2xl md:text-5xl border-yellow-400 border-b-2 py-4" id="alcoholic-beverages-section"> Bebidas </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <CardDisplay cardList={menuCardsList} />
                    </div>
                    <div className="">
                        <img src="images/billiards-bg-2.webp" loading="lazy" alt="banner image for pool table section in menu page" className="object-cover w-100 opacity-50 md:h-[400px]" />
                        <h4 className="font-fascinate  text-yellow-400 py-4 text-2xl md:text-5xl border-yellow-400 border-b-2" id="pool-tables-section"> Mesas de billar </h4>
                        <h4 className="text-4xl text-yellow-400"> Precio: $20 por hora</h4>
                        <h6 className="text-yellow-400 mb-4"> Por su informacion: Los tiempos de las mesas se cobran por hora. No viene gratis con la compra de bebidas.</h6>
                    </div>
                    <div className="py-4 text-yellow-400">
                        <h4> <i className="bi bi-cake2-fill"></i> ¿Estás cumpliendo años? </h4>
                        <h6> ¡En Billares Sol y Luna ofrecemos una cubeta gratis y una torta para celebrar tu cumpleaños! ¡Ven a disfrutar de esta ocasión especial con tus amigos!</h6>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Menu