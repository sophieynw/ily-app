import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Field, Input} from '@headlessui/react'
import bg from '../assets/vday-cherry.jpg';

const Home = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            navigate(`/ily?name=${name}`);
        }
    }

    return (
        <>
            <div
                className="fixed inset-0 w-full h-full bg-contain bg-no-repeat bg-center flex flex-col gap-10 justify-center items-center"
                style={{ backgroundImage: `url(${bg})`, backgroundColor: '#ffeff2' }}

            >
                <h1 className="flex items-center text-3xl sm:text-5xl px-4 text-center font-bold">
                    Happy Valentine's Day,
                </h1>
                <Field className="flex flex-col items-center">
                    <Input
                        className="rounded-3xl border border-pink-200 px-5 py-3 backdrop-blur-md"
                        name="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={handleEnter}
                    />
                </Field>
                <h1 className="text-3xl sm:text-5xl px-4 text-center font-bold">
                    🖤
                </h1>
            </div>
        </>
    );
};

export default Home;
