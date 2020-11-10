export function numberToString(number) {
    return (number || '0').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}