import { useEffect, useState } from "react";
import { Button } from "../utils/Button";

interface ServerData {
  grip: string;
  clients: string;
}

const GameServer: React.FC<{ serverApiUrl: string; serverName: string; serverLink: string }> = ({
  serverApiUrl,
  serverName,
  serverLink,
}) => {
  const [server, setServer] = useState<ServerData | null>(null);
  useEffect(() => {
    fetch(`${serverApiUrl}`)
      .then((response) => response.json())
      .then((data) => {
        if (!server) {
          setServer(data.data as ServerData);
          console.log('server ' + server)
        }
      })
      .catch((error) => {
        console.log('fetch error: ', error);
      });
  }, [serverApiUrl]);

  return (
    <div className="flex flex-row justify-between items-center mb-3">
        <span className="text-xl">{serverName}</span>
        <span className="text-xl ml-auto mr-6">{server?.clients}/40</span>
        <a href={serverLink}>
            <Button className="float-right w-40 focus:outline-none transition rounded-full py-3 font-bold text-white hover:text-blue-light bg-blue-light hover:bg-white border-2 border-blue-light">Join</Button>
        </a>
    </div>
  );
};

export default GameServer;