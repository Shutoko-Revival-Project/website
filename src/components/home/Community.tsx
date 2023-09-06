import { MouseEventHandler, useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Card, CardBody, CardTitle } from '../utils/Card';
import Container from '../utils/Container';
import GameServer from './GameServer';

const STATISTICS_ENDPOINT = 'http://localhost:5051/Statistics';

const Statistic = (props: {statCount: string, statName: string}) => (
    <div id={props.statName}>
        <h1 className="text-5xl font-bold text-blue-dark-contrast">{props.statCount}</h1>
        <p>{props.statName}</p>
    </div>
);

interface ServerInfo {
    address: string
    name: string
    port: number
    clients: number
    maxClients: number
}

interface StatisticsResponse {
    numPlayers: number
    numServers: number
    servers: {[region: string]: ServerInfo[]}
}

export const Community = () => {
    const [playerCount, setPlayerCount] = useState(0);
    const [serverCount, setServerCount] = useState(0);
    const [servers, setServers] = useState<{[region: string]: ServerInfo[]}>({});
    const [selectedRegion, setSelectedRegion] = useState('');

    useEffect(() => {
        fetch(STATISTICS_ENDPOINT)
            .then((res) => res.json())
            .then((res : StatisticsResponse) => {
                setPlayerCount(res.numPlayers);
                setServerCount(res.numServers);
                setServers(res.servers);

                if (selectedRegion === '') {
                    setSelectedRegion(Object.keys(res.servers)[0]);
                }
            });
    }, [selectedRegion]);

    const onRegionClicked : MouseEventHandler<HTMLButtonElement> = (e) => {
        setSelectedRegion((e.target as HTMLButtonElement).value);
    };

    return (
        <section id="community" className="flex flex-col justify-between items-stretch text-blue-dark-contrast bg-gray-50 lg:flex-row">
            <Container className="flex flex-col py-12 max-w-6xl lg:px-24">
                <span className="mb-3 w-24 h-2 bg-blue-light rounded-full" />
                <h1>Community Insights</h1>
                <p className="max-w-prose text-gray-800">
                    Shutoko Revival Project is the most popular track mod for Assetto Corsa.
                </p>

                <div className="grid grid-cols-2 gap-y-8 my-6 sm:grid-cols-4">
                    <Statistic statCount={playerCount.toString()} statName="Drivers Online" />
                    <Statistic statCount={serverCount.toString()} statName="Servers" />
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
                            Our Discord server is the place where you can join us for chatting, progress reports and events. Having trouble? The community is here to help!
                        </CardBody>

                        <a
                            className="self-center py-2 px-3 text-xl font-semibold text-white bg-discord hover:bg-discord-dark rounded-xl transition"
                            href="https://discord.gg/shutokorevivalproject"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Join the Community
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </Card>
                </div>
            </Container>
            <div className="flex flex-col divide-y divide-gray-500 lg:w-2/5 m-12">
                <div className="pt-16 pb-8 lg:pt-0">
                    <span className="text-4xl text-blue-light">Official Servers</span>

                    <p className="mt-4 mb-6 max-w-prose">
                        Servers hosted by the Shutoko Revival Project Team, focused on Street Racing.
                    </p>

                    <div className="text-sm font-medium text-center text-gray-500 border-gray-200">
                        <ul className="flex flex-wrap -mb-px">
                            {Object.keys(servers).map((server) => {
                                let classes = 'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:border-gray-400 hover:text-gray-600';
                                if (selectedRegion === server) {
                                    classes = 'inline-block p-4 border-b-2 rounded-t-lg active text-blue-light border-blue-light';
                                }

                                return (
                                    <li className="mr-2">
                                        <button type="button" onClick={onRegionClicked} value={server} className={classes}>{server}</button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="divide-y divide-gray-400">
                        {servers[selectedRegion]?.map((server) => (
                            <GameServer
                                name={server.name}
                                clients={server.clients}
                                maxClients={server.maxClients}
                                link={`acmanager://race/online/join?query=race/online/join&ip=${server.address}&httpPort=${server.port}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
