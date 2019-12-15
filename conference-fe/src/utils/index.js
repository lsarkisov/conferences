export function formatSeats(seats) {
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