import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useRef, useEffect, useState } from "react";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import { Article } from "@mui/icons-material";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function ScrollFadeIn({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry2]) => {
        var _a;
        if (entry2.isIntersecting && ref.current) {
          ref.current.classList.add("animate-fadein");
        } else {
          (_a = ref.current) == null ? void 0 : _a.classList.remove("animate-fadein");
        }
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsx("div", { ref, className: "opacity-0", children });
}
const socialData = [
  {
    image: "app/features/landing/assets/linkedin.png",
    link: "https://www.linkedin.com/in/jonathan-kent-morales-662938244/"
  },
  {
    image: "app/features/landing/assets/github.png",
    link: "https://github.com/elitekentoy"
  },
  {
    image: "app/features/landing/assets/facebook.png",
    link: "https://www.facebook.com/jonathankent.morales"
  }
];
function Social(config) {
  return /* @__PURE__ */ jsx("a", { href: config.link, target: "_blank", children: /* @__PURE__ */ jsx("img", { src: config.image, className: "h-[5vh] w-[5vh]", alt: "" }) });
}
function MyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Resume - Jonathan Kent Morales.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        id: "Resume",
        onClick: toggleModal,
        className: `flex flex-row border-2 rounded-[5px] border-[#FF6B6B] px-[1vw] items-center hover:bg-[#FFB703] animate-appear`,
        children: [
          /* @__PURE__ */ jsx(Article, {}),
          /* @__PURE__ */ jsx("p", { children: "Download Resume" })
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-lg w-1/3", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-4 text-[#FF6B6B]", children: "Notice" }),
      /* @__PURE__ */ jsx("p", { className: "mb-4 text-[#1B2223]", children: "References and exact address has been removed for Privacy purposes." }),
      /* @__PURE__ */ jsx("p", { className: "mb-4 text-[#1B2223]", children: "Please contact me via email/number if you need it for Hiring Purposes." }),
      /* @__PURE__ */ jsx("p", { className: "mb-4 text-[#1B2223]", children: "Thank you in advance!" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-end gap-3", children: [
        /* @__PURE__ */ jsx("button", { onClick: toggleModal, className: "px-4 py-2 bg-[#FF6B6B] text-white rounded", children: "Close" }),
        /* @__PURE__ */ jsx("button", { onClick: handleDownload, className: "px-4 py-2 bg-[#FFB703] text-white rounded", children: "Download" })
      ] })
    ] }) })
  ] });
}
function Socials() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between my-[2vh]", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-row gap-[.4vw]", children: socialData.map((social) => /* @__PURE__ */ jsx(Social, { image: social.image, link: social.link }, "social-" + social.image)) }),
    /* @__PURE__ */ jsx(MyModal, {})
  ] });
}
function Description$2() {
  return /* @__PURE__ */ jsxs("article", { className: "text-[#F4F3FD] font-[Inter] flex flex-col justify-center pt-[5vh]", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xl", children: "Hello, I'm Jonathan Kent Morales" }),
    /* @__PURE__ */ jsxs("p", { className: "font-semibold text-8xl my-[1vh]", children: [
      "JAVA ",
      /* @__PURE__ */ jsx("span", { className: "text-[#FF6B6B]", children: "DEVELOPER" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xl", children: "I build robust applications with Java and Spring Boot." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row my-[1vh]", children: [
      /* @__PURE__ */ jsx(LocationPinIcon, { color: "error" }),
      /* @__PURE__ */ jsx("p", { children: "Cebu, Philippines" })
    ] }),
    /* @__PURE__ */ jsx(Socials, {})
  ] });
}
function Landing() {
  return /* @__PURE__ */ jsx(ScrollFadeIn, { children: /* @__PURE__ */ jsxs("section", { className: "flex flex-row justify-center items-center gap-[5vw] mt-[3vh] h-[70vh]", id: "Landing", children: [
    /* @__PURE__ */ jsx(Description$2, {}),
    /* @__PURE__ */ jsx("img", { className: "h-[50vh]", src: "app/features/landing/assets/portrait.png", alt: "" })
  ] }) });
}
function Navigation() {
  return /* @__PURE__ */ jsxs("nav", { className: "text-[#F4F3FD] font-[Inter] w-full flex flex-row justify-center gap-[5vw] h-[10vh] items-center", children: [
    /* @__PURE__ */ jsx("a", { href: "#", children: "Home" }),
    /* @__PURE__ */ jsx("a", { href: "#About", children: "About" }),
    /* @__PURE__ */ jsx("a", { href: "#Skills", children: "Skills" }),
    /* @__PURE__ */ jsx("a", { href: "#Projects", children: "Projects" }),
    /* @__PURE__ */ jsx("a", { href: "#Certificates", children: "Certificates" })
  ] });
}
function Actions() {
  return /* @__PURE__ */ jsx("a", { href: "#Landing", children: /* @__PURE__ */ jsx("div", { className: "font-[Inter] text-[#F4F3FD] flex flex-row gap-[.5vw] animate-bounce", children: /* @__PURE__ */ jsx("div", { className: "bg-[#FFB703] px-[3vh] py-[1vh] rounded-[5px]", children: "HIRE ME" }) }) });
}
function Description$1() {
  return /* @__PURE__ */ jsxs("div", { className: "font-[Inter] text-[#F4F3FD] flex flex-col gap-[2vh]", children: [
    /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "A builder at heart and a problem-solver by trade." }),
    /* @__PURE__ */ jsx("p", { children: "I specialize in Java and Spring boot, I’ve worked on production system that required both technical precision and teamwork." }),
    /* @__PURE__ */ jsx("p", { children: "I thrive in collaborative environments, especially those that push me to learn and grow. My goal is to keep growing as a developer while contributing to projects that make a real impact." })
  ] });
}
function About() {
  return /* @__PURE__ */ jsx(ScrollFadeIn, { children: /* @__PURE__ */ jsxs("section", { className: "flex flex-row justify-center mb-[15vh]", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "h-[50vh]",
        src: "app/features/about/assets/circular.png",
        alt: ""
      }
    ),
    /* @__PURE__ */ jsxs("article", { className: "w-1/2 flex flex-col justify-center gap-[4vh]", id: "About", children: [
      /* @__PURE__ */ jsx(Description$1, {}),
      /* @__PURE__ */ jsx(Actions, {})
    ] })
  ] }) });
}
const tileData = [
  {
    image: "app/features/skills/assets/java.png",
    label: "Java"
  },
  {
    image: "app/features/skills/assets/spring.svg",
    label: "Spring"
  },
  {
    image: "app/features/skills/assets/junit.png",
    label: "JUnit"
  },
  {
    image: "app/features/skills/assets/git.png",
    label: "Git"
  },
  {
    image: "app/features/skills/assets/gradle.png",
    label: "Gradle"
  },
  {
    image: "app/features/skills/assets/postgre.png",
    label: "PostgreSQL"
  },
  {
    image: "app/features/skills/assets/aws-ec2.png",
    label: "AWS EC2"
  },
  {
    image: "app/features/skills/assets/azure.png",
    label: "Azure DevOps"
  },
  {
    image: "app/features/skills/assets/plantuml.png",
    label: "PlantUML"
  },
  {
    image: "app/features/skills/assets/draw.png",
    label: "Draw.io"
  },
  {
    image: "app/features/skills/assets/cve.svg",
    label: "CVE Analysis"
  },
  {
    image: "app/features/skills/assets/redmine.png",
    label: "Redmine"
  },
  {
    image: "app/features/skills/assets/bash.png",
    label: "Bash"
  },
  {
    image: "app/features/skills/assets/javascript.png",
    label: "JavaScript"
  },
  {
    image: "app/features/skills/assets/html.png",
    label: "HTML"
  },
  {
    image: "app/features/skills/assets/css.svg",
    label: "CSS"
  },
  {
    image: "app/features/skills/assets/postman.png",
    label: "Postman"
  },
  {
    image: "app/features/skills/assets/swagger.png",
    label: "Swager"
  },
  {
    image: "app/features/skills/assets/typescript.png",
    label: "TypeScript"
  },
  {
    image: "app/features/skills/assets/mysql.png",
    label: "MySQL"
  },
  {
    image: "app/features/skills/assets/sqlite.png",
    label: "SQLite"
  },
  {
    image: "app/features/skills/assets/firebase.png",
    label: "Firebase"
  },
  {
    image: "app/features/skills/assets/react.png",
    label: "ReactJS"
  },
  {
    image: "app/features/skills/assets/flutter.png",
    label: "Flutter"
  },
  {
    image: "app/features/skills/assets/dart.png",
    label: "Dart"
  },
  {
    image: "app/features/skills/assets/github.png",
    label: "Github"
  },
  {
    image: "app/features/skills/assets/figma.png",
    label: "Figma"
  },
  {
    image: "app/features/skills/assets/dbeaver.png",
    label: "Dbeaver"
  },
  {
    image: "app/features/skills/assets/winscp.png",
    label: "WinSCP"
  },
  {
    image: "app/features/skills/assets/tailwind.png",
    label: "Tailwind CSS"
  }
];
function Tile(config) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col border-[#FF6B6B] border-2 h-[125px] w-[125px] rounded-[5px] justify-center items-center hover:border-[#FFB703] hover:scale-110", children: [
    /* @__PURE__ */ jsx("img", { src: config.image, className: "h-[50px] w-[50px] object-contain", alt: "" }),
    /* @__PURE__ */ jsx("p", { className: "font-[Inter] text-[#F4F3FD]", children: config.label })
  ] });
}
function Skills() {
  return /* @__PURE__ */ jsx(ScrollFadeIn, { children: /* @__PURE__ */ jsxs("section", { className: "px-[15vw] flex flex-col justify-center items-center gap-[5vh] mb-[15vh]", children: [
    /* @__PURE__ */ jsxs("p", { className: "font-[Inter] text-[#F4F3FD] text-5xl font-bold", id: "Skills", children: [
      "My ",
      /* @__PURE__ */ jsx("span", { className: "text-[#FF6B6B]", children: "Skills and Techonlogies" })
    ] }),
    /* @__PURE__ */ jsx("article", { className: "flex flex-wrap gap-[10px] justify-center", children: tileData.map(
      (tile) => /* @__PURE__ */ jsx(
        Tile,
        {
          image: tile.image,
          label: tile.label
        },
        "skill-" + tile.label
      )
    ) })
  ] }) });
}
const projectData = [
  {
    image: "app/features/projects/assets/padlock.png",
    title: "(Confidential)",
    summary: "Unified secure plaform to access business resources",
    description: "Enable employees to safely access internal systems, files, email, and web applications from remote environments. The platform emphasizes data security, containerization, and access control, ensuring sensitive corporate data never resides permanently on user devices.",
    role: "(Server-side) Developer, Maintenace",
    skills: ["Java", "Spring", "JUnit", "Git", "Gradle", "PostgreSQL", "AWS EC2", "Azure DevOps", "PlantUML", "Draw.io", "CVE", "Redmine", " WinSCP", "Bash", "JavaScript", "HTML", "CSS", "Postman", "Swagger", "DBeaver"]
  },
  {
    image: "app/features/projects/assets/asmrs.png",
    title: "Adelante SMRS (Capstone)",
    summary: "IoT-based Short Message Relay and Push Notification System",
    description: "The system leverages IoT technology and the MQTT protocol to transmit SMS messages from web or mobile devices connected within the school’s network. This allows a school-wide or class-wide announcement via SMS message.",
    role: "Mobile Developer, UI/UX Designer",
    skills: ["Dart", "Flutter", "Git", "GitHub", "SQLite", "Figma"]
  },
  {
    image: "app/features/projects/assets/igarchu.png",
    title: "iGarchu",
    summary: "A mobile and web application for Pet Adoption.",
    description: "A cross-platform application aimed at modernizing the pet adoption process by connecting animal shelters, pet owners, and adopters in a user-friendly environment.",
    role: "Consultant",
    skills: ["Dart", "Flutter", "Git", "GitHub", "SQLite", "Firebase", "Draw.io"]
  }
];
function Description(config) {
  return /* @__PURE__ */ jsxs("div", { className: "text-[#F4F3FD] font-[Inter] flex flex-col gap-[1vh]", children: [
    /* @__PURE__ */ jsx("p", { className: "text-2xl font-semibold text-[#FFB703]", children: config.title }),
    /* @__PURE__ */ jsx("p", { children: config.summary }),
    /* @__PURE__ */ jsx("p", { children: config.description }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("span", { className: "text-[#FFB703]", children: "Role" }),
      ": ",
      config.role
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-[5px]", children: config.skills.map((skill) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "bg-[#FF6B6B] px-[10px] py-[5px] rounded-[5px]",
        children: skill
      },
      "skill-" + skill
    )) })
  ] });
}
function Project({ invert = false, ...config }) {
  return /* @__PURE__ */ jsxs("article", { className: `flex gap-[3vw] ${invert ? "flex-row-reverse" : "flex-row"}`, children: [
    /* @__PURE__ */ jsx("img", { src: config.image, className: "border-[#FFB703] border-5 rounded-[5px] h-[30vh] w-[30vw] object-contain flex-1", alt: "" }),
    /* @__PURE__ */ jsx("div", { className: "flex-3", children: /* @__PURE__ */ jsx(
      Description,
      {
        image: config.image,
        title: config.title,
        summary: config.summary,
        description: config.description,
        role: config.role,
        skills: config.skills
      }
    ) })
  ] });
}
function Projects() {
  return /* @__PURE__ */ jsx(ScrollFadeIn, { children: /* @__PURE__ */ jsxs("section", { className: "flex flex-col px-[15vw] items-center gap-[10vh]", children: [
    /* @__PURE__ */ jsxs("p", { className: "text-[#F4F3FD] font-[Inter] text-5xl font-bold", id: "Projects", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[#FF6B6B]", children: "Projects" }),
      " Involved"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-[4vh]", children: projectData.map((project, index) => /* @__PURE__ */ jsx(
      Project,
      {
        invert: index % 2 == 0,
        image: project.image,
        title: project.title,
        summary: project.summary,
        description: project.description,
        role: project.role,
        skills: project.skills
      },
      "projects-" + project.title
    )) })
  ] }) });
}
const certificateData = [
  {
    image: "app/features/certificates/assets/philnits-cert.jpg",
    label: "PhilNITS FE"
  },
  {
    image: "app/features/certificates/assets/az900.jpg",
    label: "Microsoft AZ-900"
  },
  {
    image: "app/features/certificates/assets/hcia.jpg",
    label: "HCIA-AI"
  },
  {
    image: "app/features/certificates/assets/ipbl.jpg",
    label: "I-PBL"
  },
  {
    image: "app/features/certificates/assets/flutter.jpg",
    label: "Udemy Flutter"
  }
];
function Certificate(config) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col border-4 border-[#889696] rounded-[5px] justify-center w-[18vw] h-[25vh] items-center", children: [
    /* @__PURE__ */ jsx("img", { src: config.image, className: "w-[18vw] h-[20vh] object-fill flex-5", alt: "" }),
    /* @__PURE__ */ jsx("p", { className: "text-[#F4F3FD] font-[Inter] text-lg flex-1", children: config.label })
  ] });
}
function Certificates() {
  return /* @__PURE__ */ jsx(ScrollFadeIn, { children: /* @__PURE__ */ jsxs("section", { className: "flex flex-col items-center px-[10vw] gap-[8vh] mt-[15vh]", children: [
    /* @__PURE__ */ jsx("p", { className: "text-[#FF6B6B] font-[Inter] text-5xl font-bold", id: "Certificates", children: "Certificates" }),
    /* @__PURE__ */ jsx("article", { className: "flex flex-wrap gap-[2vw] justify-center", children: certificateData.map((cert) => /* @__PURE__ */ jsx(Certificate, { image: cert.image, label: cert.label }, "certificate-" + cert.label)) })
  ] }) });
}
function meta({}) {
  return [{
    title: "Morales Portfolio"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs("main", {
    className: "bg-[#1B2223] pb-[15vh]",
    children: [/* @__PURE__ */ jsx(Navigation, {}), /* @__PURE__ */ jsx(Landing, {}), /* @__PURE__ */ jsx(About, {}), /* @__PURE__ */ jsx(Skills, {}), /* @__PURE__ */ jsx(Projects, {}), /* @__PURE__ */ jsx(Certificates, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-dP5qUFa3.js", "imports": ["/assets/chunk-PVWAREVJ-C62kLiKk.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-DwjeWLfA.js", "imports": ["/assets/chunk-PVWAREVJ-C62kLiKk.js"], "css": ["/assets/root-BZ8XhF0_.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-DPvDyVWR.js", "imports": ["/assets/chunk-PVWAREVJ-C62kLiKk.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-7cbe59d2.js", "version": "7cbe59d2", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
