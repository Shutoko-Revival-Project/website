import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faDiscord } from '@fortawesome/free-brands-svg-icons';

export type LinkProps = {
    name: string,
    path: string,
    external?: boolean,
    className?: string,
    icon?: IconDefinition,
};

export const NavLink = ({ name, path, external, className, icon }: LinkProps) => (
    <li className={`list-none transition w-full cursor-pointer hover:text-teal ${className}`}>
        {
            external ? (
                <a href={path}>
                    <p>
                        {icon && (
                            <>
                                <FontAwesomeIcon icon={icon} />
                                &nbsp;
                            </>
                        )}
                        {name}
                    </p>
                </a>
            ) : (
                <Link href={path}>
                    <p>
                        {icon && (
                            <>
                                <FontAwesomeIcon icon={icon} />
                                &nbsp;
                            </>
                        )}
                        {name}
                    </p>
                </Link>
            )
        }
    </li>
);

export const NavLinks = (props: { className?: string }) => {
    const router = useRouter();

    return (
        <span className={`flex flex-col gap-x-4 gap-y-2 md:items-center ${props.className}`}>
            {router.pathname !== '/' && <NavLink name="Home" path="/" />}
            <NavLink name="Leaderboards" external path="https://hub.shutokorevivalproject.com" />
            <NavLink name="Discord" external path="https://discord.gg/shutokorevivalproject" icon={faDiscord} />
        </span>
    );
};
