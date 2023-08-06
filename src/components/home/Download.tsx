import { Button } from '../utils/Button';

export const Download = () => {
    const urls = {
        stable: 'https://github.com/flybywiresim/a32nx/releases/download/assets/stable/A32NX-stable.zip',
        dev: 'https://github.com/flybywiresim/a32nx/releases/download/assets/master/A32NX-master.zip',
        exp: 'https://github.com/flybywiresim/a32nx/releases/download/assets/experimental/A32NX-experimental.zip',
    };

    const getDownloadLink = (link: string) => `${link}`;

    return (
        <section id="download" className="relative bg-blue-dark-contrast">
            <div className="py-14 px-10 m-auto w-full lg:w-11/12 2xl:w-4/6">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:pr-12 lg:w-3/5">
                        <div className="w-1/2 text-left divide-y divide-gray-500 2xl:w-1/4">
                            <h2 className="text-base font-medium tracking-widest text-blue-200 uppercase">READY TO DRIVE?</h2>
                            <p className="pt-3 mt-3 text-5xl font-medium text-blue-light">
                                Download
                            </p>
                        </div>

                        <p className="my-5 max-w-prose text-xl">
                            Need help with installation? Visit the #help channel in our Discord server.
                        </p>

                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Y4Ku4wyiTl8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className="flex flex-col w-full divide-y divide-gray-500 lg:w-2/5">
                        {/* Installer */}
                        <div className="pt-16 pb-8 lg:pt-0">
                            <span className="text-4xl text-blue-100">Track</span>

                            <p className="mt-4 mb-6 max-w-prose">
                                The stable release is required for most servers.
                            </p>


                            <div className="divide-y divide-gray-700">
                                <div className="flex flex-row justify-between items-center mb-5">
                                    <span className="text-xl text-gray-300">Stable Release</span>
                                    <a href={getDownloadLink(urls.stable)}>
                                        <Button className="float-right w-40 font-bold bg-green-500 hover:bg-green-700">Download</Button>
                                    </a>
                                </div>
                                <div className="flex flex-row justify-between items-center pt-5 mb-5">
                                    <span className="text-xl text-gray-300">Public Testing Build</span>
                                    <a href={getDownloadLink(urls.dev)}>
                                        <Button className="float-right w-40 font-bold text-blue-light hover:text-blue-light hover:bg-white border-2 border-blue-light">Download</Button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Direct Download */}
                        <div className="pt-7">
                            <span className="text-2xl text-blue-100">Car Pack</span>
                            <p className="mt-4 mb-6 max-w-prose">
                                Contains all cars required to play on our official servers.
                            </p>

                            <a href="https://api.flybywiresim.com/installer">
                                <Button className="float-right w-40 font-bold bg-green-500 hover:bg-green-700">Download</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
