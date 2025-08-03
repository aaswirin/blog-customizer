/**
 * Всякие нужные типы
 */

import { ArticleStateType } from "src/constants/articleProps"

export type ArticleParamsFormProps = {
	applyParams: (settings: ArticleStateType) => void;
}
