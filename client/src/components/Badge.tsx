import cardIcon from "./../assets/icons/card.webp";
import menuBoardIcon from "./../assets/icons/menu-board.webp";
import receiptSearchIcon from "./../assets/icons/receipt-search.webp";
import ticketIcon from "./../assets/icons/ticket.webp";
import editIcon from "./../assets/icons/edit-2.webp";
import notificationStatusIcon from "./../assets/icons/notification-status-1.webp";
import likeIcon from "./../assets/icons/like-1.webp";
import messageIcon from "./../assets/icons/messages-2-1.webp";
import profileUserIcon from "./../assets/icons/profile-2user.webp";
import smsNotificationIcon from "./../assets/icons/sms-notification.webp";
import villaIcon from "./../assets/icons/house.webp";

export function Badge({ label }: { label: string }) {
    return (
        <article className="badge">
            <p className="label-regular">
                { label }
            </p>

            <BadgeIcon label={label} />
        </article>
    );    
}

function BadgeIcon({ label }: { label: string }) {
    const badgeIconMap = {
        "Beragam metode pembayaran": cardIcon,
        "Unduh tiket": ticketIcon,
        "Kelola jadwal reservasi": menuBoardIcon,
        "Booking villa": menuBoardIcon,
        "Riwayat status reservasi": receiptSearchIcon,
        "Atur status ketersediaan villa": notificationStatusIcon,
        "Edit informasi villa": editIcon,
        "Pantau kepuasan tamu": likeIcon,
        "Percakapan dengan calon tamu": messageIcon,
        "Percakapan dengan pengelola": messageIcon,
        "Melihat daftar tamu": profileUserIcon,
        "Notifikasi chat terbaru": smsNotificationIcon,
        "Mencari villa": villaIcon
    }
    return <img src={badgeIconMap[label]} className="icon" />;
}