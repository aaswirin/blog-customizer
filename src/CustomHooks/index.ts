/**
 * Кастомные хуки
 */

import React, { useEffect, useState } from 'react';

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

// Локальное хранилище
export function useLocalStorage<T>(key: string, initialValue: T):
	[T, React.Dispatch<React.SetStateAction<T>>] {

	const [value, setValue] = useState<T>(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch {
			return initialValue;
		}
	});

	useEffect(() => {
		try {
			// Если всё по умолчанию, то прибраться в хранилище
			if (value === initialValue) {
				window.localStorage.removeItem(key);
				return;
			}
			const item = JSON.stringify(value);
			window.localStorage.setItem(key, item);
		} catch (error: any) {
			console.log(error.message);
		}
	}, [value]);

	return [value, setValue];
}