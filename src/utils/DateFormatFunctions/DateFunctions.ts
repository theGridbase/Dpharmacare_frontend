

export function PrettyDate(timestamp: any) {
    const date = new Date(timestamp)
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return `${date.getHours()}: ${date.getMinutes()} | ${date.getDay()} ${monthNames[date.getMonth()]} ,${date.getFullYear()}`;
}