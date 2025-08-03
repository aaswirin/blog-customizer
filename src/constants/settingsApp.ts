/**
 * Все настройки приложения
 */
import {contentWidthArr} from "src/constants/articleProps";

export const settings = {
	// Язык приложения (ru, de, cn, en)
	language: 'cn' as 'ru' | 'de' | 'cn' | 'en',
	// Компоненты
	components: {
		handler: {
			text: {
				ru: 'Задайте параметры',
				de: 'Sollwert',
				cn: '设置参数',
				en: 'Set the parameters',
			}
		},
		selectFont: {
			placeholder: {
				ru: 'Выберите шрифт',
				de: 'Schriftart auswählen',
				cn: '选择字体',
				en: 'Choose a font',
			},
			title: {
				ru: 'Шрифт',
				de: 'Die Schrift',
				cn: '字体',
				en: 'Font',
			}
		},
		radioGroupSizeFont: {
			title: {
				ru: 'Размер шрифта',
				de: 'Schriftgröße',
				cn: '字体大小',
				en: 'Font Size',
			}
		},
		selectColorFont: {
			placeholder: {
				ru: 'Выберите цвет шрифта',
				de: 'Wählen Sie eine Schriftfarbe',
				cn: '选择字体颜色',
				en: 'Choose a font color',
			},
			title: {
				ru: 'Цвет шрифта',
				de: 'Schriftfarbe',
				cn: '字体颜色',
				en: 'Font Color',
			}
		},
		selectColorBackground: {
			placeholder: {
				ru: 'Выберите цвет фона',
				de: 'Wählen Sie eine Hintergrundfarbe',
				cn: '选择背景颜色',
				en: 'Choose a background color',
			},
			title: {
				ru: 'Цвет фона',
				de: 'Hintergrundfarbe',
				cn: '背景颜色',
				en: 'Background color',
			}
		},
		selectContentWidth: {
			placeholder: {
				ru: 'Выберите ширину контента',
				de: 'Wählen Sie die Breite des Inhalts aus',
				cn: '选择内容的宽度',
				en: 'Select the width of the content',
			},
			title: {
				ru: 'Ширина контента',
				de: 'Breite des Inhalts',
				cn: '内容宽度',
				en: 'Content width',
			}
		},
		buttonClear: {
			title: {
				ru: 'Сбросить',
				de: 'Abwerfen',
				cn: '甩开',
				en: 'Clear',
			}
		},
		buttonApply: {
			title: {
				ru: 'Применить',
				de: 'Anwenden',
				cn: '申请',
				en: 'Apply',
			}
		},
		contentWidth: {
			'option-wide': {
				ru: 'Широкий',
				de: 'Breit',
				cn: '宽',
				en: 'Wide',
			},
			'option-narrow': {
				ru: 'Узкий',
				de: 'Eng',
				cn: '窄',
				en: 'Narrow',
			},
		},
	},
	keysClose: [                                 // Список клавиш, по которым закрываем окно. Вдруг поменяется?
		'Escape',
		//'F10',
	],
}