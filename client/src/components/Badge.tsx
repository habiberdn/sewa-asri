import cardIcon from "./../assets/icons/card.webp";
import menuBoardIcon from "./../assets/icons/menu-board.webp";
import receiptSearchIcon from "./../assets/icons/receipt-search.webp";
import ticketIcon from "./../assets/icons/ticket.webp";
import editIcon from "./../assets/icons/notification-status.png";
import notificationStatusIcon from "./../assets/icons/edit-2.png";
import likeIcon from "./../assets/icons/like.png";
import messageIcon from "./../assets/icons/messages-2.png";
import profileUserIcon from "./../assets/icons/profile-2user.png";
import smsNotificationIcon from "./../assets/icons/sms-notification.png";

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
        "Riwayat status reservasi": receiptSearchIcon,
        "Atur status ketersediaan villa": notificationStatusIcon,
        "Edit informasi villa": editIcon,
        "Pantau kepuasan tamu": likeIcon,
        "Percakapan dengan calon tamu": messageIcon,
        "Melihat daftar tamu": profileUserIcon,
        "Notifikasi chat terbaru": smsNotificationIcon
    }
    return <img src={badgeIconMap[label]} className="icon" />;
}