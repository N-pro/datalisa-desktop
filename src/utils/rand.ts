export const randInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min)) + min

const str = 'abcdefghijklmnopqrstuvwkyz'
export const randWord = (min: number, max: number) =>
    new Array(randInt(min, max))
        .fill('')
        .map(() => str[randInt(0,26)]) 
        .map((v, i) => i === 0 ? v.toLocaleUpperCase() : v)
        .join('')