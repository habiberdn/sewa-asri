import penIcon from "./../assets/icons/pen.png";
import settingsIcon from "./../assets/icons/settings.png";
import helpIcon from "./../assets/icons/chat.png";
import logoutIcon from "./../assets/icons/logout.png";

interface ProfilePanel {
    name: string | undefined;
    photo: string | undefined;
    state: "opened" | "closed"; 
    onMouseLeave?: () => void;
    onLogoutHandler?: () => void;
}

export function ProfilePanel({ 
        name,
        photo,
        state, 
        onMouseLeave,
        onLogoutHandler
    }: ProfilePanel) {
    return (
        <section    className={`profile-panel profile-panel-${state}`}
                    onMouseLeave={() => {
                        if (onMouseLeave) {
                            onMouseLeave();
                        }
                    }}>

            <article className="profile">
                {
                    photo === "default.jpg" ? (
                        <img    className="photo"
                                src={"https://randomuser.me/api/portraits/men/16.jpg"}
                                />
                    ) : (
                        <img    className="photo"
                                src={photo}
                                />
                    )
                }
                
                <section className="name-role-wrapper">

                    <h4 className="name label-regular">
                        { name }
                    </h4>

                    <h4 className="role label-regular">
                        Manager
                    </h4>
                </section>
            </article>

            <article className="menu">
                <img    src={penIcon} 
                        className="menu-icon"
                        />
                
                <h4 className="label-regular">
                    Edit informasi pribadi
                </h4>
            </article>

            <article className="menu">
                <img    src={settingsIcon} 
                        className="menu-icon"
                        />
                
                <h4 className="label-regular">
                    Pengaturan
                </h4>
            </article>

            <article className="menu">
                <img    src={helpIcon} 
                        className="menu-icon"
                        />
                
                <h4 className="label-regular">
                    Pusat bantuan
                </h4>
            </article>

            <article    className="menu"
                        onClick={() => {
                            if (onLogoutHandler) {
                                onLogoutHandler();
                            }
                        }}>

                <img    src={logoutIcon} 
                        className="menu-icon"
                        />
                
                <h4 className="label-regular">
                    Keluar
                </h4>
            </article>

        </section>
    );
}