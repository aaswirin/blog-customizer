/**
 * Все настройки приложения
 */

export const settings = {
	// Язык приложения (ru - Русский, de - Немецкий, zh - Китайский, en - Английский)
	//language: 'ru' as 'ru' | 'de' | 'zh' | 'en',
	// Компоненты
	components: {
		handler: {
			text: {
				ru: 'Задайте параметры',
				de: 'Sollwert',
				zh: '设置参数',
				en: 'Set the parameters',
			}
		},
		selectFont: {
			placeholder: {
				ru: 'Выберите шрифт',
				de: 'Schriftart auswählen',
				zh: '选择字体',
				en: 'Choose a font',
			},
			title: {
				ru: 'Шрифт',
				de: 'Die Schrift',
				zh: '字体',
				en: 'Font',
			}
		},
		radioGroupSizeFont: {
			title: {
				ru: 'Размер шрифта',
				de: 'Schriftgröße',
				zh: '字体大小',
				en: 'Font Size',
			}
		},
		selectColorFont: {
			placeholder: {
				ru: 'Выберите цвет шрифта',
				de: 'Wählen Sie eine Schriftfarbe',
				zh: '选择字体颜色',
				en: 'Choose a font color',
			},
			title: {
				ru: 'Цвет шрифта',
				de: 'Schriftfarbe',
				zh: '字体颜色',
				en: 'Font Color',
			}
		},
		selectColorBackground: {
			placeholder: {
				ru: 'Выберите цвет фона',
				de: 'Wählen Sie eine Hintergrundfarbe',
				zh: '选择背景颜色',
				en: 'Choose a background color',
			},
			title: {
				ru: 'Цвет фона',
				de: 'Hintergrundfarbe',
				zh: '背景颜色',
				en: 'Background color',
			}
		},
		selectContentWidth: {
			placeholder: {
				ru: 'Выберите ширину контента',
				de: 'Wählen Sie die Breite des Inhalts aus',
				zh: '选择内容的宽度',
				en: 'Select the width of the content',
			},
			title: {
				ru: 'Ширина контента',
				de: 'Breite des Inhalts',
				zh: '内容宽度',
				en: 'Content width',
			}
		},
		buttonClear: {
			title: {
				ru: 'Сбросить',
				de: 'Abwerfen',
				zh: '甩开',
				en: 'Clear',
			}
		},
		buttonApply: {
			title: {
				ru: 'Применить',
				de: 'Anwenden',
				zh: '申请',
				en: 'Apply',
			}
		},
		colors: {
			'option-black': {
				ru: 'Черный',
				de: 'Schwarz',
				zh: '黑色',
				en: 'Black',
			},
			'option-white': {
				ru: 'Белый',
				de: 'Weiß',
				zh: '白色',
				en: 'White',
			},
			'option-gray': {
				ru: 'Серый',
				de: 'Grau',
				zh: '灰色',
				en: 'Gray',
			},
			'option-pink': {
				ru: 'Розовый',
				de: 'Rosa',
				zh: '粉红色',
				en: 'Pink',
			},
			'option-fuchsia': {
				ru: 'Ярко-розовый',
				de: 'Pink',
				zh: '亮粉色',
				en: 'Fuchsia',
			},
			'option-yellow': {
				ru: 'Жёлтый',
				de: 'Gelb',
				zh: '黄色',
				en: 'Yellow',
			},
			'option-green': {
				ru: 'Зелёный',
				de: 'Grün',
				zh: '绿色',
				en: 'Green',
			},
			'option-blue': {
				ru: 'Голубой',
				de: 'Blau',
				zh: '蓝色',
				en: 'blue',
			},
			'option-purple': {
				ru: 'Фиолетовый',
				de: 'Lila',
				zh: '紫罗兰',
				en: 'Purple',
			},
		},
		contentWidth: {
			'option-wide': {
				ru: 'Широкий',
				de: 'Breit',
				zh: '宽',
				en: 'Wide',
			},
			'option-narrow': {
				ru: 'Узкий',
				de: 'Eng',
				zh: '窄',
				en: 'Narrow',
			},
		},
	},
	// Список клавиш, по которым закрываем окно. Вдруг поменяется?
	keysClose: [
		'Escape',
		//'F10',
	],
	// Локальное хранилище
	localStorage: {
		key: 'blogCustomizerParams',  // Ключ для сохранения
	}
}