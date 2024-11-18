export type InfoCard = {
    cardTitle: string;
    cardDescription: string;
}

export interface MenuCard extends InfoCard {
    itemPrice: number | [number, number];
}

export interface HomeCard extends InfoCard {
    imageFile?: string;
    cardLink: string;
    cardLinkText: string;
}

export const homeCardsList: HomeCard[] = [
    {
        imageFile: "assets/beverages_bg_image.webp",
        cardTitle: "Bebidas",
        cardDescription: "Visítanos para disfrutar de una buena selección de bebidas y comidas en un ambiente de billar y taberna.",
        cardLink: "/Menu",
        cardLinkText: "Ver precios"
    },
    {
        imageFile: "assets/billiards-bg-2.webp",
        cardTitle: "Juegos de billar",
        cardDescription: "Vengan a jugar billar con sus amigos para aprender sobre el juego y disfrutar de buenas experiencias.",
        cardLink: "/Menu",
        cardLinkText: "Ver precios"
    },
    {
        imageFile: "assets/gallery_card_image.webp",
        cardTitle: "Gallery",
        cardDescription: "Sumérgete en nuestro acogedor bar y sala de billar, donde te esperan buena compañía, un ambiente amigable y juegos emocionantes. ¡Descubre el ambiente vibrante y echa un vistazo a las noches llenas de diversión en nuestro establecimiento!",
        cardLink: "/Gallery",
        cardLinkText: "Ver galleria"
    },
    {
        imageFile: "assets/catering_bg_image.webp",
        cardTitle: "Catering",
        cardDescription: "Descubre nuestras opciones de catering para eventos en nuestro bar y salón de billar. Ofrecemos un ambiente único y deliciosos platillos para que tus reuniones sean inolvidables.",
        cardLink: "/Prices",
        cardLinkText: "Ver galleria"
    }
]

export const menuCardsList: MenuCard[] = [
    {
        cardTitle: "Cerveza Individual",
        cardDescription: "Una botella singular de las siguientes marcas: Heineken, Corona, Modelo.",
        itemPrice: 6,
    },
    {
        cardTitle: "Cubeta",
        cardDescription: "Una cubeta que incluye 6 cervezas con la combinación de cualquier marca que prefieras.",
        itemPrice: 33,
    },
    {
        cardTitle: "Vaso de Vino",
        cardDescription: "Un vaso de vino fino con opciones de vino tinto o blanco.",
        itemPrice: 8,
    },
    {
        cardTitle: "Botella de Vino",
        cardDescription: "Una botella de vino fino para compartir con amistades.",
        itemPrice: [30, 40],
    },
    {
        cardTitle: "Jarra de Sangría",
        cardDescription: "Una jarra de sangría fresca.",
        itemPrice: 28,
    },
    {
        cardTitle: "Jarra de Refajo",
        cardDescription: "Una jarra de refajo.",
        itemPrice: 28,
    },
    {
        cardTitle: "Michelada",
        cardDescription: "Bebida mexicana hecha con cerveza, jugo de limón, tajín y salsa Valentina.",
        itemPrice: 14,
    },
    {
        cardTitle: "Doble Michelada",
        cardDescription: "Una versión extra grande de la clásica Michelada, elaborada con cerveza, jugo de limón fresco, tajín y salsa Valentina. Perfecta para compartir o disfrutar por más tiempo.",
        itemPrice: 18,
    },
    {
        cardTitle: "Gomichela",
        cardDescription: "Michelada acompañada con gomitas dulces.",
        itemPrice: 16,
    },
    {
        cardTitle: "Heineken Zero",
        cardDescription: "Una botella de Heineken sin alcohol.",
        itemPrice: 5,
    },
    {
        cardTitle: "Red Bull",
        cardDescription: "Una bebida energética.",
        itemPrice: 7,
    },
    {
        cardTitle: "Agua en Botella",
        cardDescription: "Una botella de agua.",
        itemPrice: 5,
    },
    {
        cardTitle: "Gaseosa",
        cardDescription: "Una gaseosa en lata. Ofrecemos Coca-Cola, Brisk Iced Tea, Ginger Ale o Sunkist (según disponibilidad).",
        itemPrice: 5,
    },
    
]
export const cateringPricesList: MenuCard[] = [
    {
        cardTitle: "Primera Communion",
        cardDescription: "",
        itemPrice: 500,
    },
    {
        cardTitle: "Cumpleanos",
        cardDescription: "",
        itemPrice: 500,
    },
    {
        cardTitle: "Cumpleanos",
        cardDescription: "",
        itemPrice: 500,
    }
]