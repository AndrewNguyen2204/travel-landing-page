import { IoPeopleOutline, IoBriefcaseOutline, IoShieldCheckmarkOutline, IoLocationOutline } from "react-icons/io5";
import { FlightIcon, HotelIcon, TaxiIcon, TrainIcon } from "../../components/ServicesSection/ServicesElements";






export const HeroContent = {

    id: 'home',
    title: 'Book the Best Things of Nature and Creators',
    description: 'Modern thing typically also allow users to book hotel rooms, rental cars, airline tickets as well as other activities and tours.',
    buttonLabel: 'Book Now'



};

export const ServicesContent = {

    id: 'services',
    title: 'our best services',
    description: 'Bookandrew.com is a Dutch online travel agency for lodging reservation & other travel products, and a subsidiary of Booking holdings.',
    cards: [
        {
            id: 'hotel',
            icon: <HotelIcon />,
            service: 'hotel booking'

        },
        {
            id: 'flight',
            icon: <FlightIcon />,
            service: 'flight booking'

        },
        {
            id: 'taxi',
            icon: <TaxiIcon />,
            service: 'taxi booking'

        },
        {
            id: 'railway',
            icon: <TrainIcon />,
            service: 'railway booking'

        }
    ]
};


export const DestinationsContent = {

    id: 'destinations',
    title: 'destinations of your dreams',
    description: 'places of natural beauty such as beaches, tropical island resords, national parks, mountains, deserts and forests, are examples of traditional ttourist attractions.',
    btnLabel: 'view all',
    cards: [
        {
            id: 'bangkok',
            imgSrc: '../../images/bangkok.jpg',
            imgAlt: 'bangkok',
            tourName: 'bangkok, thailand',
            desc: 'temples and clean beauty',
            price: '$420/Person',
            rating: 4.5


        },
        {
            id: 'quebec',
            imgSrc: '../../images/Quebec-City.jpg',
            imgAlt: 'quebec',
            tourName: 'quebec city, canada',
            desc: 'creativeness with nature',
            price: '$525/Person',
            rating: 4.5

        },
        {
            id: 'kerry',
            imgSrc: '../../images/kerry.jpg',
            imgAlt: 'bangkok',
            tourName: 'kerry, ireland',
            desc: 'museums and galleries',
            price: '$380/Person',
            rating: 4.5

        },
        {
            id: 'lille',
            imgSrc: '../../images/lille.jpg',
            imgAlt: 'lille',
            tourName: 'lille, france',
            desc: 'cultural metropolis',
            price: '$360/Person',
            rating: 4.5

        },
        {
            id: 'bangkok',
            imgSrc: '../../images/bangkok.jpg',
            imgAlt: 'bangkok',
            tourName: 'bangkok, thailand',
            tourDesc: 'temples and clean beauty',
            price: '$420/Person',
            rating: 4.5


        },
        {
            id: 'quebec',
            imgSrc: '../../images/Quebec-City.jpg',
            imgAlt: 'bangkok',
            tourName: 'quebec city, canada',
            desc: 'creativeness with nature',
            price: '$525/Person',
            rating: 4.5

        },
        {
            id: 'kerry',
            imgSrc: '../../images/kerry.jpg',
            imgAlt: 'bangkok',
            tourName: 'kerry, ireland',
            desc: 'museums and galleries',
            price: '$380/Person',
            rating: 4.5

        },
        {
            id: 'lille',
            imgSrc: '../../images/lille.jpg',
            imgAlt: 'lille',
            tourName: 'lille, france',
            desc: 'cultural metropolis',
            price: '$360/Person',
            rating: 4.5

        }
    ]
};




export const AboutContent = {

    id: 'about',
    title: 'fill your holidays with us',
    description: 'The concept of taking  a vacation is a recent invention and has developed through the last two comorious historically, the idea of travel for recroation was a hloory that envy weathy people could afford.',
    imgSrc: '../../images/travel-girl-4.png',
    imgAlt: 'travel-girl',
    items: [
        {
            id: 'experience',
            icon: <IoBriefcaseOutline />,
            text: '12 year experience'


        },
        {
            id: 'destinations',
            icon: <IoLocationOutline />,
            text: '506 destinations'


        },
        {
            id: 'customer',
            icon: <IoPeopleOutline />,
            text: '60k happy customers'


        },
        {
            id: 'agency',
            icon: <IoShieldCheckmarkOutline />,
            text: 'Conflicted agency'


        }

    ]
}







export const FeedbackContent = {

    id: 'feedback',
    title: 'our customer says',
    description: 'Before the advert of the internet, methods by whole customers could review products and services included customer comment boxes and customer service helpirers.',
    
    cards: [
        {
            id: 'jack',
            imgSrc: '../../images/client-3.png',
            imgAlt: 'jack',
            comment: 'Only one passenger can use a ticket, multiple passengers are traveling together, the tickets are linked together by the some record locator or reservation number.',
            userName: 'Kronery Jack',
            bgColor: '#f4d179'


        },
        {
            id: 'hawkins',
            imgSrc: '../../images/client-4.png',
            imgAlt: 'hawkins',
            comment: 'A reservation for an messenery is mode in the online system, either directly by the passenger or by an agent.',
            userName: 'Anna Hawkins',
            bgColor: '#f4ad79'


        },
        {
            id: 'richards',
            imgSrc: '../../images/client-2.png',
            imgAlt: 'richards',
            comment: 'Having a reservation coos not itself enotic the passenger to travel only when the airline receive the payment or a passenger redeems points.',
            userName: 'Ronald richards',
            bgColor: '#bfe6f4'


        },
        {
            id: 'rosa',
            imgSrc: '../../images/client-1.png',
            imgAlt: 'rosa',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, exercitationem. Ullam explicabo saepe rerum cupiditate, enim perferendis aut dignissimos iure, consequuntur placeat incidunt praesentium, odit eveniet repellendus ipsa dicta. Accusantium asperiores aspernatur reprehenderit, tempore omnis mollitia, officiis quisquam veritatis rerum eum minus, placeat consequuntur quia vel earum! Tenetur, assumenda suscipit.',
            userName: 'Rosa Watson',
            bgColor: ''


        },
    ]
};





export const BookingContent = {

    id: 'booking',
    title: 'book services now',
    description: 'A social travel website is a type of travel website that will look at where the user is going and pair them with other people they want to go based on where other people have gone.',
    btnLabel: 'book now'
    
    
}