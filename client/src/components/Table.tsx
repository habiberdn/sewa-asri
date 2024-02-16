import "./../styles/css/components/table.css";

interface ReservationSchedule {
    id: string;
    
    date: string;
    status: string;
    total: number;

    guest: {
        id: string;
        name: string;
        photo: string;
    };

    villa: {
        id: string;
        name: string;
    };
 
    schedule: {
        checkIn: string;
        checkOut: string;
    }
}

export function ReservationTable({ 
    data,
    onClickCellHandler
}: { 
    data: Array<ReservationSchedule>;
    onClickCellHandler?: (reservationId: string) => void;
}) {
    return (
        <table className="table">
            <thead className="header">
                <tr className="row">
                    <th scope="col" className="cell cell-small label-medium">No</th>
                    <th scope="col" className="cell cell-small label-medium">Date</th>
                    <th scope="col" className="cell cell-large label-medium">Guest name</th>
                    <th scope="col" className="cell cell-large label-medium">Villa name</th>
                    <th scope="col" className="cell cell-large label-medium">Status</th>
                    <th scope="col" className="cell cell-large label-medium">Total</th>
                    <th scope="col" className="cell cell-medium label-medium">Check in</th>
                    <th scope="col" className="cell cell-medium label-medium">Check out</th>
                </tr>
            </thead>

            <tbody className="body">
                {data.map((reservation, index) => {
                    return (
                        <tr 
                            className="row"
                            onClick={() => onClickCellHandler && onClickCellHandler(reservation.id)}    
                            key={reservation.id + index}
                        >
                            <td className="cell cell-small label-regular">No</td>
                            <td className="cell cell-small label-regular">{ reservation.date }</td>
                            <td className="cell cell-large label-regular">{ reservation.guest.name }</td>
                            <td className="cell cell-large label-regular">{ reservation.villa.name }</td>
                            <td className="cell cell-large label-regular">{ reservation.status }</td>
                            <td className="cell cell-large label-regular">Rp. { reservation.total }</td>
                            <td className="cell cell-medium label-regular">{ reservation.schedule.checkIn }</td>
                            <td className="cell cell-medium label-regular">{ reservation.schedule.checkOut }</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}