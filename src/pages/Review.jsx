import React, { useState } from "react";
import "./styles/contact.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        reviews: "",
    });
    const [reviews, setReviews] = useState([
        { name: "William", reviews: "Merci beaucoup" },
    ]);
    const [showNotification, setShowNotification] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setReviews((prevReviews) => [...prevReviews, contactInfo]);
        setContactInfo({
            name: "",
            email: "",
            reviews: "",
        });
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="mx-auto max-w-2xl">
                <div className="text-center">
                    <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
                        Laisser un message
                    </h2>
                </div>

                <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 sm:mb-8">
                            <label
                                htmlFor="hs-feedback-post-comment-name-1"
                                className="block mb-2 text-sm font-medium dark:text-white"
                            >
                            </label>
                            <input required
                                type="text"
                                id="hs-feedback-post-comment-name-1"
                                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                name="name"
                                placeholder="Votre Nom"
                                value={contactInfo.name}
                                onChange={(e) =>
                                    setContactInfo({ ...contactInfo, name: e.target.value })
                                }
                            />
                        </div>

                        <div className="mb-4 sm:mb-8">
                            <label
                                htmlFor="hs-feedback-post-comment-email-1"
                                className="block mb-2 text-sm font-medium dark:text-white"
                            >
                            </label>
                            <input required
                                type="email"
                                id="hs-feedback-post-comment-email-1"
                                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                name="email"
                                placeholder="Adresse e-mail"
                                value={contactInfo.email}
                                onChange={(e) =>
                                    setContactInfo({ ...contactInfo, email: e.target.value })
                                }
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hs-feedback-post-comment-textarea-1"
                                className="block mb-2 text-sm font-medium dark:text-white"
                            >
                            </label>
                            <div className="mt-1">
                                <textarea required
                                    id="hs-feedback-post-comment-textarea-1"
                                    rows="3"
                                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                    name="reviews"
                                    placeholder="Message / Commentaire"
                                    value={contactInfo.reviews}
                                    onChange={(e) =>
                                        setContactInfo({ ...contactInfo, reviews: e.target.value })
                                    }
                                ></textarea>
                            </div>
                        </div>

                        <div className="mt-6 grid">
                            <button
                                type="submit"
                                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800"
                            >
                                Soumettre
                            </button>
                        </div>
                    </form>
                </div>

                <div className="mt-8">
                    {showNotification && (
                        <div className="text-green-500 mb-4">
                            Avis soumis avec succès!
                        </div>
                    )}
                    <Slider
                        id="carouselExampleCaptions"
                        className="relative"
                        data-te-carousel-init
                        data-te-carousel-slide
                        prevArrow={(
                            <button
                                className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none dark:text-white dark:opacity-50 dark:hover:text-white dark:focus:text-white"
                                type="button"
                                data-te-target="#carouselExampleCaptions"
                                data-te-slide="prev"
                            >
                                <span className="inline-block h-8 w-8">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 19.5L8.25 12l7.5-7.5"
                                        />
                                    </svg>
                                </span>
                                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                    Modifier
                                </span>
                            </button>
                        )}
                        nextArrow={(
                            <button
                                className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none dark:text-white dark:opacity-50 dark:hover:text-white dark:focus:text-white"
                                type="button"
                                data-te-target="#carouselExampleCaptions"
                                data-te-slide="next"
                            >
                                <span className="inline-block h-8 w-8">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </span>
                                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                    Suivant
                                </span>
                            </button>
                        )}
                    >
                        {reviews.map((review, index) => (
                            <div
                                className="relative text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                style={{ backfaceVisibility: "hidden" }}
                                key={index}
                            >
                                <p className="mx-auto max-w-4xl text-xl italic text-neutral-700 dark:text-neutral-300">
                                    {review.reviews}
                                </p>
                                <div className="mb-6 mt-12 flex justify-center">
                                    <img
                                        src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?q=10&h=200"
                                        className="h-24 w-24 rounded-full shadow-lg dark:shadow-black/30"
                                        alt="sample image"
                                    />
                                </div>
                                <p className="text-neutral-500 dark:text-neutral-300">- {review.name}</p>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>
        </div>
    );
};

export default Review;
