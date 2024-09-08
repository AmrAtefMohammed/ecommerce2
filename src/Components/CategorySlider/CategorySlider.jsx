import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { useQuery } from "@tanstack/react-query";
import useAllCategories from "../../CustomHook/useAllCategories";

export default function CategorySlider() {

    const {data, isError, isFetching, isLoading, isSuccess} = useAllCategories()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
    };
    return (
        isSuccess ?
            <div className="slider-container">
            <Slider {...settings}>
                {data.data.data?.map((category) => {return(<>
                    <div key={category._id} className="rounded-xl overflow-hidden">
                        <img src={category.image} className="w-full h-64 cursor-pointer" alt={category.name} />
                        <h2 className="text-center font-bold text-lg font-mono text-black my-3">{ category.name }</h2>
                    </div>
                </>)
                })}
                
                </Slider>
            </div> : isLoading ? <LoadingScreen/> : ""
    );
}


