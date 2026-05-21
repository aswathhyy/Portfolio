import React, { useEffect, useState } from "react";
import axios from "axios";
import Showdata from "./Showdata";

function Data() {
  const [photos, setPhotos] = useState([]);

  async function fetchPhotos() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );

      // Load only first 20 photos
      setPhotos(response.data.slice(0, 20));

    } catch (error) {
      console.log("Error:", error);
    }
  }

  useEffect(() => {
    fetchPhotos();
  }, []);

  return <Showdata users={photos} />;
}

export default Data;