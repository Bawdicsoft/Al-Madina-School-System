import AnimationBottom from "@/components/animations/AnimationBottom";
import AnimatedComponentLeft from "@/components/animations/AnimationLeft";
import AnimatedComponentRight from "@/components/animations/AnimationRigth";
import React from "react";

export const StudentLifeImages = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 place-items-center max-w-7xl mx-auto lg:grid-cols-4 pt-20 pb-32 px-5">
        <AnimatedComponentLeft>
          <img
            className="h-80 w-64 rotate-6"
            src="https://c8.alamy.com/comp/2RM7BNB/happy-kid-and-headphones-with-tablet-in-bedroom-to-watch-movies-video-game-and-elearning-app-boy-child-smile-with-digital-technology-for-multimedia-2RM7BNB.jpg"
            alt="image"
          />
        </AnimatedComponentLeft>
        <AnimationBottom>
          <img
            className="h-80 w-72 -rotate-3"
            src="https://thumbs.dreamstime.com/z/girl-eating-fruit-cocktail-next-to-laptop-vegetarian-food-near-89207927.jpg"
            alt="image"
          />
        </AnimationBottom>
        <AnimationBottom>
          <img
            className="h-80 w-64 rotate-6"
            src="https://media.istockphoto.com/id/1331173222/photo/cheerful-little-girl-having-cereals-for-breakfast-at-home.jpg?s=612x612&w=0&k=20&c=qq7Ir2a84JNadGJo-bgMKulP9cRbzWMxV51yzTr6K1c="
            alt="image"
          />
        </AnimationBottom>
        <AnimatedComponentRight>
          <img
            className="h-80 w-72 -rotate-6"
            src="https://www.shutterstock.com/image-photo/school-boy-glasses-playing-piano-600nw-1951034029.jpg"
            alt="image"
          />
        </AnimatedComponentRight>
      </div>
    </div>
  );
};
