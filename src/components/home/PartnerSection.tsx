import { PropsWithChildren } from 'react';
import Image from 'next/image';
import Container from '../utils/Container';

type ImageProps = {
    className?: string,
    src: string
};

type PartnerProps = {
    className?: string,
    name: string,
    path: string
};

export const PartnerImage = (props: ImageProps) => (
    <Image src={props.src} alt="Partner" width={100} height={150} objectFit="contain" />
);

export const Partner = (props: PropsWithChildren<PartnerProps>) => (
    <span id={props.name} className={`flex justify-center items-center ${props.className}`}>
        <a href={props.path} target="_blank" rel="noreferrer">
            {props.children}
        </a>
    </span>
);

export const PartnerSection = () => (
    <section className="bg-blue-dark">
        <Container className="grid grid-cols-1 gap-x-16 max-w-screen-2xl md:grid-cols-2 lg:grid-cols-1">
            <Partner name="AssettoServer" path="https://assettoserver.org/">
                <PartnerImage src="/img/partners/assettoserver.svg" />
            </Partner>
        </Container>
    </section>
);
