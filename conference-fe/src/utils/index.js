export function formatSeats(seats) {
    if (!seats) {
        return;
    } 
    const formated = seats.map(seat => {
        return {
            id: seat.id,
            number: seat.seatNumber
        }
    });

    if (formated.length < 6) {
        return [formated];
    }

    const result = [], len = Math.floor(formated.length / 5);
    for(let i = 0; i < formated.length; i+= len) {
        result.push(formated.splice(i, len));
    }

    return result;
}

function pad(n) { return n < 10 ? '0' + n : n }
export function formatDate(date) {
    return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate()+1)} ${pad(date.getHours()+1)}:${pad(date.getMinutes()+1)}`;
}