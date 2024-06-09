"use client";
import { useState } from "react";
import styles from "./attendance.module.scss";

export default function Attendance() {
    const [attendance, setAttendance] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [isLoading, setLoading] = useState(false);

    const [isSubmitted, setIsSubmitted] = useState(false);

    function Submit(e) {
        e.preventDefault();
        const formEle = document.querySelector("form");
        const formDatab = new FormData(formEle);

        formDatab.append("attendance", attendance);

        setLoading(true);
        fetch(
            "https://script.google.com/macros/s/AKfycbyO1YV6iU1L3tRZnmYXSEDZwbCwhRf2-ttsQl0NM2pMyDgp4wXyNrfIk0RamrFUNk-2bA/exec",
            {
                method: "POST",
                body: formDatab,
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setAttendance("");
                setTitle("");
                setText("");
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }

    if (isSubmitted) {
        return (
            <div className={styles.App}>
                <p className="text-center min-w-[300px] text-[18px] sm:text-[20px] mb-[10px]">
                    Cіздің жауабыңыз қабылданды!
                </p>
            </div>
        );
    }

    return (
        <div className={styles.App}>
            <div className="form center mb-12 mt-10">
                <p
                    className={` text-center xs:text-[22px] sm:text-[26px] mb-[10px] `}
                >
                    Тойға келетіңізді
                </p>

                <p
                    className={` text-center xs:text-[22px] sm:text-[26px] mb-[20px]`}
                >
                    Растауыңызды сұраймыз!
                </p>
                <div className="mx-auto relative mt-6">
                    <form className="form" onSubmit={(e) => Submit(e)}>
                        <div className="xs:mx-10">
                            <input
                                className="xs:text-[14px] h-[40px] border-[0.5px] border-gray-200 sm:text-[20px]"
                                placeholder="Атыңыз"
                                name="Name"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <textarea
                                className="h-[100px] xs:text-[14px] sm:text-[20px] w-full p-2 rounded-lg outline-none"
                                placeholder="Тілектеріңіз"
                                name="Message"
                                type="text"
                                onChange={(e) => setText(e.target.value)}
                                value={text}
                            />
                        </div>
                        <div className={styles.radio}>
                            <div className="flex items-center mb-2 ml-6">
                                <input
                                    type="radio"
                                    id="willAttend"
                                    value="Келемін"
                                    checked={attendance === "Келемін"}
                                    onChange={() => setAttendance("Келемін")}
                                />
                                <label htmlFor="willAttend" className="ml-2">
                                    Келемін
                                </label>
                            </div>
                            <div className="flex items-center mb-2 ml-6">
                                <input
                                    type="radio"
                                    id="willAttendWithWife"
                                    value="Жұбайымен"
                                    checked={attendance === "Жұбайымен"}
                                    onChange={() => setAttendance("Жұбайымен")}
                                />
                                <label
                                    htmlFor="willAttendWithWife"
                                    className="ml-2"
                                >
                                    Жұбайымен
                                </label>
                            </div>
                            <div className="flex items-center ml-6">
                                <input
                                    type="radio"
                                    id="cannotAttend"
                                    value="Келе алмаймын"
                                    checked={attendance === "Келе алмаймын"}
                                    onChange={() =>
                                        setAttendance("Келе алмаймын")
                                    }
                                />
                                <label htmlFor="cannotAttend" className="ml-2">
                                    Келе алмаймын
                                </label>
                            </div>
                        </div>
                        <div className="flex-1  flex justify-center mx-10 text-white">
                            <button
                                className={styles.button}
                                type="submit"
                                disabled={isLoading}
                            >
                                Жіберу
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
