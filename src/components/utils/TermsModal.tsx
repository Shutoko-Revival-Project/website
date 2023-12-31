import { useCallback, useState } from 'react';
import { Checkbox, Label, Modal } from 'flowbite-react';
import { Button } from './Button';

type TermsModalProps = {
    show: boolean,
    url?: string,
    onClose: (() => void),
};

export const TermsModal = (props: TermsModalProps) => {
    const [tosAgreed, setTosAgreed] = useState(false);

    const onClose = useCallback(() => {
        setTosAgreed(false);
        props.onClose();
    }, [props]);

    const onDownloadClick = useCallback(() => {
        if (tosAgreed) {
            onClose();
        }
    }, [tosAgreed, onClose]);

    return (
        <Modal show={props.show} onClose={onClose}>
            <Modal.Header>Terms of Use</Modal.Header>
            <Modal.Body>
                <div className="space-y-3">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        <strong>You are ALLOWED to:</strong>
                        <ul className="list-disc pl-5">
                            <li>Use the SRP track as is, for entertainment, training or education.</li>
                            <li>Create media (screenshots, videos, art, etc) that uses the SRP track.</li>
                            <li>
                                Offer services, free, paid or otherwise, that use the SRP track without conflicting with these terms.
                                You may contact us at shutokorevivalproject@gmail.com for clarification should you need it.
                            </li>
                        </ul>
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        <strong>You are NOT ALLOWED to:</strong>
                        <ul className="list-disc pl-5">
                            <li>Re-upload or re-host the SRP files. If you'd like to share the files to your community you may do so by linking to our website or Discord server.</li>
                            <li>
                                Modify the SRP files. The files are encrypted for a reason. You may not add, remove or alter the files in any way without our explicit written permission.
                                This includes texture modifications, model additions/removals and ports to other platforms.
                            </li>
                            <li>
                                Restrict the SRP files behind paid access. Shutoko Revival Project is and will remain free to download and use,
                                as long as you have a legal copy of the prerequisite software that SRP runs on.
                            </li>
                        </ul>
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        <strong>Licensing:</strong>
                        <ul className="list-disc pl-5">
                            <li>
                                "Shuto Metropolitan Expressway" is owned and operated by the Metropolitan Expressway Company Limited (首都高速道路株式会社, Shuto Kōsoku-dōro Kabushiki-gaisha)
                                and thus they are the holders of any legal rights relevant to the real world assets that SRP replicates.
                            </li>
                            <li>The rights of any and all depictions of real world branding within SRP are still held by their respective real world holders.</li>
                            <li>The rights of any and all 3rd party content found within SRP are still held by their respective real world holders.</li>
                        </ul>
                    </p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="w-full">
                    <Checkbox id="tos-agree" checked={tosAgreed} onChange={(e) => setTosAgreed(e.target.checked)} />
                    <Label htmlFor="tos-agree" className="text-base leading-relaxed text-gray-500 dark:text-gray-400 pl-1">I agree to these terms.</Label>
                </div>
                <div>
                    <a href={tosAgreed ? props.url : undefined} rel="nofollow">
                        <Button
                            onClick={onDownloadClick}
                            className={`float-right w-40 font-bold bg-green-500 ${tosAgreed ? 'hover:bg-green-700' : 'opacity-30 cursor-not-allowed'}`}
                        >
                            Download
                        </Button>
                    </a>
                </div>
            </Modal.Footer>
        </Modal>
    );
};
