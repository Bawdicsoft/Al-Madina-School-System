import { AboutSchool } from "@/components/school/AboutSchool";
import React from "react";

export const SchoolInsights = () => {
  return (
    <div className="py-20">
      <AboutSchool
        title={"School insights"}
        subtitle={"Latest insights from our school"}
        buttonTile={"View all insights"}
      />
    </div>
  );
};
