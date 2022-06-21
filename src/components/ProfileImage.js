
function ProfileImage(props) {
    return(
        <div className="Profile">
            <img 
                alt ="Profile"
                src={props.image}   
                />
        </div>
    );
}


export default ProfileImage;