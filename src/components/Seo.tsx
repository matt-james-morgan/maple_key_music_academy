import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import teachers from "../data/teachers";
import programs from "../data/programs";

export const SITE_URL = "https://maplekeymusic.ca";
const SITE_NAME = "Maple Key Music Academy";

const DEFAULT_DESCRIPTION =
  "In-home music lessons in Toronto for all ages and skill levels. Piano, guitar, voice, drums, ukulele, cello, banjo, musical theatre and acting with professional, working musicians.";

interface PageMeta {
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
}

const staticPages: Record<string, PageMeta> = {
  "/": {
    title: `${SITE_NAME} | In-Home Music Lessons in Toronto`,
    description: DEFAULT_DESCRIPTION,
  },
  "/programs": {
    title: `Music Lessons & Programs | ${SITE_NAME}`,
    description:
      "Explore in-home lessons in piano, guitar, voice, drums, ukulele, cello, banjo, musical theatre and acting across Toronto. Beginners to advanced, kids to adults.",
  },
  "/teachers": {
    title: `Our Teachers | ${SITE_NAME}`,
    description:
      "Meet Maple Key's teachers: university-trained, working musicians who teach in-home music lessons across Toronto.",
  },
  "/register": {
    title: `Register for Lessons | ${SITE_NAME}`,
    description: "Sign up for in-home music lessons in Toronto. Tell us about your goals and we'll match you with the right teacher.",
  },
  "/pre-register": {
    title: `Pre-Register | ${SITE_NAME}`,
    description: "Save your spot for upcoming in-home music lessons with Maple Key Music Academy in Toronto.",
  },
  "/refer": {
    title: `Refer a Friend | ${SITE_NAME}`,
    description: "Know someone who'd love music lessons? Refer a friend to Maple Key Music Academy.",
  },
  "/testimonials": {
    title: `Testimonials | ${SITE_NAME}`,
    description: "What students and parents say about in-home music lessons with Maple Key Music Academy.",
  },
  "/resources": {
    title: `Books & Resources | ${SITE_NAME}`,
    description: "Lesson books and learning resources recommended by Maple Key Music Academy teachers.",
  },
  "/articles": {
    title: `Articles | ${SITE_NAME}`,
    description: "Tips, guides and insights on learning music from Maple Key Music Academy teachers.",
  },
  "/apply": {
    title: `Teach With Us | ${SITE_NAME}`,
    description: "Music teachers in Toronto: apply to teach in-home lessons with Maple Key Music Academy.",
  },
};

const truncate = (text: string, max = 158) =>
  text.length <= max ? text : `${text.slice(0, text.lastIndexOf(" ", max - 1))}…`;

// Keeps titles short enough for search results: "Guitar", "Piano & Banjo", or "Music" for 3+.
const teacherRole = (specialty: string) => {
  const parts = specialty.split(",").map((p) => p.trim());
  return parts.length > 2 ? "Music" : parts.join(" & ");
};

function metaForPath(pathname: string): PageMeta {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (staticPages[path]) return staticPages[path];

  const teacherMatch = path.match(/^\/teacher-bio\/([^/]+)$/);
  if (teacherMatch) {
    const teacher = teachers.find((t) => t.slug === teacherMatch[1]);
    if (teacher) {
      return {
        title: `${teacher.name}, ${teacherRole(teacher.specialty)} Teacher in ${teacher.location} | ${SITE_NAME}`,
        description: truncate(teacher.bio.replace(/\s+/g, " ")),
        image: teacher.image,
      };
    }
  }

  const programMatch = path.match(/^\/programs\/([^/]+)$/);
  if (programMatch) {
    const program = programs.find((p) => p.slug === programMatch[1]);
    if (program) {
      return {
        title: `${program.title} Lessons in Toronto | ${SITE_NAME}`,
        description: truncate(program.description),
        image: program.image,
      };
    }
  }

  return { title: `Page Not Found | ${SITE_NAME}`, description: DEFAULT_DESCRIPTION, noindex: true };
}

/** Find-or-create a head tag so the static defaults in index.html get updated rather than duplicated. */
function upsert(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

const newTag = (tag: string, attr: string, value: string) => () => {
  const el = document.createElement(tag);
  el.setAttribute(attr, value);
  return el;
};

const setMeta = (attr: "name" | "property", key: string, content: string) =>
  upsert(`meta[${attr}="${key}"]`, newTag("meta", attr, key), "content", content);

/** Keeps the document title, description, canonical and social tags in sync with the current route. */
const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = metaForPath(pathname);
    const path = pathname.replace(/\/+$/, "") || "/";
    const url = `${SITE_URL}${path === "/" ? "/" : path}`;
    const image = new URL(meta.image ?? "/og-image.jpg", SITE_URL).href;

    document.title = meta.title;
    setMeta("name", "description", meta.description);
    setMeta("name", "robots", meta.noindex ? "noindex" : "index, follow");
    upsert('link[rel="canonical"]', newTag("link", "rel", "canonical"), "href", url);

    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
    setMeta("name", "twitter:title", meta.title);
    setMeta("name", "twitter:description", meta.description);
    setMeta("name", "twitter:image", image);
  }, [pathname]);

  return null;
};

export default Seo;
