import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { SkipBack } from "lucide-react";

const category = [
  "Front Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
  "UI/UX Designer",
  "Content Writer",
  "QA Engineer",
  "DevOps Engineer",
];

const CategoryCarousel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  // autoplay plugin reference
  const autoplay = useRef(
    Autoplay({
      delay: 2000, // slide every 2 seconds
      stopOnInteraction: false,
      stopOnMouseEnter: false,  
    })
  );

  return (
    <div>
      <Carousel
        className="w-full max-w-xl mx-auto my-20"
        plugins={[autoplay.current]}
         // enable autoplay
         opts= {{
            loop : true,
            align: "start",
            SkipSnaps: false,
            slidesToScroll: 1,
            dragFree: true
         }}
      >
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg-basis-1/3"
            >
              <Button
                onClick={() => searchJobHandler(cat)}
                className="bg-[#6A38C2] hover:bg-[#5b30a6] cursor-pointer"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
