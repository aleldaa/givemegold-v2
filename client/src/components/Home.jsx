import givemegold1 from '../images/givemegold-2.jpg';
import givemegold2 from '../images/givemegold-1.jpg';
import givemegold3 from '../images/givemegold-8.jpg';
import givemegold4 from '../images/givemegold-6.jpg';
import givemegold5 from '../images/givemegold-9.jpg';
import { BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

function Home(){

    const image1 = []

    const slides = [
        {
            id: 1,
            url: givemegold1,
        },
        {
            id: 2,
            url: givemegold2,
        },
        {
            id: 3,
            url: givemegold3,
        },
        {
            id: 4,
            url: givemegold4,
        },
        {
            id: 5,
            url: givemegold5,
        }
    ]
    console.log(givemegold1)
    return(
        <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative">
            <div style={{ backgroundImage: `url("${slides[0].url}")`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>

        </div>
    )
}

export default Home
