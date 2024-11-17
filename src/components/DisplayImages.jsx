import { useState, useEffect } from "react";

const images = [
  { id: "cersei", src: "https://thronesapi.com/assets/images/cersei.jpg" },
  { id: "jon-snow", src: "https://thronesapi.com/assets/images/jon-snow.jpg" },
  { id: "jaime-lannister", src: "https://thronesapi.com/assets/images/jaime-lannister.jpg" },
  { id: "daenerys", src: "https://thronesapi.com/assets/images/daenerys.jpg" },
  { id: "arya-stark", src: "https://thronesapi.com/assets/images/arya-stark.jpg" },
  { id: "tyrion-lannister", src: "https://thronesapi.com/assets/images/tyrion-lannister.jpg" },
  { id: "varys", src: "https://thronesapi.com/assets/images/varys.jpg" },
  { id: "the-hound", src: "https://thronesapi.com/assets/images/the-hound.jpg" },
  { id: "sansa-stark", src: "https://thronesapi.com/assets/images/sansa-stark.jpeg" },
  { id: "davos-seaworth", src: "https://thronesapi.com/assets/images/davos-seaworth.png" }
];

function DisplayImages({ countScore }) {
  const [image, setImage] = useState(images);  
  const [clickedImages, setClickedImages] = useState([]);

  function jumbleImages() {
    let shuffled = [...image];
    for (let i = 0; i < shuffled.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  
  useEffect(() => {
    setImage(jumbleImages());
  }, []);

  function handleShuffle(event) {
    const clickedImageId = event.target.id;
    
    if (clickedImages.includes(clickedImageId)) {
      setClickedImages([]); 
      countScore(false, event); 
    } else {
      setClickedImages((prev) => [...prev, clickedImageId]);
      countScore(true, event); 
    }

    setImage(jumbleImages());  
  }

  return (
    <div className="images">
      {image.map((img) => (
        <img
          key={img.id}
          id={img.id}
          src={img.src}
          alt={img.id}
          onClick={handleShuffle}
        />
      ))}
    </div>
  );
}

export { DisplayImages };
