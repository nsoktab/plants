import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import app from "../config/firebase";
import arrow from "../assets/arrow.svg";
import "../pages/BirdPage.css";
import ImageSwiper from "../components/ImageSwiper";
import bird from "../assets/bird.svg";

const BirdPage = () => {
  const { birdId } = useParams();
  const [birdData, setBirdData] = useState(null);

  //fetch bird data - based on birdId
  useEffect(() => {
    const fetchBirdData = async () => {
      const db = getFirestore(app);
      const birdDocRef = doc(db, "birds", birdId);

      try {
        const birdDocSnapshot = await getDoc(birdDocRef);
        if (birdDocSnapshot.exists()) {
          const birdData = birdDocSnapshot.data();

          // Fetch the images collection
          const imagesCollectionRef = collection(birdDocRef, "images");
          const imagesQuerySnapshot = await getDocs(imagesCollectionRef);

          const imagesData = [];
          imagesQuerySnapshot.forEach((imageDoc) => {
            imagesData.push({ id: imageDoc.id, ...imageDoc.data() });
          });

          // Add imagesData to birdData
          birdData.images = imagesData;

          setBirdData(birdData);
        } else {
          console.error("Bird not found");
        }
      } catch (error) {
        console.error("Error fetching bird data:", error);
      }
    };

    fetchBirdData();
  }, [birdId]);

  //handle goBack navigation
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // This will navigate one page back
  };

  if (!birdData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header className="birdPageHeader">
        <img
          src={arrow}
          alt="Arrow to lead page back"
          className="backArrow"
          onClick={handleGoBack}
        />
        <h2 className="birdPageName">{birdData.name}</h2>
      </header>

      <ImageSwiper images={birdData.images} />

      <section className="birdPageContent">
        <h4>Appearance</h4>
        <hr className="birdPageSeperator" />
        <p>{birdData.appearance}</p>
        <h4>Behaviour</h4>
        <hr className="birdPageSeperator" />
        <p>{birdData.behaviour}</p>
        <h4>Food</h4>
        <hr className="birdPageSeperator" />
        <p>{birdData.food}</p>
        {birdData.mating && (
          <div>
            <h4>Mating</h4>
            <hr className="birdPageSeperator" />
            <p>{birdData.mating}</p>
          </div>
        )}
        {birdData.breeding && (
          <div>
            <h4>Breeding</h4>
            <hr className="birdPageSeperator" />
            <p>{birdData.breeding}</p>
          </div>
        )}
        <h4>Population</h4>
        <hr className="birdPageSeperator" /> <p>{birdData.population}</p>
        <h4>Fun Facts</h4>
        <hr className="birdPageSeperator" />
        <ul>
          {birdData.funfacts.map((funfact, index) => (
            <div className="birdFunFacts" key={index}>
              <img src={bird} alt="Bird Icon" />
              <p> {funfact}</p>
            </div>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default BirdPage;
