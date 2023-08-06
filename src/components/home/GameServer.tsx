import { Button } from "../utils/Button";

const GameServer: React.FC<{ name: string, link: string, clients: number, maxClients: number }> = ({
  name,
  link,
  clients,
  maxClients
}) => {
  return (
    <div className="flex flex-row justify-between items-center pt-3 mb-3">
        <span className="text-xl">{name}</span>
        <span className="text-xl ml-auto mr-6">{clients}/{maxClients}</span>
        <a href={link}>
            <Button className="float-right w-40 focus:outline-none transition rounded-full py-3 font-bold text-white hover:text-blue-light bg-blue-light hover:bg-white border-2 border-blue-light">Join</Button>
        </a>
    </div>
  );
};

export default GameServer;