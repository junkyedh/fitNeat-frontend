import "@/App.scss";
import { Route, Routes } from "react-router-dom";

import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Landing from "../pages/Landing/Landing";
import SetUp from "../pages/Landing/partials/SetUp/SetUp";
import NutritionList from "../pages/Nutrition/NutritionList";
import ProfileUser from "../pages/ProfileUser/ProfileUser";
import WorkoutList from "../pages/Workout/WorkoutList";
import HomePage from "../pages/HomePage/HomePage";
import Beginner from "../pages/Workout/Beginner/Beginner";
import MyRoutine from "../pages/Workout/MyRoutine/MyRoutine";
import MealPlans from "../pages/Nutrition/MealPlans/MealPlans";
import Config from "../pages/Nutrition/Config/Config";
import ConfigFinal from "../pages/Nutrition/Config/ConfigFinal";



export default function MainRoutes() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="homepage" element={<HomePage/>} />
        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="profile-user" element={<ProfileUser   />} />
        <Route path="setup" element={<SetUp />} />
        <Route path="profile-user" element={<ProfileUser />} />
        <Route path="workout-list" element={<WorkoutList />} />
        <Route path="workout-list-beginner" element={<Beginner />} />
        <Route path="workout-list-my-routine" element={<MyRoutine />} />
        <Route path="nutrition-list" element={<NutritionList />} />
        <Route path="nutrition-list-plans" element={<MealPlans />} />
        <Route path="nutrition-list-config" element={<Config />} />
        <Route path="nutrition-list-configFinal" element={<ConfigFinal />} />
      </Routes>
      <Footer />
    </>
  );
}
