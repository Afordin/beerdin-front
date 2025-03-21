import { X } from "lucide-react";
import { useEffect, useRef } from "react";

interface DialogProps {
	openModal: boolean;
	closeModal: () => void;
	children: React.ReactNode;
}

function Dialog({ openModal, closeModal, children }: DialogProps) {
	const ref = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (openModal) {
			ref.current?.showModal();
		} else {
			ref.current?.close();
		}
	}, [openModal]);

	const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
		if (event.target === ref.current) {
			closeModal();
		}
	};

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<dialog
			id="navbar-dialog"
			className="w-full max-w-[75%] rounded-sm shadow-md border bg-stone-50 dark:bg-stone-950 backdrop:bg-black/50 backdrop:backdrop-blur-sm"
			ref={ref}
			onCancel={closeModal}
			onClick={handleBackdropClick}
		>
			<div className="flex flex-col gap-8 relative px-4 pt-9 pb-6">
				{children}
				<button
					className="absolute top-0 right-0 -translate-x-4 translate-y-3 active:!text-red-500 text-black dark:text-white"
					onClick={closeModal}
					type="button"
				>
					<X />
				</button>
			</div>
		</dialog>
	);
}

export { Dialog };
