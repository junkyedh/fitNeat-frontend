// workout img
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img8 from "../assets/8.jpg";

// nutrition img
import food1 from "../assets/4.jpg";
import food2 from "../assets/7.jpg";
import food3 from "../assets/9.jpg";
import food4 from "../assets/7.jpg";
import food5 from "../assets/delicious2.jpg";
import food6 from "../assets/delicious4.jpg";
import food7 from "../assets/delicious4.jpg";
import food8 from "../assets/delicious5.jpg";

// tour detail img
import image1 from "../assets/images/new/1.jpg";
import image2 from "../assets/images/new/2.jpg";
import image3 from "../assets/images/new/3.jpg";
import image4 from "../assets/images/new/4.jpg";
import image5 from "../assets/images/new/5.jpg";
import image6 from "../assets/images/new/6.jpg";
import image7 from "../assets/images/new/7.jpg";
import image8 from "../assets/images/new/8.jpg";

export const workoutData = [
  {
    image: img1,
    title: "Morning Yoga",
    time: "30 mins",
    calo: "120 kcal",
    type: "Beginner",
  },
  {
    image: img2,
    title: "HIIT Cardio",
    time: "20 mins",
    calo: "250 kcal",
    type: "Advanced",
  },
  {
    image: img3,
    title: "Full Body Strength",
    time: "45 mins",
    calo: "300 kcal",
    type: "Intermediate",
  },
  {
    image: img8,
    title: "Pilates Core",
    time: "35 mins",
    calo: "150 kcal",
    type: "Beginner",
  },
  {
    image: img5,
    title: "Evening Run",
    time: "40 mins",
    calo: "400 kcal",
    type: "Intermediate",
  },
  {
    image: img6,
    title: "Dance Fitness",
    time: "50 mins",
    calo: "350 kcal",
    type: "My Routine",
  },
  {
    image: img1,
    title: "Cycling Session",
    time: "60 mins",
    calo: "500 kcal",
    type: "Advanced",
  },
  {
    image: img8,
    title: "Strength Training",
    time: "30 mins",
    calo: "200 kcal",
    type: "My Routine",
  },
  {
    image: img2,
    title: "Kickboxing Basics",
    time: "40 mins",
    calo: "350 kcal",
    type: "Intermediate",
  },
  {
    image: img5,
    title: "Bodyweight Exercises",
    time: "25 mins",
    calo: "180 kcal",
    type: "Beginner",
  },
  {
    image: img3,
    title: "Swimming for Fitness",
    time: "50 mins",
    calo: "450 kcal",
    type: "Intermediate",
  },
  {
    image: img8,
    title: "Yoga Flow",
    time: "30 mins",
    calo: "130 kcal",
    type: "Beginner",
  },
  {
    image: img6,
    title: "Tabata Training",
    time: "20 mins",
    calo: "300 kcal",
    type: "Advanced",
  },
  {
    image: img1,
    title: "Mountain Biking",
    time: "45 mins",
    calo: "400 kcal",
    type: "Advanced",
  },
  {
    image: img2,
    title: "Tennis Drills",
    time: "30 mins",
    calo: "250 kcal",
    type: "Intermediate",
  },
];



export const nutritionData = [
  {
    image: food1,
    title: "Grilled Chicken Salad",
    time: "15 mins",
    calo: "250 kcal",
  },
  {
    image: food2,
    title: "Avocado Toast",
    time: "10 mins",
    calo: "200 kcal",
  },
  {
    image: food3,
    title: "Beef Stir Fry",
    time: "25 mins",
    calo: "350 kcal",
  },
  {
    image: food4,
    title: "Vegan Buddha Bowl",
    time: "20 mins",
    calo: "300 kcal",
  },
  {
    image: food5,
    title: "Spaghetti Bolognese",
    time: "30 mins",
    calo: "450 kcal",
  },
  {
    image: food6,
    title: "Oatmeal with Fruits",
    time: "10 mins",
    calo: "180 kcal",
  },
  {
    image: food7,
    title: "Grilled Salmon",
    time: "20 mins",
    calo: "320 kcal",
  },
  {
    image: food8,
    title: "Chicken Wrap",
    time: "15 mins",
    calo: "270 kcal",
  },
];


//big workout data
export const bigWorkoutData = [
  {
    image: img1,
    title: "Morning Yoga",
    time: "30 mins",
    calo: "120 kcal",
    type: "Beginner",
    exercises: [
      { name: "Neck Rolls", reps: "2 sets x 10 reps" },
      { name: "Arm Circles", reps: "2 sets x 10 reps" },
      { name: "Standing Side Stretch", reps: "2 sets x 15 secs per side" },
      { name: "Seated Forward Bend", reps: "2 sets x 15 secs" },
    ],
  },
]



//beginner workout data
export const beginnerWorkoutData = [
  {
    image: img1,
    title: "Morning Yoga",
    time: "30 mins",
    calo: "120 kcal",
    type: "Beginner",
    exercises: [
      { name: "Neck Rolls", reps: "2 sets x 10 reps" },
      { name: "Arm Circles", reps: "2 sets x 10 reps" },
      { name: "Standing Side Stretch", reps: "2 sets x 15 secs per side" },
      { name: "Seated Forward Bend", reps: "2 sets x 15 secs" },
    ],
  },
  {
    image: img2,
    title: "Beginner Core Workout",
    time: "20 mins",
    calo: "140 kcal",
    type: "Beginner",
    exercises: [
      { name: "Plank Hold", reps: "3 sets x 15 secs" },
      { name: "Leg Raises", reps: "2 sets x 10 reps" },
      { name: "Superman", reps: "2 sets x 12 reps" },
      { name: "Bird Dog", reps: "2 sets x 10 reps per side" },
    ],
  },
  {
    image: img3,
    title: "Walking for Beginners",
    time: "30 mins",
    calo: "150 kcal",
    type: "Beginner",
    exercises: [
      { name: "Brisk Walking", reps: "30 mins" },
      { name: "Side Step Walks", reps: "2 sets x 5 mins" },
    ],
  },
  {
    image: img8,
    title: "Stretching Routine",
    time: "25 mins",
    calo: "100 kcal",
    type: "Beginner",
    exercises: [
      { name: "Hamstring Stretch", reps: "2 sets x 20 secs per side" },
      { name: "Quad Stretch", reps: "2 sets x 20 secs per side" },
      { name: "Child's Pose", reps: "3 sets x 30 secs" },
      { name: "Cat-Cow Stretch", reps: "3 sets x 10 reps" },
    ],
  },
];
