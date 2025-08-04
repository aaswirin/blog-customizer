/**
 * Всякие нужные типы
 */

import {ArticleStateType} from "src/constants/articleProps"

export type ArticleParamsFormProps = {
	applyParams: (settings: ArticleStateType) => void;
}

// Языки приложения
export type TLanguages = 'ru' | 'de' | 'zh' | 'en';

// Ширина контента
export type TContentWidth = 'option-wide' | 'option-narrow';

// Цвета
export type TColors = 'option-black' | 'option-white' | 'option-gray' | 'option-pink' |
	                  'option-yellow' | 'option-green' | 'option-blue' | 'option-purple';
