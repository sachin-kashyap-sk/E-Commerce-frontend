import { configureStore } from "@reduxjs/toolkit";
import Home from "../Home/HomeSlice";
import Brand from "../Home/BrandSlice";
import HomeMiddle from "../Home/HomeMiddleSlice";
import cart from "../Cart/CartSlice";
import Men from "../Mens/MensSlice";
import BestSeller from "../Mens/BestSellerSlice";
import Women from "../Women/WomenSlice";
import Auth from "../Auth/AuthSlice";
import HomeShopNow from "../Home/ShopNowSlice";
import LimitedOffer from "../Home/LimitedTimeOfferSlice";
import Footer from "../Footer/FooterIconSlice";
import FooterText from "../Footer/FooterTextSlice";
import AboutHeader from "../About/AboutHeaderSlice";
import AboutWeAre from "../About/AboutWeAreSlice";
import AboutFew from "../About/AboutFewWordSlice";
import AboutTeam from "../About/AboutTeamSlice";
import ContactHeader from "../ContactUs/ContactHeaderSlice";
import ContactQueries from "../ContactUs/ContactQueriesSlice";
import ContactComplain from "../ContactUs/ContactComplainSlice";
import ContactUserMessage from "../ContactUs/ContactUserMessageSlice";
export const Store = configureStore({
  reducer: {
    Home: Home,
    Brand: Brand,
    HomeMiddle: HomeMiddle,
    cart: cart,
    Men: Men,
    BestSeller: BestSeller,
    Women: Women,
    Auth: Auth,
    HomeShopNow: HomeShopNow,
    LimitedOffer: LimitedOffer,
    Footer: Footer,
    FooterText: FooterText,
    AboutHeader: AboutHeader,
    AboutWeAre: AboutWeAre,
    AboutFew: AboutFew,
    AboutTeam: AboutTeam,
    ContactHeader: ContactHeader,
    ContactQueries: ContactQueries,
    ContactComplain: ContactComplain,
    ContactUserMessage: ContactUserMessage,
  },
});
