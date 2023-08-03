import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { MapProps } from '@flybywiresim/react-components';
import { IconArrowRight } from '@tabler/icons';
import { Card, CardBody, CardTitle } from '../utils/Card';
import Container from '../utils/Container';
import { Button } from '../utils/Button';

const MapDisplay = dynamic<MapProps>(
    () => import('@flybywiresim/react-components').then((mod) => mod.Map),
    { ssr: false },
);

const LIVE_FLIGHTS_ENDPOINT = 'https://api.flybywiresim.com/txcxn/_count';
const COMMIT_COUNT_ENDPOINT = 'https://api.github.com/repos/flybywiresim/a32nx/commits?per_page=1';
const CONTRIBUTOR_COUNT_ENDPOINT = 'https://api.github.com/repos/flybywiresim/a32nx/contributors?per_page=1';

const Statistic = (props: {statCount: string, statName: string}) => (
    <div id={props.statName}>
        <h1 className="text-5xl font-bold text-blue-dark-contrast">{props.statCount}</h1>
        <p>{props.statName}</p>
    </div>
);

export const Community = () => {
    const [liveFlights, setLiveFlights] = useState('0');
    const [commitCount, setCommitCount] = useState('0');
    const [contributorCount, setContributorCount] = useState('0');
    const [mapRefreshInterval, setMapRefreshInterval] = useState(5_000);
    useEffect(() => {
        fetch(LIVE_FLIGHTS_ENDPOINT).then((res) => res.text().then((flights) => setLiveFlights(flights)));

        fetch(COMMIT_COUNT_ENDPOINT).then((res) => {
            const commitCount = res.headers.get('Link')?.match(/&page=(\d+)>; rel="last"/)?.[1] ?? '0';

            setCommitCount(commitCount);
        });

        fetch(CONTRIBUTOR_COUNT_ENDPOINT).then((res) => {
            const commitCount = res.headers.get('Link')?.match(/&page=(\d+)>; rel="last"/)?.[1] ?? '0';

            setContributorCount(commitCount);
        });

        const interval = setInterval(() => {
            setMapRefreshInterval(document.visibilityState === 'visible' ? 10_000 : 100_000);
        }, 100);

        return () => clearInterval(interval);
    }, []);
    return (
        <section id="community" className="flex flex-col justify-between items-center text-blue-dark-contrast bg-gray-50 lg:flex-row">
            <Container className="flex flex-col py-12 max-w-6xl lg:px-24">
                <span className="mb-3 w-24 h-2 bg-blue-light rounded-full" />
                <h1>Community Insights</h1>
                <p className="max-w-prose text-gray-800">
                    Shutoko Revival Project is the most popular track mod for Assetto Corsa.
                </p>

                <div className="grid grid-cols-2 gap-y-8 my-6 sm:grid-cols-4">
                    <Statistic statCount="1,234" statName="Drivers Online" />
                    <Statistic statCount="543" statName="Servers" />
                    <Statistic statCount="700k+" statName="Discord Members" />
                </div>

                <div className="my-8">
                    <Card bgColour="gray-100" className="border-discord shadow-lg">
                        <CardTitle>
                            <span className="flex justify-center items-center p-2 mr-2 bg-discord rounded-xl">
                                <Image src="/svg/discordLogo.svg" width={23} height={23} />
                            </span>
                            Discord
                        </CardTitle>
                        <CardBody>
                            Our Discord server is where we plan the entirety of our project and provide our support.
                            Join us to chat with other members of the community, get started with contributing, or ask us a question!
                        </CardBody>

                        <a
                            className="self-center py-2 px-3 text-xl font-semibold text-white bg-discord hover:bg-discord-dark rounded-xl transition"
                            href="https://discord.gg/shutokorevivalproject"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Join the Community
                            <IconArrowRight className="inline-flex mb-1 ml-1" size={20} stroke={2} />
                        </a>
                    </Card>
                </div>
            </Container>
            <div className="flex flex-col w-full divide-y divide-gray-500 lg:w-2/5 m-auto">
                        {/* Installer */}
                        <div className="pt-16 pb-8 lg:pt-0">
                            <span className="text-4xl text-blue-light">Official Servers</span>

                            <p className="mt-4 mb-6 max-w-prose">
                                Servers hosted by the Shutoko Revival Project Team, focused on Street Racing.
                            </p>

                            <div className="text-sm font-medium text-center text-gray-500 border-gray-200">
                                <ul className="flex flex-wrap -mb-px">
                                    <li className="mr-2">
                                        <a href="#" className="inline-block p-4 border-b-2 rounded-t-lg active text-blue-light border-blue-light" aria-current="page">Europe</a>
                                    </li>
                                    <li className="mr-2">
                                        <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:border-gray-400 hover:text-gray-600">US East</a>
                                    </li>
                                    <li className="mr-2">
                                        <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:border-gray-400 hover:text-gray-600">Asia</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="divide-y divide-gray-400">
                                <div className="flex flex-row justify-between items-center mb-3">
                                    <span className="text-xl">EU 1 - No Traffic</span>
                                    <span className="text-xl ml-auto mr-6">23/40</span>
                                    <a href="#">
                                        <Button className="float-right w-40 focus:outline-none transition rounded-full py-3 font-bold text-white hover:text-blue-light bg-blue-light hover:bg-white border-2 border-blue-light">Join</Button>
                                    </a>
                                </div>
                                <div className="flex flex-row justify-between items-center pt-3 mb-3">
                                    <span className="text-xl">EU 2 - Traffic</span>
                                    <span className="text-xl ml-auto mr-6">23/40</span>
                                    <a href="#">
                                        <Button className="float-right w-40 focus:outline-none transition rounded-full py-3 font-bold text-white hover:text-blue-light bg-blue-light hover:bg-white border-2 border-blue-light">Join</Button>
                                    </a>
                                </div>
                                <div className="flex flex-row justify-between items-center pt-3 mb-3">
                                    <span className="text-xl">EU 3 - Traffic - Street Car Pack</span>
                                    <span className="text-xl ml-auto mr-6">23/40</span>
                                    <a href="#">
                                        <Button className="float-right w-40 focus:outline-none transition rounded-full py-3 font-bold text-white hover:text-blue-light bg-blue-light hover:bg-white border-2 border-blue-light">Join</Button>
                                    </a>
                                </div>
                                <div className="flex flex-row justify-between items-center pt-3 mb-3">
                                    <span className="text-xl">EU 4 - Traffic</span>
                                    <span className="text-xl ml-auto mr-6">23/40</span>
                                    <a href="#">
                                        <Button className="float-right w-40 focus:outline-none transition rounded-full py-3 font-bold text-white hover:text-blue-light bg-blue-light hover:bg-white border-2 border-blue-light">Join</Button>
                                    </a>
                                </div>
                                <div className="flex flex-row justify-between items-center pt-3 mb-3">
                                    <span className="text-xl">EU PTB - Traffic</span>
                                    <span className="text-xl ml-auto mr-6">23/40</span>
                                    <a href="#">
                                        <Button className="float-right w-40 focus:outline-none transition rounded-full py-3 font-bold text-white hover:text-blue-light bg-blue-light hover:bg-white border-2 border-blue-light">Join</Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
        </section>
    );
};
