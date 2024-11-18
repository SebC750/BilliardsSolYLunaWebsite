import { MenuCard, HomeCard } from "../../datasets/infoCards"
const Card = (props: { cardProps: HomeCard | MenuCard }) => {
    return (
        <>
            <div className="rounded-md flex flex-col flex-grow bg-transparent shadow-xl border-b-4 border-yellow-400 w-full mb-4 md:pb-0">
                {"imageFile" in props.cardProps ? (
                    <figure>
                        <img src={props.cardProps.imageFile} loading="lazy" className="transition-all h-72 object-cover w-full rounded-t-md cursor-pointer hover:p-2" />
                    </figure>
                ) : null}

                <div className="card-body h-auto px-2 pb-4">
                    <h4 className="text-yellow-400 font-fascinate border-b-2 border-yellow-400 pb-4"> {props.cardProps.cardTitle}</h4>
                    <p className="text-yellow-400"> {props.cardProps.cardDescription} </p>

                    {"cardLink" in props.cardProps && props.cardProps.cardLinkText ? (
                        <div className="card-actions justify-end">
                            <a href={props.cardProps.cardLink} role="button" aria-label={`View ${props.cardProps.cardTitle} link button`} className="btn btn-outline-warning w-full text-yellow-400">
                                <span className="text-xl">
                                    {props.cardProps.cardLinkText}
                                </span> </a>
                        </div>
                    ) : "itemPrice" in props.cardProps ? (
                        <p className="text-xl text-yellow-400"> Precio:{Array.isArray(props.cardProps.itemPrice) ? (<span> ${props.cardProps.itemPrice[0]} - {props.cardProps.itemPrice[1]}</span>): <span> ${props.cardProps.itemPrice}</span>} </p>
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default Card