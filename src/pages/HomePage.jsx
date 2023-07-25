import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/herosec/Hero";
import About from "../components/about/About";
import Services from "../components/Our Services/Services";
import ImportantLinks from "../components/Important Links/ImportantLinks";
import Review from "../components/review/Review";
import Footer from "../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { UserContext } from "../App";

const HomePage = ({ isLoggedIn, setUser, setIsLoggedIn }) => {
  const nav = useNavigate();

  const [cookies, setCookies, removeCookies] = useCookies([]);
  const user = useContext(UserContext);

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        nav("/login");
      } else {
        try {
          const { data } = await axios.post(
            "http://localhost:9000/upc/api/v1/check",
            {},
            { withCredentials: true }
          );
          if (!data.status) {
            removeCookies("jwt");
          } else {
            setIsLoggedIn(true);

            setUser(data.user);

            // alert(`hello ${data.user.upc_id}`);
            // alert(user.upc_id);
          }
        } catch (err) {
          console.log(err);
        }
      }
    };
    verifyUser();
  }, [cookies, setCookies, removeCookies]);
  return (
    <div>
      <Navbar
        nav={nav}
        isLoggedIn={isLoggedIn}
        setUser={setUser}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Hero nav={nav} isLoggedIn={isLoggedIn} />
      <About />
      <Services />
      <ImportantLinks />
      <Review />
      <Footer />
    </div>
  );
};

export default HomePage;
