enum ColorGroup {
    inherit,
    normal,
    dark,
    positive,
    danger,
    accent
}

export default ColorGroup;

export const ColorSelect: Array<{bgColorClass:string, titleColorClass:string, textColorClass:string}> = new Array<any>(6);
ColorSelect[ColorGroup.inherit] = {bgColorClass:"", titleColorClass:"", textColorClass:""};
ColorSelect[ColorGroup.normal] = {
    bgColorClass:"bg-white dark:bg-black", 
    titleColorClass:"text-black dark:text-white", 
    textColorClass:"text-black dark:text-white"};
ColorSelect[ColorGroup.dark] = {
    bgColorClass:"bg-gray-dark",
    titleColorClass:"text-white",
    textColorClass:"text-white"};
ColorSelect[ColorGroup.positive] = {
    bgColorClass:"bg-positive-light dark:bg-positive-dark",
    titleColorClass:"text-black dark:text-white",
    textColorClass:"text-black dark:text-white"};
ColorSelect[ColorGroup.danger] = {
    bgColorClass:"bg-danger-light dark:bg-danger-dark",
    titleColorClass:"text-black dark:text-white",
    textColorClass:"text-black dark:text-white"};
ColorSelect[ColorGroup.accent] = {
    bgColorClass:"bg-accent-light dark:bg-accent-dark",
    titleColorClass:"text-black dark:text-white",
    textColorClass:"text-black dark:text-white"};