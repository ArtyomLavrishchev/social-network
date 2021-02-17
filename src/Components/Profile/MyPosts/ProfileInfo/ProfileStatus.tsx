import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button, Input} from "antd";
import {EditOutlined} from "@ant-design/icons";
import style from "./ProfileStatus.module.css"

export type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus: React.FC<ProfileStatusType> = (props) => {
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
        <div className={style.statusContainer}>
            {!editMode &&
            <div>
                <span className={style.status}><b>Status: </b>{props.status || "Your status:"}</span>
                <Button size={"large"} onClick={activateEditMode} type={"link"} icon={<EditOutlined/>}/>
            </div>
            }
            {editMode &&
            <div>
                <Input style={{width: "250px"}} size={"middle"} onChange={onStatusChange} autoFocus
                       onBlur={deActivateEditMode} value={status}/>
            </div>
            }
        </div>
    )
}