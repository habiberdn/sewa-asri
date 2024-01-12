import { Button } from ".";

type Modal = {
    variant: "default" | "desctructive";
    title: string;
    state: "opened" | "closed";
    description: string;
    action1Label: string;
    action2Label: string;
    action1Handler?: () => void;
    action2Handler?: () => void;
}

export function Modal({ 
    variant,
    title,
    description,
    action1Label,
    action2Label,
    action1Handler,
    action2Handler,
    state = "closed"
}: Modal) {
    if (variant === "default") {
        return (
            <section className={`modal modal-${state}`}>
                <header className="detail">
                    <h3 className="h4-medium title">
                        { title }
                    </h3>
    
                    <p className="p-regular description">
                        { description }
                    </p>
                </header>
    
                <section className="actions">
    
                    <Button     behavior="hug-content"  
                                size="large"
                                label={action1Label}
                                variant="primary"
                                state="active"
                                
                                onClickHandler={() => {
                                    if (action1Handler) {
                                        action1Handler();
                                    }
                                }}
                            />
    
                    <Button     behavior="hug-content"  
                                size="large"
                                label={action2Label}
                                variant="secondary"
                                state="active"
                                
                                onClickHandler={() => {
                                    if (action2Handler) {
                                        action2Handler();
                                    }
                                }}
                            />
                </section>
            </section>
        );
    }
    return (
        <section className={`modal modal-${state}`}>
            <header className="detail">
                <h3 className="h4-medium title">
                    { title }
                </h3>

                <p className="p-regular description">
                    { description }
                </p>
            </header>

            <section className="actions">

                <Button     behavior="hug-content"  
                            size="large"
                            label={action1Label}
                            variant="destructive"
                            state="active"
                            
                            onClickHandler={() => {
                                if (action1Handler) {
                                    action1Handler();
                                }
                            }}
                        />

                <Button     behavior="hug-content"  
                            size="large"
                            label={action2Label}
                            variant="primary"
                            state="active"
                            
                            onClickHandler={() => {
                                if (action2Handler) {
                                    action2Handler();
                                }
                            }}
                        />
            </section>
        </section>
    );

    
}