import { A320Header } from '../components/home/A320Header';
import { Installer } from '../components/home/Installer';
import { Community } from '../components/home/Community';
import { PartnerSection } from '../components/home/PartnerSection';
import { Donate } from '../components/home/Donate';
import { Download } from '../components/projects/A32NX/Download';

const Index = () => (
    <>
        <A320Header />
        {/*<Installer />*/}
        <Download expOnHold/>
        <Community />
        {/*<PartnerSection />*/}
        <Donate />
    </>
);

export default Index;
