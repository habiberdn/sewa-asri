import { useNavigate } from "@tanstack/react-router";
import { Button, PageHeader } from "../components";

export function PageNotFound() {
    const navigate = useNavigate();

    return (
        <main className="page-not-found">
            <PageHeader  variant="main"/>

            <article className="not-found-content">

                <h1 className="status-code">
                    404
                </h1>

                <h4 className="h4-regular">
                    Halaman yang kamu cari tidak ditemukan
                </h4>

                <Button     variant="primary"
                            behavior="hug-content"
                            size="large"
                            state="active"
                            label="Kembali ke home"

                            onClickHandler={() => {
                                navigate({ to: "/" });
                            }}
                            />
            </article>
        </main>
    );
}