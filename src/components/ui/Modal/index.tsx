import { Icon } from "../Icon";

interface ModalProps {
    children: React.ReactNode;
    open: boolean;
    onClose: (value: boolean) => void;
}

const Modal = ({ children, open, onClose }: ModalProps) => {

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-150 flex items-center justify-center px-4 sm:px-6">
            <div className="absolute inset-0 bg-neutral-edoc-500/50 backdrop-blur-lg" onClick={() => onClose(false)} />

            <div className={`relative p-4 w-3xl h-145 rounded-2xl animate-fade-in bg-neutral-edoc-500 border border-white-500 shadow-2xs`}>
                
                    <button
                        className="absolute right-6 top-6 bg-neutral-edoc-500 border border-white-500 p-1 cursor-pointer  rounded-full transition-all hover:scale-110"
                        onClick={() => onClose(false)}
                    >
                       <Icon name="Cancel01Icon" size={18} color="#d1cfc0" />
                    </button>
             
                {children}
            </div>

        </div>
    )
}

export default Modal;