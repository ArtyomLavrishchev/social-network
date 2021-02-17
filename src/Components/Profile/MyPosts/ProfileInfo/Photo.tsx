import React from 'react';
import style from "./ProfileInfo.module.css";
import {UploadOutlined, UserOutlined} from "@ant-design/icons";
import {Avatar, Button, Image, Upload} from "antd";
import {ProfileType} from "../../../../redux/store";

const Photo: React.FC<PhotoType> = (
    {
        profile,
        isOwner,
        savePhoto
    }
) => {
    const props = {
        name: 'file',
        onChange(e: any) {
            if (e.file.originFileObj) {
                savePhoto(e.file.originFileObj)
            }
        }
    };
    return (
        <div className={style.wrapper}>
            <div className={style.avatar}>
                <Avatar
                    size={250}
                    src={profile && profile.photos.large ? <Image src={profile.photos.large}/> :
                        <Avatar size={250} style={{backgroundColor: '#ffd363'}} icon={<UserOutlined/>}/>}
                />
                <div className={style.uploadBtn}>
                    {isOwner &&
                    <Upload showUploadList={false} accept="image/png, image/jpeg" {...props}>
                        <Button type={"primary"} shape={"circle"} icon={<UploadOutlined/>}/>
                    </Upload>}
                </div>
            </div>
        </div>
    );
};

export default Photo;

type PhotoType = {
    profile: ProfileType,
    isOwner: boolean,
    savePhoto: (file: File) => void
}
