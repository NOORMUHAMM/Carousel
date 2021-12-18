import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
const ImgDiv=styled.div`
width: 400px;
height: 400px;
margin: auto;
`
const Carousel = () => {
    const images = [
        "https://thumbs.dreamstime.com/z/branch-blue-fir-tree-branch-blue-fir-tree-snow-winter-day-background-toned-imgage-selective-focus-98956733.jpg",
        "https://media.istockphoto.com/photos/strand-and-ca…arch-concept-3d-rendering-of-picture-id1088833254",
        "	https://picjumbo.com/wp-content/uploads/alone-with-his-thoughts-1570x1047.jpg",
        "https://media.istockphoto.com/photos/strand-and-ca…arch-concept-3d-rendering-of-picture-id1088833254"
      ];
      const [index, setIndex] = useState(0);
      const timeoutRef = useRef(null);
       const [isForward,setIsForward]=useState(true)
      function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    
      useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>{
            if(index===2){
               setIsForward(false);
            }else if(index===1){
               setIsForward(true)
            }
           setIndex(prev=>(isForward)?prev+1:prev-1)
           console.log(index)
          }
        ,3000);
    
        return () => {
          resetTimeout();
        };
      }, [index,isForward]);
    
    return (
        <div className="App">
      {/* <div className="imgDiv"> */}
        <ImgDiv>
        <img
          src={images[index]}
          alt="loading"
          style={{ width: "400px", margin: "auto" }}
        />
        </ImgDiv>
      {/* </div> */}
      <div className="Container">
        <button className={index===0 && "black"} onClick={()=>setIndex(0)}></button>
        <button className={index===1 && "black"} onClick={()=>setIndex(1)}></button>
        <button className={index===2 && "black"}onClick={()=>setIndex(2)}></button>
      </div>
    </div>
    )
}

export default Carousel
