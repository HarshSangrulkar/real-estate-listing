import MainPage from "../Home/MainPage/MainPage.jsx";
import Footer from "../Home/footer/Footer.jsx";
import Contact from "../Home/contact/Contact.jsx";
import Best from "../Home/best/Best.jsx";
import Reviews from "../Home/reviews/Reviews.jsx";
import Types from "../Home/Types/Types.jsx";

export default function Landing() {
  return (
    <>
      <MainPage />
      <Types />
      <Best />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}
