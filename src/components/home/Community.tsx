import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { MapProps } from '@flybywiresim/react-components';
import { IconArrowRight } from '@tabler/icons';
import { Card, CardBody, CardTitle } from '../utils/Card';
import Container from '../utils/Container';
import { Button } from '../utils/Button';
import GameServer from './GameServer';

const MapDisplay = dynamic<MapProps>(
    () => import('@flybywiresim/react-components').then((mod) => mod.Map),
    { ssr: false },
);

const Statistic = (props: {statCount: string, statName: string}) => (
    <div id={props.statName}>
        <h1 className="text-5xl font-bold text-blue-dark-contrast">{props.statCount}</h1>
        <p>{props.statName}</p>
    </div>
);

export const Community = () => {
    const serversChoiceBlankState = ({ allServers: false, asianServers: false, eurServers: false, usServers: false, favoriteServers: false})
    const [ serversChoice, setServersChoice ] = useState({ allServers: false, asianServers: false, eurServers: false, usServers: true, favoriteServers: false})

    const displayServers = (e) => {
        const value = e.target.value
        if(value === 'asia') {
            setServersChoice({ ...serversChoiceBlankState, asianServers: true})
        }
        else if(value === 'europe') {
            setServersChoice({ ...serversChoiceBlankState, eurServers: true})
        }
        else if(value === 'us east') {
            setServersChoice({ ...serversChoiceBlankState, usServers: true})
        }
    }

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
                                <button onClick={displayServers} value={'europe'}>Europe</button>
                            </li>
                            <li className="mr-2">
                                <button onClick={displayServers} value={'us east'}>US East</button>
                            </li>
                            <li className="mr-2">
                                <button onClick={displayServers} value={'asia'}>Asia</button>
                            </li>
                        </ul>
                    </div>

                    <div className="divide-y divide-gray-400">
                        {
                            serversChoice.asianServers &&
                            <>
                                <GameServer serverApiUrl={`/api/getAsia1`} serverName={'Asia 1 - No Traffic'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=15.235.162.98&httpPort=8081"} />
                                <GameServer serverApiUrl={`/api/getAsia2`} serverName={'Asia 2 - Traffic'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=15.235.162.98&httpPort=8082"} />
                                <GameServer serverApiUrl={`/api/getAsia3`} serverName={'Asia 3 - Traffuc - Street Car Pack'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=15.235.162.98&httpPort=8083"} />
                            </>
                        }
                        {
                            serversChoice.eurServers &&
                            <>
                                <GameServer serverApiUrl={`/api/getEur1`} serverName={'Eur 1 - No Traffic'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=65.108.176.35&httpPort=8081"} />
                                <GameServer serverApiUrl={`/api/getEur2`} serverName={'Eur 2 - Traffic'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=65.108.176.35&httpPort=8082"} />
                                <GameServer serverApiUrl={`/api/getEur3`} serverName={'Eur 3 - Traffic - Street Car Pack'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=65.108.176.35&httpPort=8083"} />
                                <GameServer serverApiUrl={`/api/getEur4`} serverName={'Eur 4 - Traffic'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=65.108.176.35&httpPort=8085"} />
                                <GameServer serverApiUrl={`/api/getEurPTB`} serverName={'Eur PTB - Traffic'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=65.108.176.35&httpPort=8084"} />
                            </>
                        }
                        {
                            serversChoice.usServers &&
                            <>
                                <GameServer serverApiUrl={`/api/getUSEast1`} serverName={'US East 1 - No Traffic'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=5.161.43.117&httpPort=8082"} />
                                <GameServer serverApiUrl={`/api/getUSEast2`} serverName={'US East 2 - Traffic'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=5.161.43.117&httpPort=8081"} />
                                <GameServer serverApiUrl={`/api/getUSEast3`} serverName={'US East 3 - Traffic - Street Car Pack'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=5.161.43.117&httpPort=8083"} />
                                <GameServer serverApiUrl={`/api/getUSEast4`} serverName={'US East 4 - Traffic'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=5.161.43.117&httpPort=8084"} />
                                <GameServer serverApiUrl={`/api/getUSEastPTB`} serverName={'US East PTB - Traffic'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=5.161.43.117&httpPort=8085"} />
                            </>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};
