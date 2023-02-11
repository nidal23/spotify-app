import React from "react";

const ArtistProfile = ({ artist }) => {
  return (
    <>
      <div className="name">{artist.name}</div>
      <div className="profile">
        <div className="images">
          {artist.images.length ? (
            <img src={artist.images[1].url} alt="" />
          ) : (
            <div>No Image</div>
          )}
        </div>
        <div className="genre">
          Genre: {artist.genres[0] ? artist.genres[0] : "Not Specified"}
        </div>
        <div className="followers">Followers: {artist.followers.total}</div>
        <div className="linkto">
          <a href={artist.uri}>Visit artist profile</a>
        </div>
      </div>
    </>
  );
};

export default ArtistProfile;
