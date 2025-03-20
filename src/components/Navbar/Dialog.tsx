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

	return (
		<dialog ref={ref} onCancel={closeModal}>
			{children}
			<button onClick={closeModal} type="button">
				Close
			</button>
		</dialog>
	);
}

export { Dialog };
