/** ======= TYPES ======= */
import type { Color, FooterButtonType } from './Types';

export const defaultColor = (color?: Color) => (color ? color : 'primary');
export const defaultAriaLabel = (label?: string) => (label ? label : undefined);
export const footerTypeHelper = (value: string, type?: FooterButtonType) =>
	type == 'link' ? value : undefined;
export const defaultTarget = (type?: FooterButtonType) =>
	footerTypeHelper('_blank', type);
export const defaultRel = (type?: FooterButtonType) =>
	footerTypeHelper('noopener noreferrer', type);
