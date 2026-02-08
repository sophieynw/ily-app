import LinkedIn from '../assets/linkedin.svg';
import GitHub from '../assets/github.svg';

const Footer = () => {
    return (
        <footer className="flex justify-center fixed bottom-10 w-full text-center">
            <span className="flex gap-7 m-3 px-8 py-4 text-md  rounded-full
            border border-pink-200 backdrop-blur-md">
                <a href="https://www.linkedin.com/in/sophie-y-wang/" target="_blank"><img src={LinkedIn} alt="linkedin icon" className="w-10 h-10" /></a>
                <a href="https://github.com/sophieynw" target="_blank"><img src={GitHub} alt="github icon" className="w-10 h-10" /></a>
            </span>
        </footer>
    )
}

export default Footer;