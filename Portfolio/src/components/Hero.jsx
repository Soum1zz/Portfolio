import myImg from "../assets/my-img.jpeg";
import "../styles/hero.css";
import { useEffect, useState } from "react";

export default function Hero() {
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const x = e.clientX;
      const y = e.clientY;

      //offset from center
      const offsetX = (x - width / 2) / (width / 2);
      const offsetY = (y - height / 2) / (height / 2);
      //move opposite
      const moveX = -offsetX * 30;
      const moveY = -offsetY * 30;

      setTransform({ x: moveX, y: moveY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="hero-div" >
        <div className="hover-container">
          <div
            className="frame"
            style={{
              transform: `translate(${transform.x / 3}px, ${transform.y / 3}px)`,
              transition: "transform 0.3s ease",
              border: "10px solid black",
              width: "480px",
              height: "550px",
              boxSizing: "border-box",
            }}
          ></div>
          <div
            className="bg-box"
            style={{
              transform: `translate(${transform.x}px, ${transform.y}px)`,
              transition: "transform 0.3s ease",
            }}
          ></div>
          <img
            src={myImg}
            alt="Profile"
            className="img"
            width={400}
            style={{
              transform: `translate(${transform.x / 2}px, ${transform.y / 2}px)`,
              transition: "transform 0.3s ease",
            }}
          />
        </div>
        <div className="my-desc">
          <div className="name">
            Soumallya <br />
            Naskar
          </div>
          <div className="hori-line"></div>

          <br />
          <div className="text">
            A web developer with a strong interest in building modern, responsive
            applications using contemporary web technologies. I focus on writing
            clean, maintainable code and creating intuitive user experiences.
          </div>
        </div>
    </div>
  );
}
