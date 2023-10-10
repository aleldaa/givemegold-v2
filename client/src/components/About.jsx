import givemegold1 from '../images/givemegold-2.jpg';
import givemegold2 from '../images/givemegold-4.jpg';
import givemegold3 from '../images/givemegold-8.jpg';
import givemegold4 from '../images/givemegold-6.jpg';
import givemegold5 from '../images/givemegold-9.jpg';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { useState } from 'react';
import { BsDot } from 'react-icons/bs'



function About() {

    const slides = [
        {
            id: 1,
            url: givemegold1,
        },
        {
            id: 2,
            url: givemegold3,
        },
        {
            id: 3,
            url: givemegold4,
        },
        {
            id: 4,
            url: givemegold2,
        },
        {
            id: 5,
            url: givemegold5,
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div>
            <div className="max-w-[700px] h-[530px] w-full m-auto py-16 px-4 relative group mt-[-30px]">
                <div style={{ backgroundImage: `url("${slides[currentIndex].url}")` }} className="w-full h-full rounded-2xl bg-cover duration-500"></div>
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsFillArrowLeftCircleFill onClick={prevSlide} size={30} />
                </div>
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsFillArrowRightCircleFill onClick={nextSlide} size={30} />
                </div>
                <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                            <BsDot />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
