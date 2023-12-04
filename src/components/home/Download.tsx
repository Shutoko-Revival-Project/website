import { useState } from 'react';
import { Button } from '../utils/Button';
import { TermsModal } from '../utils/TermsModal';

export const Download = () => {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };

    const urls = {
        stable: 'https://downloads.shutokorevivalprojectjohn.workers.dev/r/stable.txt',
        dev: 'https://downloads.shutokorevivalprojectjohn.workers.dev/r/ptb.txt',
        cars: 'https://files.shutokorevivalproject.com/SRP_Car_Pack_3.2+Traffic_Cars_1.21.7z',
    };

    return (
        <section id="download" className="relative bg-blue-dark-contrast">

            <TermsModal show={props.openModal !== undefined} url={props.openModal} onClose={() => props.setOpenModal(undefined)} />

            <div className="py-14 px-10 m-auto w-full lg:w-11/12 2xl:w-4/6">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:pr-12 lg:w-3/5">
                        <div className="w-1/2 text-left divide-y divide-blue-dark 2xl:w-1/4">
                            <h2 className="text-base font-medium tracking-widest text-blue-200 uppercase">READY TO DRIVE?</h2>
                            <p className="pt-3 mt-3 text-5xl font-medium text-blue-light">
                                Download
                            </p>
                        </div>

                        <p className="my-5 max-w-prose text-xl">
                            Need help with installation? Visit the #help channel in our Discord server.
                        </p>

                        <iframe
                            className="youtube-video"
                            src="https://www.youtube-nocookie.com/embed/Y4Ku4wyiTl8"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                    <div className="flex flex-col w-full divide-y divide-blue-dark lg:w-2/5 justify-center">
                        <div className="pt-16 pb-8 lg:pt-0">
                            <span className="text-4xl text-blue-100">Track</span>

                            <p className="mt-4 mb-6 max-w-prose">
                                The stable release is required for most servers.
                            </p>

                            <div className="">
                                <div className="flex flex-row justify-between items-center mb-2">
                                    <span className="text-xl text-gray-300">Stable Release</span>
                                    <Button onClick={() => props.setOpenModal(urls.stable)} className="float-right w-40 font-bold bg-green-500 hover:bg-green-700">Download</Button>
                                </div>
                                <div className="flex flex-row justify-between items-center pt-5 mb-4">
                                    <span className="text-xl text-gray-300">Public Testing Build</span>
                                    <Button
                                        onClick={() => props.setOpenModal(urls.dev)}
                                        className="float-right w-40 font-bold text-blue-light hover:text-blue-light hover:bg-white border-2 border-blue-light"
                                    >
                                        Download
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="pt-7">
                            <span className="text-2xl text-blue-100">Car Pack</span>
                            <div className="flex flex-row justify-between items-center mb-5">
                                <span className="text-xl text-gray-300">Contains all cars required to play on our official servers.</span>
                                <a href={urls.cars} rel="nofollow">
                                    <Button className="float-right w-40 font-bold bg-green-500 hover:bg-green-700">Download</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
