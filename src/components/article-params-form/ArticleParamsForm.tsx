import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { useState, useRef } from 'react';

import { defaultArticleState, fontFamilyOptions, fontSizeOptions, fontColors,
	     backgroundColors, contentWidthArr, OptionType, ArticleStateType } from 'src/constants/articleProps';

import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	// Окно параметров
	const [paramsState, setParamsState] = useState(false);
	const handleParamsToggle = () => {
		setParamsState(!paramsState);
	};

	const paramsRef = useRef(null);
	const paramsClassName = clsx(styles.container, paramsState && styles.container_open);

	const [params, setParams] = useState(defaultArticleState)

	const updateFormSettings = (newSettings: Partial<ArticleStateType>) => {
		setParams((prev) => ({...prev, ...newSettings}))
	}

	// Смена шрифта
	const handleFontChange = (newValue: OptionType) => {
		updateFormSettings({fontFamilyOption: newValue})
	}

	// Смена размера шрифта
	const handleSizeChange = (newValue: OptionType) => {
		updateFormSettings({fontSizeOption: newValue})
	}

	// Смена цвета шрифта
	const handleColorChange = (newValue: OptionType) => {
		updateFormSettings({fontColor: newValue})
	}

	// Смена цвета фона
	const handleBackgroundChange = (newValue: OptionType) => {
		updateFormSettings({backgroundColor: newValue})
	}

	// Смена ширины
	const handleWidthChange = (newValue: OptionType) => {
		updateFormSettings({contentWidth: newValue})
	}

	return (
		<>
			<ArrowButton isOpen={paramsState} onClick={handleParamsToggle} />
			<aside className={paramsClassName}>
				<form className={styles.form} ref={paramsRef}>
					<Text
						as='h2' size={31} weight={800} fontStyle='normal'
						uppercase align='left' family='open-sans'>
						Задайте параметры
					</Text>
					<Select
						placeholder='Выберите шрифт' title='Шрифт' selected={params.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={handleFontChange}
					/>
					<RadioGroup
						title='размер шрифта'
						options={fontSizeOptions}
						selected={params.fontSizeOption}
						onChange={handleSizeChange}
						name={'radioGroupName'}
					/>
					<Select
						placeholder='Выберите цвет шрифта'
						title='цвет шрифта'
						selected={params.fontColor}
						options={fontColors}
						onChange={handleColorChange}
					/>
					<Separator />
					<Select
						placeholder='Выберите цвет фона'
						title='цвет фона'
						selected={params.backgroundColor}
						options={backgroundColors}
						onChange={handleBackgroundChange}

					/>
					<Select
						placeholder='Выберите ширину контента'
						title='ширина контента'
						selected={params.contentWidth}
						options={contentWidthArr}
						onChange={handleWidthChange}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
