import React from "react";

const trainers = [
  {
    name: "Alex Johnson",
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

const personalTrainingQuotes = [
  "Push yourself because no one else is going to do it for you.",
  "Your body can stand almost anything. It’s your mind you have to convince.",
  "Don’t limit your challenges. Challenge your limits.",
  "It’s not about being the best. It’s about being better than you were yesterday.",
  "The difference between a successful person and others is not a lack of strength but a lack of will.",
  "Small progress is still progress. Keep moving forward.",
  "Strength doesn’t come from what you can do. It comes from overcoming the things you thought you couldn’t.",
  "Your health is an investment, not an expense. Commit to it.",
  "Motivation is what gets you started. Habit is what keeps you going.",
  "A year from now, you’ll wish you had started today.",
  "The pain you feel today will be the strength you feel tomorrow.",
  "Sweat is just fat crying. Keep pushing!",
];

const getRandomQuotes = () => {
  const shuffled = personalTrainingQuotes.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);
  selected.forEach((quote, index) => {
    console.log(`Quote ${index + 1}: ${quote}`);
  });
};

const ProfileCard = ({ trainer }) => (
  <div className="profile-card">
    <div className="top">
      <div className="name">
        <h2>{trainer.name}</h2>
      </div>
    </div>
    <div className="middle">
      <div className="trainer-img">
        <img src={trainer.image} alt="" />
      </div>
      <div className="highlights">
        <p>
          <strong>Specialty:</strong> {trainer.specialty}
        </p>
        <p>
          <strong>Experience:</strong> {trainer.yearsExperience} years
        </p>
        <div className="licenses">
          <p>
            <strong>Licenses:</strong>
          </p>
          <ul>
            {trainer.licenses.map((license, index) => (
              <li key={index}>{license}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="bottom">
      <div className="card-footer">
        <blockquote>{trainer.quote}</blockquote>
        <button onClick={getRandomQuotes} className="action-button">
          Favorite Quotes
        </button>
      </div>
    </div>
  </div>
);

export default ProfileCard;
