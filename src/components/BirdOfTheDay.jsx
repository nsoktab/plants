import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import app from "../config/firebase";
import "../components/BirdOfTheDay.css";
import { useNavigate } from "react-router-dom";

const BirdOfTheDay = () => {
  const [randomBird, setRandomBird] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore(app);
      const birdsCollectionRef = collection(db, "birds");

      try {
        const querySnapshot = await getDocs(birdsCollectionRef);
        const birdsData = [];

        // Use Promise.all to wait for all image queries to complete
        await Promise.all(
          querySnapshot.docs.map(async (birdDoc) => {
            const birdData = birdDoc.data();

            const imagesCollectionRef = collection(birdDoc.ref, "images");
            const imagesQuerySnapshot = await getDocs(imagesCollectionRef);

            const imagesData = [];
            imagesQuerySnapshot.forEach((imageDoc) => {
              imagesData.push({ id: imageDoc.id, ...imageDoc.data() });
            });

            birdData.images = imagesData;
            birdsData.push({ id: birdDoc.id, ...birdData }); // Include both id and data
          })
        );

        const randomIndex = Math.floor(Math.random() * birdsData.length);
        const selectedBird = birdsData[randomIndex];
        setRandomBird(selectedBird);
        console.log("selectedBird", selectedBird.id);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const verticalImage = randomBird?.images.find(
    (image) => image.id === "vertical"
  );

  // Getting the navigation function from useNavigate
  const navigate = useNavigate();

  function handleClick(birdId) {
    // Function to handle the click event and navigate to the specific challenge
    navigate(`/birds/${birdId}`);
  }
  return (
    <div className="birdOfTheDayContainer">
      {randomBird && (
        <div
          className="birdOfTheDayCard"
          onClick={() => handleClick(randomBird.id)}
        >
          <img
            src={
              verticalImage ? verticalImage.image : randomBird.images[0].image
            }
            alt={`Image of ${randomBird.name}`}
          />

          <div className="birdOfTheDayContent">
            <h4>{randomBird.name}</h4>
            <hr />
            <h6>Get to know it better</h6>
            <p className="funfactBird">{randomBird.funfacts[0]}</p>
          </div>
          <div className="overlay"> </div>
        </div>
      )}
    </div>
  );
};

export default BirdOfTheDay;
