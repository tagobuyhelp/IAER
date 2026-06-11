"use client";
import React, { useState } from "react";
import { AnotherHeader } from "@/components/common/AnotherHeader";
import CoursesLandingFooter from "@/components/global/CoursesLandingFooter";
import HeroSection from "@/components/DataAnalyticsAiLanding/HeroSection";
import StudentsWorkingInCompanies from "@/components/common/student-working-in-companies";
import CourseHighlights from "@/components/DataAnalyticsAiLanding/CourseHighlights";
import SkillsCurriculum from "@/components/DataAnalyticsAiLanding/SkillsCurriculum";
import CareerScope from "@/components/DataAnalyticsAiLanding/CareerScope";
import PlacementSupport from "@/components/DataAnalyticsAiLanding/PlacementSupport";
import BottomNavBar from "@/components/DataAnalyticsAiLanding/BottomNavBar";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import LandingAdmissionForm from "@/components/common/LandingAdmissionForm";

import CertifiedStudent from "@/app/recentplacements/CertifiedStudent";
import { alumniStudents } from "@/data/alumniStudentsData";
import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";

const testimonialsData = {
  TestimonialsData: [
    {
      id: 1,
      name: "Nidhi Agarwal",
      rating: 5,
      text: `"Is course ke baad 50% salary hike mili! Data Analytics with AI is a must-have skill in today's time. The Python, SQL, and AI tools integration (like ChatGPT for writing queries) taught at EME Academy are just amazing."`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 2,
      name: "Aniket Sharma",
      rating: 5,
      text: `"I had no prior coding experience, but EME Academy's Data Analytics with AI Course made it so simple! The live projects and AI-driven predictive modeling gave me the confidence to ace my interview."`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 3,
      name: "Arindam Banerjee",
      rating: 5,
      text: `"Ami kokhono bhabini AI-powered Data Analytics amake ei rokom career growth debe. EME Academy'r guidance ar Power BI & Tableau er integration with AI tools amar career-e onek boro change ene diyeche."`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 4,
      name: "Rituparna Ghosh",
      rating: 5,
      text: `"Training sesh howar agei interview call peyechilam. Learning predictive analytics and data forecasting models with AI help helped me secure a premium Business Analyst position!"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
  ],
  title: "Students",
  titleHighlight: "Testimonials",
};

export default function DataAnalyticsAiClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ctaType, setCtaType] = useState("normal"); // "normal" or "download"

  const Courses = "Data Analytics with AI Course";
  const email_sender = "ALL";
  const Brochure = "https://drive.google.com/file/d/1eGFi7GlCRTLehu5nljGHAwOyFvdwUFiJ/view?usp=sharing"; // using standard DA brochure as placeholder
  const BrochureName = "data_analytics_ai_brochure.pdf";
  const _this = {
    Courses,
    email_sender,
    Brochure,
    BrochureName,
    isModalOpen,
    setIsModalOpen,
    ctaType,
    setCtaType,
  };

  return (
    <main className="flex flex-col w-full min-h-screen bg-white">
      <AnotherHeader />
      
      <div id="overview">
        <HeroSection _this={_this} />
      </div>
      <div id="curriculum">
        <SkillsCurriculum _this={_this} />
      </div>
      <div className="flex w-full flex-col h-full max-h-[640px] bg-[#ffffff] bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px] pb-8 sm:pb-12">
        <StudentsWorkingInCompanies
          courses={Courses}
          brochure={Brochure}
          brochureName={BrochureName}
          SelectCourses={[Courses]}
        />
      </div>
      <div id="highlights">
        <CourseHighlights _this={_this} />
      </div>
      
      <div id="career">
        <CareerScope _this={_this} />
      </div>
      <PlacementSupport _this={_this} />
      
      <div className="flex flex-col w-full bg-[#F4FBFE] px-6 pb-8">
        <CertifiedStudent
          {..._this}
          students={alumniStudents}
          title={"Our Alumni "}
          titleHighlight={"Leading the World"}
          subtitle={
            "750+ Students placed last year alone! Salary Ranges from ₹40,000 to ₹70,000 per month"
          }
        />
      </div>

      <div id="testimonials" className="flex w-full bg-white py-8">
        <CoursesTestimonials {...testimonialsData} />
      </div>

      <div className="flex flex-col justify-center w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100% py-8">
        <NewsHomeLanding {..._this} />
      </div>
      
      <CoursesLandingFooter courseName="Data Analytics with AI Course" {..._this} />
      <BottomNavBar _this={_this} />

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="fixed w-fit top-[50%] rounded-lg z-[9999]">
          <VisuallyHidden>
            <DialogTitle>Admission Form</DialogTitle>
          </VisuallyHidden>
          <div className="w-full">
            <LandingAdmissionForm {..._this} />
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
