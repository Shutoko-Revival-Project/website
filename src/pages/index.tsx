import { A320Header } from '../components/home/A320Header';
import { Community } from '../components/home/Community';
import { Donate } from '../components/home/Donate';
import { Download } from '../components/home/Download';

const Index = () => (
    <>
        <A320Header />
        {/*<Installer />*/}
        <Download />
        <Community />
        {/*<PartnerSection />*/}
        <Donate />
    </>
);

export default Index;
