import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../utils/Button';
import Container from '../utils/Container';

export const A320Header = () => (
    <header>
        <video
            className="object-cover fixed -z-10 w-screen h-screen opacity-10"
            src="https://files.shutokorevivalproject.com/srp-bg.mp4"
            playsInline
            autoPlay
            muted
            loop
        />
        <Container className="relative max-w-6xl min-h-screen">
            <div className="absolute bottom-0 left-0 h-2/3 px-page">
                <Image src="/svg/srp-logo-text-gradient.svg" width="500" height="160" alt="SRP Logo" />
                <p className="pt-5 max-w-xl">
                    The definitive version of Shutoko, otherwise known as Tokyo Metropolitan Expressway, or the Wangan.
                    <br />
                    Exclusively for Assetto Corsa.
                </p>
                <div className="flex gap-4 my-5 max-w-md">
                    <Link href="#download">
                        <Button className="w-40 hover:text-blue-light bg-blue-light hover:bg-white border-2 border-blue-light">
                            Download
                        </Button>
                    </Link>

                    {/* <Link href="/a32nx">
                        <Button
                            className="w-44 text-blue-light hover:text-blue-light hover:bg-white border-2 border-blue-light"
                        >
                            Learn More
                        </Button>
                    </Link> */}
                </div>
            </div>
        </Container>
    </header>
);
