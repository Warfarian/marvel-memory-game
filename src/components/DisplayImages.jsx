    import { useEffect, useState} from "react";

    let images = [ "https://thronesapi.com/assets/images/cersei.jpg", "https://thronesapi.com/assets/images/jon-snow.jpg","https://thronesapi.com/assets/images/jaime-lannister.jpg","https://thronesapi.com/assets/images/daenerys.jpg","https://thronesapi.com/assets/images/arya-stark.jpg" ,"https://thronesapi.com/assets/images/tyrion-lannister.jpg", 
        "https://thronesapi.com/assets/images/varys.jpg","https://thronesapi.com/assets/images/the-hound.jpg","https://thronesapi.com/assets/images/sansa-stark.jpeg","https://thronesapi.com/assets/images/davos-seaworth.png"]




    function DisplayImages(){
        const [image,setImage] = useState(images);
        
        function jumbleImages(){
            let shuffled = [...images];
            for (let i = 0; i<shuffled.length; i++){
                let j = Math.floor(Math.random() * (i + 1));
                [shuffled[i],shuffled[j]] = [shuffled[j],shuffled[i]];
            } 
            return shuffled;
        }
    
        function handleShuffle(){
            setImage(jumbleImages());
        }
        
        return(
            <div className="images"> 
                    <img id="0" src= {image[0]} alt="" onClick={handleShuffle} />
                    <img id="1" src= {image[1]}  alt="" onClick={handleShuffle} />
                    <img id="2" src= {image[2]}  alt="" onClick={handleShuffle} />
                    <img id="3" src= {image[3]} alt="" onClick={handleShuffle} />
                    <img id="4" src= {image[4]} alt="" onClick={handleShuffle} />
                    <img id="5" src= {image[5]} alt="" onClick={handleShuffle} />
                    <img id="6" src= {image[6]} alt=""  onClick={handleShuffle} />
                    <img id="7" src= {image[7]} alt=""  onClick={handleShuffle} />
                    <img id="8" src= {image[8]} alt="" onClick={handleShuffle}  />
                    <img id="9" src= {image[9]} alt="" onClick={handleShuffle} />
            </div>
        )
    }


    export {DisplayImages}

