import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useFetchLoveLetter } from '../hooks/useFetchLoveLetter'
import bg from '../assets/letter.jpg';
import Back from '../assets/back.svg';

const AnimatedText = ({ text }: { text: string }) => {
    const [dotCount, setDotCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setDotCount((prev) => (prev + 1) % 4) // Cycles 0, 1, 2, 3
        }, 400) // 400ms between dot changes

        return () => clearInterval(interval)
    }, [])

    return <p>{text.replace('...', '.'.repeat(dotCount))}</p>
}

const IlyContent = () => {
    const [searchParams] = useSearchParams()
    const name: string | null = searchParams.get('name') || '';
    const { data, isLoading, error } = useFetchLoveLetter(name)

    if (!name) {
        console.log("No name provided.");
        return <p>I love you 🤍</p>
    }

    if (isLoading) {
        return <AnimatedText text="one second ..." />
    }

    if (error || !data) {
        console.log(error);
        return <p>something went wrong :( please try again later</p>
    }

    return (
        <>
            <p className="whitespace-pre-line">
                {data.message}
            </p>
        </>
    )
}

const IlyPage = () => {
    return (
        <>
            <div
                className="fixed w-full h-full inset-0 bg-contain bg-repeat bg-center flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${bg}`, backgroundColor: '#ffeded'}}>
                <a href="/" className="absolute top-10 left-10">
                    <img src={Back} alt="back icon" className="w-16 h-16 p-2 rounded-full border border-pink-200 backdrop-blur-sm" />
                </a>
                <div className="flex flex-col text-xl gap-5 m-15 sm:m-25 overflow-y-scroll
                p-6 sm:p-12 border sm:max-w-4xl border-pink-200 backdrop-blur-sm rounded-4xl">
                    <IlyContent />
                </div>
            </div>
        </>
    )
}

export default IlyPage;
