import { Home } from "./pages/Home";
import { Resume } from "./pages/Resume";
import { About } from "./pages/About";
import { Thinking } from "./pages/Thinking";
import { WorkProconnect } from "./pages/WorkProconnect";
import { WorkDseStudyPlanner } from "./pages/WorkDseStudyPlanner";
import { WorkNotionDsePlanner } from "./pages/WorkNotionDsePlanner";
import { WorkBusiness } from "./pages/WorkBusiness";
import { WorkInno } from "./pages/WorkInno";
import { WorkTolearner } from "./pages/WorkTolearner";
import { WorkStar } from "./pages/WorkStar";
import { WorkNoRushBeQuick } from "./pages/WorkNoRushBeQuick";
import { WorkCantomore } from "./pages/WorkCantomore";
import { WorkSmallCampus } from "./pages/WorkSmallCampus";
import { WorkColorIdentity } from "./pages/WorkColorIdentity";
import { WorkTellMeLah } from "./pages/WorkTellMeLah";
import type { ComponentType } from "react";
import type { Navigation } from "./components/Header";
export interface PortfolioRoute {
  path: string;
  title: string;
  description: string;
  bodyClass: string;
  active: Navigation;
  Component: ComponentType;
}
export const routes: PortfolioRoute[] = [
  {
    path: "/",
    title: "Innovation & Experience Design · Miffy Leung",
    description:
      "Usually by asking questions, connecting the dots, and making something we can try together.",
    bodyClass: "routed-page home-page",
    active: "work",
    Component: Home,
  },
  {
    path: "/resume/",
    title: "Résumé · Miffy Leung",
    description:
      "Innovation & Experience Design · Human-centred research, systems thinking & prototyping",
    bodyClass: "routed-page resume-page",
    active: "resume",
    Component: Resume,
  },
  {
    path: "/about/",
    title: "My story · Miffy Leung",
    description:
      "I’m studying Learning Design and Technology at CUHK, with a minor in Artificial Intelligence & Computer Science. Education is where I started understanding people and systems. I want to carry that way of seeing into unfamiliar industries: complex services, established products and experiences that connect communities.",
    bodyClass: "routed-page about-page",
    active: "about",
    Component: About,
  },
  {
    path: "/thinking/",
    title: "How I think · Miffy Leung",
    description: "BEFORE UNIVERSITY / THE QUESTION THAT STARTED IT",
    bodyClass: "routed-page thinking-page read-first",
    active: "thinking",
    Component: Thinking,
  },
  {
    path: "/work/proconnect/",
    title: "ProConnect · Miffy Leung",
    description:
      "A work-exposure support concept for under-networked students, explored through user journeys, business and service models, and a demonstrable interface.",
    bodyClass: "routed-page case-page",
    active: "work",
    Component: WorkProconnect,
  },
  {
    path: "/work/dse-study-planner/",
    title: "DSE Study Planner · Poe · Miffy Leung",
    description:
      "A time-planning chatbot I created on Poe, within ToLearner—the student-support community I co-founded.",
    bodyClass: "routed-page case-page",
    active: "work",
    Component: WorkDseStudyPlanner,
  },
  {
    path: "/work/notion-dse-planner/",
    title: "Notion DSE Planner · Miffy Leung",
    description:
      "A reusable DSE planning template I created and shared through ToLearner—the student-support community I co-founded.",
    bodyClass: "routed-page case-page",
    active: "work",
    Component: WorkNotionDsePlanner,
  },
  {
    path: "/work/business/",
    title: "Inno / ProConnect · Miffy Leung",
    description:
      "Two projects expanded my attention from the immediate experience to delivery, business models and whether an idea can scale.",
    bodyClass: "routed-page case-page",
    active: "work",
    Component: WorkBusiness,
  },
  {
    path: "/work/inno/",
    title: "Inno · 鷹路 · Miffy Leung",
    description:
      "An AI-assisted career-exploration prototype within a wider service concept: personalised insights, human industry mentors and employer matching. Designed for university students finding their direction and employers looking for suitable talent.",
    bodyClass: "routed-page case-page",
    active: "work",
    Component: WorkInno,
  },
  {
    path: "/work/tolearner/",
    title: "ToLearner · Student-support community · Miffy Leung",
    description:
      "A student-support community I co-founded from lived experience, with a web platform, a Poe time-planning chatbot and a reusable Notion DSE planner.",
    bodyClass: "routed-page case-page",
    active: "work",
    Component: WorkTolearner,
  },
  {
    path: "/work/star/",
    title: "STAR · Miffy Leung",
    description:
      "Platform redesign work during my Product Innovation internship at Hong Kong Education City. The product details, proposals and internal discussions remain confidential.",
    bodyClass: "routed-page case-page",
    active: "work",
    Component: WorkStar,
  },
  {
    path: "/work/no-rush-be-quick/",
    title: "No Rush Be Quick · Miffy Leung",
    description:
      "A transit-inspired browser game for practising Jyutping typing. A concrete experiment in making language practice feel like part of everyday Hong Kong life.",
    bodyClass: "routed-page case-page",
    active: "work",
    Component: WorkNoRushBeQuick,
  },
  {
    path: "/work/cantomore/",
    title: "CantoMore · Miffy Leung",
    description:
      "CantoMore supports newly arrived Mainland Chinese students. Its concept evolved from Cantonese learning toward cultural connection and participation in Hong Kong.",
    bodyClass: "routed-page case-page",
    active: "work",
    Component: WorkCantomore,
  },
  {
    path: "/work/small-campus/",
    title: "Small Campus · Miffy Leung",
    description:
      "I enjoyed Small Campus when I was in primary school. Returning to it during my Product Innovation internship gave that experience a different perspective: contributing to its redesign.",
    bodyClass: "routed-page case-page",
    active: "work",
    Component: WorkSmallCampus,
  },
  {
    path: "/work/color-identity/",
    title: "Color Identity · Miffy Leung",
    description:
      "A course project exploring personal colour through a photo, stated preferences, and vision and language AI. It also became a question about the role technology should have in self-expression.",
    bodyClass: "routed-page case-page",
    active: "work",
    Component: WorkColorIdentity,
  },
  {
    path: "/work/tell-me-lah/",
    title: "Tell Me Lah · Miffy Leung",
    description:
      "A prototype I made within CantoMore. The product concept, screens and internal materials are not included in this public portfolio.",
    bodyClass: "routed-page case-page",
    active: "work",
    Component: WorkTellMeLah,
  },
];
export function resolveRoute(path: string) {
  const normalised = path.endsWith("/") ? path : path + "/";
  return routes.find((route) => route.path === normalised);
}
