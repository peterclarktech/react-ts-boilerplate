enum ColorGroup {
    inherit,
    normal,
    invert,
    dark,
    positive,
    danger,
    accent
}

export default ColorGroup;

type ColorSelectType = {
    bgColorClass:string, 
    titleColorClass:string, 
    textColorClass:string
};

export const ColorSelect: Array<ColorSelectType> = new Array<ColorSelectType>(7);
ColorSelect[ColorGroup.inherit] = {bgColorClass:"", titleColorClass:"", textColorClass:""};
ColorSelect[ColorGroup.normal] = {
    bgColorClass:"bg-white dark:bg-gray-dark", 
    titleColorClass:"text-black dark:text-white", 
    textColorClass:"text-black dark:text-white"};
ColorSelect[ColorGroup.invert] = {
    bgColorClass:"bg-black dark:bg-white", 
    titleColorClass:"text-white dark:text-black", 
    textColorClass:"text-white dark:text-black"};
ColorSelect[ColorGroup.dark] = {
    bgColorClass:"bg-black",
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