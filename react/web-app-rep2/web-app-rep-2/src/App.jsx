import React from "react";
import NavBar from "./pages/Navbar";
import Footer from "./pages/Footer";
import ProfileCard from "./pages/ProfileCard";
import "./App.scss";
import Alex from "./assets/alex.jpg";
import Jessica from "./assets/jessica.jpg";
import Marcus from "./assets/marcus.jpg";
import Samantha from "./assets/samantha.jpg";

const trainers = [
  {
    name: "Alex Johnson",
    image: Alex,
    specialty: "Strength Training and Weight Loss",
    yearsExperience: 8,
    licenses: [
      "Certified Personal Trainer (CPT)",
      "Certified Nutrition Specialist (CNS)",
      "Functional Movement Systems (FMS)",
    ],
    quote: "Transform your mind, and your body will follow.",
  },
  {
    name: "Samantha Lee",
    image: Samantha,
    specialty: "Yoga and Mindfulness",
    yearsExperience: 6,
    licenses: [
      "Registered Yoga Teacher (RYT-500)",
      "ACE Group Fitness Certification",
      "Meditation Instructor Certification",
    ],
    quote: "Balance is not something you find, it’s something you create.",
  },
  {
    name: "Marcus Smith",
    image: Marcus,
    specialty: "Athletic Performance and Injury Prevention",
    yearsExperience: 10,
    licenses: [
      "Certified Strength and Conditioning Specialist (CSCS)",
      "USA Weightlifting Level 1 Coach",
      "NASM Corrective Exercise Specialist (CES)",
    ],
    quote: "Train smarter, play harder.",
  },
  {
    name: "Jessica Rivera",
    image: Jessica,
    specialty: "Cardio Fitness and Endurance",
    yearsExperience: 7,
    licenses: [
      "Certified Personal Trainer (CPT)",
      "RRCA Certified Running Coach",
      "First Aid and CPR Certified",
    ],
    quote: "Every step forward is a step closer to your goal.",
  },
];

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Personal Trainer Profiles</h1>
      <div className="profile-cards">
        {trainers.map((trainer, index) => (
          <ProfileCard key={index} trainer={trainer} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
