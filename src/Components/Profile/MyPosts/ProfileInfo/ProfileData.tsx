import React from "react";
import {ProfileType} from "../../../../redux/store";
import {Contact} from "./Contacts";
import {Button, Col, Row} from "antd";
import style from "./ProfileData.module.css"
import {EditOutlined} from "@ant-design/icons";

export const ProfileData: React.FC<ProfileDataType> = ({profile, isOwner, goToEditMode}) => {
    return (
        <div className={style.wrapper}>
            {profile &&
            <>
                {isOwner && <div className={style.editBtn}>
                    <Button size={"large"} type="link" onClick={goToEditMode} icon={<EditOutlined/>}/>
                </div>}
                <h2 className={style.fullName}>{profile.fullName}</h2>
                <Row align={"top"} justify={"start"}>
                    <Col span={8}>
                        <div>
                        </div>
                        <div>
                            <b>Looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'}
                        </div>
                        {profile.lookingForAJob &&
                        <div>
                            <b>My professional skills: </b> {profile.lookingForAJobDescription}
                        </div>
                        }
                        <div>
                            <b>About me: </b> {profile.aboutMe}
                        </div>
                    </Col>
                    <Col span={8}>
                        <div>
                            <b>Contacts: </b> {Object.keys(profile.contacts).map((key) => {
                            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                        })}
                        </div>
                    </Col>
                </Row>
            </>
            }
        </div>
    )
}

type ProfileDataType =
{
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}