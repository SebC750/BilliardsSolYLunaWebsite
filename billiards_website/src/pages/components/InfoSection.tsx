import CardDisplay from './cards/CardDisplay'
import { homeCardsList } from '../datasets/infoCards'
const InfoSection = () => {
    return (
        <div className="h-auto bg-black px-4 py-24" id="info-section">
            <h3 className="font-fascinate text-4xl text-yellow-400 border-b-2 border-yellow-400 pb-4"> Lo que ofrecemos </h3>
            <div className="grid grid-cols-1 lg:px-12 lg:grid-cols-2 gap-4">
                <CardDisplay cardList={homeCardsList} />
            </div>

        </div>
    )
}

export default InfoSection