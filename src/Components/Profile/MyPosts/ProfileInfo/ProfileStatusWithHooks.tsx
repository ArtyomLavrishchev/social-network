import React, {ChangeEvent, useEffect, useState} from 'react';

export type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusType> = (props) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activateEditMode = () => setEditMode(true)
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
            <div>
                <b>Status: </b><span onDoubleClick={activateEditMode}>{props.status || "Your status:"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus onBlur={deActivateEditMode} value={status}/>
            </div>
            }
        </div>
    )
}