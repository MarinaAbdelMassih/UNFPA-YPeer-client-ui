import {TranslationModel} from './translation.model';

export interface CategoryModel {
  title: TranslationModel,
  count?: number,
  hideToggle?: boolean,
  yearsList?: Object[],
  url?: string;
}
