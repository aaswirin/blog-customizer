/**
 * Кастомные хуки
 */

import React, { useEffect } from "react"

// Закрывашка для панели параметров
type TCloseProps = {
	isOpen: boolean,
	onClose: () => void,
	paramsRef: React.RefObject<HTMLElement>,
	keysClose: string[],
}

export const usePanelClose = ({isOpen, onClose, paramsRef, keysClose}: TCloseProps) => {
	useEffect(() => {
		if (!isOpen) return;

		const handleClickOutside = (event: MouseEvent) => {
			if (paramsRef.current && !paramsRef.current.contains(event.target as Node)) {
				onClose();
			}
		};

		const handleEscape = (event: KeyboardEvent) => {
			// Поискать клавишу в списке
			if (!(keysClose.findIndex(function (element) {
				return element === event.key;
			}) !== -1)) return;

			onClose();
		};

		document.addEventListener("keydown", handleEscape);
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.removeEventListener("mousedown", handleClickOutside);
		}

	}, [isOpen, onClose]);
}