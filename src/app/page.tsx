"use client";
import Image from "next/image";
import Main from "../components/Main";
import flower from "../../public/images/flower.png";
import flowerSecond from "../../public/images/flowerSecond.png";
import Attendance from "../components/Attendance";
import Date from "../components/Date";
import toi from "../../public/images/toi.png";
import toi2 from "../../public/images/toi2.png";
import Social from "../components/social";
import insta from "../../public/images/insta.png";
import gis from "../../public/images/gis.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import form from "../../public/images/form.png";
import heart from "../../public/images/heart.png";
import Calendar from "@/components/Calendar";
import ToiBagdarlamasi from "../components/ToiBagdarlamasi";

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className="flex flex-col text-center ">
            <Main />
            <Image
                width={250}
                height={250}
                className="mx-auto mt-[-20px]"
                src={flower}
                alt="logo"
            />
            <div
                className="mt-[-150px] text-center text-2xl leading-normal"
                data-aos="fade-up"
            >
                <p>Құрметті ағайын-туыс</p>
                <p> бауырлар,</p>
                <p>құда-жекжат, нағашылар,</p>
                <p>бөле-жиендер,дос-жарандар, көршілер</p>
                <p>және әріптестер!</p>
            </div>
            <Image
                className="mx-auto mt-[-40px] mb-5"
                src={flowerSecond}
                alt="logo"
                width={100}
                height={100}
            />

            <div
                className="mt-[-50px] text-2xl text-center leading-normal"
                data-aos="fade-up"
            >
                <p>Cіз(дер)ді ұлымыз</p>
                <h2 className="text-4xl font color ">Амангелді</h2>
                <p>пен келініміз</p>
                <h2 className="text-4xl color font">Құралай</h2>
                <p>үйлену тойына арналған</p>
                <p>салтанатты ақ</p>
                <p>дастарханымыздың</p>
                <p>Қадірлі қонағы болуға</p>
                <p>шақырамыз</p>
            </div>
            <Image
                className="mx-auto mt-[-50px]"
                src={flowerSecond}
                alt="logo"
                width={140}
                height={140}
            />
            <div
                className="mt-[-50px] text-3xl leading-relaxed color text-center font"
                data-aos="fade-up"
            >
                <p>той салтанаты:</p>
                <p>2 тамыз 2024 жыл</p>
                <p>сағат 18:00 БАСТАЛАДЫ</p>
            </div>

            <Calendar />

            <Image
                className="mx-auto mt-[-30px]"
                src={flowerSecond}
                alt="logo"
                width={150}
                height={150}
            />

            <div
                className="mt-[-50px] text-3xl leading-relaxed font"
                data-aos="fade-up"
            >
                <h2>Той иелері:</h2>
                <h2 className="color">Жанатбек - Жұлдыз</h2>
            </div>

            <p className="mt-[50px] text-2xl">Тойға дейін:</p>
            <Date />

            <div
                className="mt-10 text-3xl leading-relaxed font"
                data-aos="fade-up"
            >
                <p>Мекен-жайымыз:</p>
                <p>Теміртау қаласы</p>
                <p>Желтоқсан көшесі</p>
                <p>Дастархан</p>
                <p>Мейрамханасы</p>
            </div>

            <div className="flex justify-center gap-10">
                <a href="https://www.instagram.com/dastarkhan_ball_room1/">
                    <Image
                        className="mt-5 mb-10"
                        height={50}
                        width={50}
                        src={insta}
                        alt="Instagram"
                    />
                </a>
                <a href="https://2gis.kz/almaty/firm/70000001054903375">
                    <Image
                        className="mt-5 mb-10 gis"
                        height={50}
                        width={50}
                        src={gis}
                        alt="GIS"
                    />
                </a>
            </div>

            <ToiBagdarlamasi />

            <h2 className="mt-10 mb-5 text-3xl ">Той хештегі:</h2>
            <div
                className="text-center text-xl leading-normal"
                data-aos="fade-up"
            >
                <p>Егер инстаграм немесе басқа</p>
                <p>әлеуметтік желілерде</p>

                <p>бөлісеңіз,сіздерді осы хештегті</p>
                <p>қолдануды сұраймыз</p>
                <h3 className="text-3xl mt-5 font">#Алмас_Арай</h3>
            </div>

            <h2 className="mt-10 mb-5 text-3xl">Дресс код:</h2>
            <div className="flex justify-center gap-20">
                <div>
                    <Image
                        className="mt-10 mb-10 "
                        height={100}
                        width={100}
                        src={toi}
                        alt="calendar"
                    />
                    <div className="mt-[-25px] text-[25px] font" data-aos="fade-up">
                        <p>Ерлер қауымы</p>
                        <p>Классикалық</p>
                        <p>Костюм</p>
                    </div>
                </div>

                <div>
                    <Image
                        className="mt-10 mb-10 ml-3"
                        height={100}
                        width={100}
                        src={toi2}
                        alt="calendar"
                    />
                    <div className="mt-[-25px] text-[25px] font" data-aos="fade-up">
                        <p>Әйелдер қауымы</p>
                        <p>Кешкі көйлек</p>
                    </div>
                </div>
            </div>
            <Attendance />

            <h2 className="mt-5  text-3xl color font">Оспановтар әулеті </h2>
            <p className="text-2xl leading-relaxed mb-10 color font">
                сіздерді күтеді!
            </p>
        </div>
    );
}
