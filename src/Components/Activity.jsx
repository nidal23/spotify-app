import React, { useState } from "react";
import axios from "axios";
import ArtistProfile from "./ArtistProfile";

const Activity = ({ token }) => {
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });

    setArtists(data.artists.items);
  };
  return (
    <div>
      {token ? (
        <div className="form">
          <form onSubmit={searchArtists}>
            <label htmlFor="search-key">Enter Artist Name</label>
            <input
              id="search-key"
              type="text"
              onChange={(e) => setSearchKey(e.target.value)}
            />

            <button type="submit" className="btn">
              Search
            </button>
          </form>
        </div>
      ) : (
        <h2>Please Login</h2>
      )}
      {artists.map((artist) => {
        return <ArtistProfile key={artist.id} artist={artist} />;
      })}
    </div>
  );
};

export default Activity;
