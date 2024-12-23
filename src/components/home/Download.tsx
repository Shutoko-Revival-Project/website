import { useState } from 'react';
import { Button } from '../utils/Button';
import { TermsModal } from '../utils/TermsModal';

export const Download = () => {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };

    const urls = {
        stable: 'https://files.shutokorevivalproject.com/r/SRP%200.9.3.7z',
        stable_old: 'https://files.shutokorevivalproject.com/r/SRP%20MAIN_0.9.1_OFFICIAL.7z',
        ptb: 'https://files.shutokorevivalproject.com/r/SRP%200.9.3%20PTB3.7z',
        cars: 'https://files.shutokorevivalproject.com/SRP_Car_Pack_3.4.1.7z',
    };

    const versions = {
        stable: '0.9.3',
        stable_old: '0.9.1',
        ptb: '0.9.3 PTB3',
        cars: '3.4',
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
                                    <span id="stable-download-text" className="text-xl text-gray-300">
                                        Stable Release
                                        {' '}
                                        <span id="version-check-stable" style={{ display: 'inline' }}>{versions.stable}</span>
                                    </span>
                                    <Button onClick={() => props.setOpenModal(urls.stable)} className="float-right w-40 font-bold bg-green-500 hover:bg-green-700">Download</Button>
                                </div>
                                <details>
                                    <summary>What happened to version 0.9.1?</summary>
                                    <div>Version 0.9.1 has been removed since support for it has ended. If you are managing a server, please update to the latest version of SRP. If you frequent a server that uses an outdated version of SRP, please inform their staff so they can update.</div>
                                </details>
                                {/* <div className="flex flex-row justify-between items-center pt-5 mb-4">
                                    <span id="ptb-download-text" className="text-xl text-gray-300">
                                        Public Testing Build
                                        {' '}
                                        <span id="version-check-ptb" style={{ display: 'inline' }}>{versions.ptb}</span>
                                    </span>
                                    <Button
                                        onClick={() => props.setOpenModal(urls.ptb)}
                                        className="float-right w-40 font-bold text-blue-light hover:text-blue-light hover:bg-white border-2 border-blue-light"
                                    >
                                        Download
                                    </Button>
                                </div> */}
                            </div>
                        </div>

                        <div className="pt-7">
                            <span className="text-4xl text-blue-100">Car Pack</span>
                            <div className="flex flex-row justify-between items-center mb-5 mt-4">
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
