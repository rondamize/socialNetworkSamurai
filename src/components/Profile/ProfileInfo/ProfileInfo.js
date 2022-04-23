import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img className={classes.mainAvatar}
                     src={!props.profile.photos.large ? "https://cdnb.artstation.com/p/assets/images/images/009/836/467/medium/maria-bo-schatzis-stream-profilpicture.jpg?1521139318" : props.profile.photos.large}/>
                <div className={classes.userName}>{props.profile.fullName}</div>
                <ProfileStatus status={'Fuck war'}/>
                {/*<div className={classes.aboutMe}>{props.profile.aboutMe}</div>*/}
            </div>
        </div>
    );
};

export default ProfileInfo;
