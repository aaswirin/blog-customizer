import React, { useState, useRef } from 'react';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { usePanelClose } from 'src/CustomHooks';

import { settings } from 'src/constants/settingsApp';

import { ArticleParamsFormProps } from 'src/types/types';
import { defaultArticleState, fontFamilyOptions, fontSizeOptions, fontColors,
	     backgroundColors, contentWidthArr, OptionType, ArticleStateType } from 'src/constants/articleProps';

import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = ({applyParams}: ArticleParamsFormProps) => {
	// Язык приложения
	const language = settings.language;
  // Перевести настройки
	if (language !== 'ru') {
		// Ширина контента
		contentWidthArr.forEach(contentWidth => {
			contentWidth.title =
				settings.components.contentWidth[contentWidth.optionClassName as 'option-wide' | 'option-narrow'][language];
		});
	}

	// Окно параметров
	const [paramsState, setParamsState] = useState(false);

	const paramsRef = useRef(null);
	const paramsClassName = clsx(styles.container, paramsState && styles.container_open);

	const [params, setParams] = useState(defaultArticleState);

	const updateFormParams = (newParams: Partial<ArticleStateType>) => {
		setParams((prev) => ({...prev, ...newParams}));
	}

	// Смена шрифта
	const handleFontChange = (newValue: OptionType) => {
		updateFormParams({fontFamilyOption: newValue});
	}

	// Смена размера шрифта
	const handleSizeChange = (newValue: OptionType) => {
		updateFormParams({fontSizeOption: newValue});
	}

	// Смена цвета шрифта
	const handleColorChange = (newValue: OptionType) => {
		updateFormParams({fontColor: newValue});
	}

	// Смена цвета фона
	const handleBackgroundChange = (newValue: OptionType) => {
		updateFormParams({backgroundColor: newValue});
	}

	// Смена ширины
	const handleWidthChange = (newValue: OptionType) => {
		updateFormParams({contentWidth: newValue});
	}

	const handleParamsToggle = () => {
		setParamsState(!paramsState);
	};

	// Обработка кнопок
	const handleClearForm = () => {
		setParams(defaultArticleState);
		applyParams(defaultArticleState);
		handleParamsToggle();
	};

	const handleSubmitForm = (event: React.FormEvent) => {
		event.preventDefault();
		setParams(params);
		applyParams(params);
		handleParamsToggle();
	};

	// Закрывашка для панели параметров
	usePanelClose({
		isOpen: paramsState,
		onClose: () => setParamsState(false),
		paramsRef: paramsRef,
		keysClose: settings.keysClose
	});

	return (
		<>
			<ArrowButton isOpen={paramsState} onClick={handleParamsToggle} />
			<aside className={paramsClassName}>
				<form className={styles.form} onSubmit={handleSubmitForm} ref={paramsRef}>
					<Text
						as='h2' size={31} weight={800} fontStyle='normal'
						uppercase align='left' family='open-sans' >
						{settings.components.handler.text[language]}
					</Text>

					<Select
						placeholder={settings.components.selectFont.placeholder[language]}
						title={settings.components.selectFont.title[language]}
						selected={params.fontFamilyOption} options={fontFamilyOptions} onChange={handleFontChange} />

					<RadioGroup
						title={settings.components.radioGroupSizeFont.title[language]}
						options={fontSizeOptions} selected={params.fontSizeOption}
						onChange={handleSizeChange} name={'radioGroupName'} />

					<Select
						placeholder={settings.components.selectColorFont.placeholder[language]}
						title={settings.components.selectColorFont.title[language]}
						selected={params.fontColor} options={fontColors} onChange={handleColorChange} />

					<Separator />

					<Select
						placeholder={settings.components.selectColorBackground.placeholder[language]}
						title={settings.components.selectColorBackground.title[language]}
						selected={params.backgroundColor} options={backgroundColors} onChange={handleBackgroundChange} />

					<Select
						placeholder={settings.components.selectContentWidth.placeholder[language]}
						title={settings.components.selectContentWidth.title[language]}
						selected={params.contentWidth} options={contentWidthArr} onChange={handleWidthChange} />

					<div className={styles.bottomContainer}>
						<Button title={settings.components.buttonClear.title[language]}
						  htmlType='reset' type='clear' onClick={handleClearForm}/>

						<Button title={settings.components.buttonApply.title[language]}
							htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
