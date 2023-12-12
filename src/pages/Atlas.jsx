import HeaderGeneral from "../components/HeaderGeneral";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../config/firebase";
import "../pages/Atlas.css";

const AtlasPage = () => {
  const [birds, setBirds] = useState([]);

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

            // Collect birdId along with other bird data
            const birdId = birdDoc.id;

            const imagesCollectionRef = collection(birdDoc.ref, "images");
            const imagesQuerySnapshot = await getDocs(imagesCollectionRef);

            const imagesData = [];
            imagesQuerySnapshot.forEach((imageDoc) => {
              imagesData.push({ id: imageDoc.id, ...imageDoc.data() });
            });

            birdData.images = imagesData;
            birdsData.push({ id: birdId, ...birdData }); // Include birdId in the data
          })
        );

        // Sort birds alphabetically based on name
        const sortedBirds = birdsData
          .filter((bird) => bird.name) // Filter out items without nameLatin
          .sort((a, b) => a.name.localeCompare(b.name));

        setBirds(sortedBirds);
        console.log("Sorted birds:", sortedBirds);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to group birds by first letter
  const groupBirdsByFirstLetter = (birds) => {
    const groupedBirds = {};
    birds.forEach((bird) => {
      const firstLetter = bird.name.charAt(0).toUpperCase();
      if (!groupedBirds[firstLetter]) {
        groupedBirds[firstLetter] = [];
      }
      groupedBirds[firstLetter].push(bird);
    });
    return groupedBirds;
  };

  const groupedBirds = groupBirdsByFirstLetter(birds);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const [isSticky, setIsSticky] = useState(false);
  const [visibleLetter, setVisibleLetter] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 80;
      const scrollPosition = window.scrollY;

      setIsSticky(scrollPosition > headerHeight);
      // Find the currently visible letter
      const letterGroups = document.querySelectorAll(".birdLetterGroup");
      for (const group of letterGroups) {
        const rect = group.getBoundingClientRect();
        if (rect.top <= headerHeight && rect.bottom >= headerHeight) {
          const letter = group.querySelector("h2").textContent;
          setVisibleLetter(letter);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Getting the navigation function from useNavigate
  const navigate = useNavigate();

  function handleClick(birdId) {
    // Function to handle the click event and navigate to the specific challenge
    navigate(`/birds/${birdId}`);
  }

  function hasBirdsStartingWith(letter) {
    return birds.some((bird) => bird.name.startsWith(letter));
  }
  return (
    <>
      <HeaderGeneral />
      <section className="birdsListAtlas">
        <div>
          {Object.entries(groupedBirds).map(([letter, birdGroup]) => (
            <div className="birdLetterGroup" key={letter}>
              <h2 id={letter}>{letter}</h2>
              <hr className="separator" />
              <div>
                {birdGroup.map((bird) => (
                  <div
                    className="birdItemAtlas"
                    key={bird.id}
                    onClick={() => handleClick(bird.id)}
                  >
                    {bird.images.length > 0 && (
                      <img
                        src={bird.images[0].image}
                        alt={`Image of ${bird.name}`}
                        className="birdItemAtlasImage"
                      />
                    )}

                    <div className="birdItemAtlasNames">
                      <h4>{bird.name}</h4>
                      <h5>{bird.nameLatin}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={`alphabetNav${isSticky ? " sticky" : ""}`}>
          {Array.from(alphabet).map((letter) => (
            <a
              href={`#${letter}`}
              key={letter}
              style={{
                fontWeight: letter === visibleLetter ? "bold" : "normal",
              }}
            >
              <span
                key={letter}
                className={`alphabet-letter ${
                  hasBirdsStartingWith(letter) ? "" : "no-birds"
                }`}
              >
                {letter}
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default AtlasPage;
