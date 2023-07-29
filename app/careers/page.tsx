"use client";

import JobCard from "@components/cards/JobCard";
import React, { useState } from "react";

const Careers = () => {
  const [activeJobId, setActiveJobId] = useState("");

  const Jobs = [
    {
      _id: "1",
      title: "Graphic Designer",
      category: "Design",
      reportsTo: "Project Manager",
      employment: "Paid internship",
      employmentTerms: "Fixed contract [3-6months]",
      location: "Kampala, Uganda",
      details: {
        responsibilities: [
          "Illustrate written concepts by design",
          "Plan and study concepts",
          "Create a variety of company work",
          "Review layouts & improvements",
          "Digitally market company products & services",
          "Visit clients and offer different services",
          "Communicate to different audiences visually",
          "Additional skills are a plus 1",
        ],
        requirements: [
          "Creative ,curious and a good team player",
          "Digital Media experience",
          "Experience in seo, visual story telling",
          "Experience in motion and design",
          "Super interpersonal skills, listening & more",
          "Photoshop, illustrator & video editing & more",
          "Competency in Microsoft applications",
          "Clear understanding of marketing, production, corporate identity, packaging, advertisements & multi-media design",
          "A bachelor degree in design or marketing or a related field",
        ],
      },
      salary: "Fixed payment & commission based",
      condition: "NAN",
      closingDate: "21st August 2023.",
    },
    {
      _id: "2",
      title: "Junior developer",
      category: "Software development",
      reportsTo: "Product Designer",
      employment: "Paid internship",
      employmentTerms: "Fixed contract [3-12months]",
      location: "Kampala, Uganda",
      details: {
        responsibilities: [
          "Writing & maintaining code",
          "Bug fixing",
          "Create small creative solutions",
          "Work with developing manager in all aspects",
          "Monitor Technical performance of systems",
          "Conduct development tests",
          "Gather customer feedback about program functionality",
          "Customer care & technical assistance",
        ],
        requirements: [
          "Creative curiosity",
          "Clear execution knowledge",
          "Sound programming experience",
          "Excellent communication skills",
          "Bachelor’s degree in computer science",
          "Prior experience in IOS & Android development",
          "Clear practical Coding knowledge React Js, next Js , node Js front & backend",
          "Clear knowledge of email systems & Microsoft office software",
          "Good team player",
          "Quick to learn new software & technologies",
          "Good Digital experience knowledge",
          "Any extra skills are a plus 1",
        ],
      },
      salary: "Fixed payment & commission based",
      condition: "1 month probation",
      closingDate: "21st August 2023.",
    },
    {
      _id: "3",
      title: "Sales person",
      category: "Sales",
      reportsTo: "Director of sales",
      employment: "Part time",
      employmentTerms: "Fixed contract [3-6months]",
      location: "Kampala, Ntinda & Entebbe",
      details: {
        responsibilities: [
          "Generate both online and offline leads",
          "Door-to-door sales",
          "Develop digital communities",
          "Promote company programs",
          "Negotiate with clients and answer questions",
          "Attend events for brand promotions",
          "Visit clients and offer different services",
          "Find out different client needs",
          "Additional skills are a plus 1",
        ],
        requirements: [
          "Creative, curious and a good team player",
          "Digital Media experience",
          "Experience in sales",
          "Super interpersonal skills, quick rapport",
          "Committed to excellent customer service",
          "Competency in Microsoft applications",
          "Excellent written and verbal skills",
          "A bachelor degree in business, agriculture or marketing or a related field",
        ],
      },
      salary: "Fixed payment & commission based",
      condition: "NAN",
      closingDate: "21st August 2023.",
    },
  ];
  return (
    <div>
      <div className={"flex py-4"}>
        <div className="m-auto w-4/5">
          <div className="py-4">
            <h3 className="text-3xl">Join our team</h3>
            <p className="text-lg my-1">Available positions</p>
          </div>
          <div className="py-4 px-8">
            {Jobs.map((job, index) => (
              <JobCard
                key={index}
                {...job}
                setActiveJobId={setActiveJobId}
                activeId={activeJobId}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;