import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import { AboutPage } from "./screens/AboutPage/AboutPage";
import { Team } from "./screens/Team/Team";
import { Blog } from "./screens/Blog/Blog";
import { Faq } from "./screens/FAQ/Faq";
import { Contact } from "./screens/Contact/Contact";
import { ContactPage } from "./screens/Contact/ContactPage";
import { Social } from "./screens/Social/Social";
import { PrivacyPolicy } from "./screens/Policy/PrivacyPolicy";
import { TermsAndConditions } from "./screens/Terms/TermsAndConditions";




const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/about-us",
    element: <AboutPage />
  },
  {
    path: "/team",
    element: <Team />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/faq",
    element: <Faq />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/contact-page",
    element: <ContactPage />
  },
  {
    path: "/social",
    element: <Social />
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />
  },
  {
    path: "/terms-and-conditions",
    element: <TermsAndConditions />
  }
])

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
