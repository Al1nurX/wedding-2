"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Main.module.scss";
import music from "../../../public/images/music.png";
import muz from "../../assets/muzik.mp3";

export default function Main() {
    const [audio, setAudio] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        setAudio(new Audio(muz));
    }, []);

    function play() {
        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlaying(!isPlaying);
        }
    }

    function scrollToNextSection() {
        console.log("Scrolling to next section...");
        const nextSection = document.getElementById("next-section");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        } else {
            console.error("Next section not found");
        }
    }

    return (
        <>
            <div className="flex bg-cover bg-center bg-no-repeat bg-[url('/images/wedding-2.jpeg')] h-screen w-full flex-col items-center relative">
                <div className="flex justify-center">
                    <button
                        className={`absolute bottom-[200px] right-0 h-[180px] w-[180px]  ${
                            isPlaying ? styles["animate-spin"] : ""
                        }`}
                        onClick={play}
                    >
                        <Image src={music} alt="musik" />
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-custom text-center text-black absolute bottom-0">
                    <div className="w-screen flex flex-col gap-4 items-center py-5 justify-center">
                        <h1 className="text-4xl font">А & Қ</h1>
                        <h2 className="text-3xl font">Амангелді Құралай</h2>
                        <div className="flex flex-row items-center gap-10">
                            <div className="border border-black rotate-90 h-12"></div>{" "}
                            <h2 className="text-2xl m-0 font">02. 08. 2024</h2>
                            <div className="border border-black rotate-90 h-12"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="next-section" className="mt-10"></div>
        </>
    );
}
