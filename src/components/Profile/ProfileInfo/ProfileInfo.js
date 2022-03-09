import classes from './ProfileInfo.module.css';
const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://img.gadgethacks.com/img/10/71/63632332115374/0/take-long-exposure-photos-your-iphone.1280x600.jpg" />
      </div>
      <div className={classes.descriptionBlock}>
        <img className={classes.mainAvatar} src="https://cdnb.artstation.com/p/assets/images/images/009/836/467/medium/maria-bo-schatzis-stream-profilpicture.jpg?1521139318" />
      </div>
    </div>
  );
};

export default ProfileInfo;
