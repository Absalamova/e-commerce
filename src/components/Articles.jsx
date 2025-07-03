import React from "react";

 
import maskImage from "../assets/maskImage.png";
import springImage from "../assets/springImage.png";
import foodImage from "../assets/foodImage.png";

const articles = [
    {
        id: 1,
        date: "05.03.2021",
        title: "Режим использования масок и перчаток на территории магазинов",
        description:
            'Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.',
        image: maskImage,
    },
    {
        id: 2,
        date: "05.03.2021",
        title: "Весеннее настроение для каждой",
        description:
            "8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.",
        image: springImage,
    },
    {
        id: 3,
        date: "22.02.2020",
        title: "ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!",
        description:
            "Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!",
        image: foodImage,
    },
];

export default function Articles() {
    return (
        <div className="max-w-[1200px] mx-auto py-14">
            <div className="container mx-auto px-4">
                
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Статьи</h2>
                    {/* <a
                        href="#"
                        className="text-sm text-gray-600 hover:text-black transition-all"
                    >
                        Все статьи &gt;
                    </a> */}
                </div>
 
                <div className="grid md:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <div
                            key={article.id}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <p className="text-sm text-gray-500 mb-1">{article.date}</p>
                                <h3 className="text-md font-semibold text-gray-800 leading-snug">
                                    {article.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-2">{article.description}</p>
                                <button className="mt-4 bg-green-100 text-green-700 hover:bg-green-200 text-sm font-medium py-2 px-4 rounded transition duration-200">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
