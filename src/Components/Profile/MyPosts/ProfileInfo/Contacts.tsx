import React from "react";

export const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return (
        <div>
            {contactValue &&
            <div>
                <b>{contactTitle}: </b> {contactValue}
            </div>
            }
        </div>
    )
}
type ContactType = {
    contactTitle: string
    contactValue: string
}
