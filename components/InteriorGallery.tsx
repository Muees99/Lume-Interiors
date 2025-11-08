"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  title: string;
  subtitle: string;
  mainImage: string;
  gallery: string[];
  narration: string;
};

const projects: Project[] = [
  {
    title: "Exterior Design",
    subtitle: "Woodland House",
    mainImage:
      "https://design-milk.com/images/2017/09/Villa-Rypen-CF-Moller-Architects-2-810x540.jpg",
    gallery: [
      "https://images.adsttc.com/media/images/5a90/433a/f197/ccee/4700/011a/newsletter/12-ALTUS-woodland-house-PC_418.jpg?1519403819=",
      "https://cdn.mos.cms.futurecdn.net/fiL52zritYxfeyJtLtQirB.jpg",
      "https://s3-blog.homelane.com/design-ideas/wp-content/uploads/2025/07/03052549/modern-brick-wall-design-living-room-wooden-textures.png",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    ],
    narration:
      "Exterior Design — Woodland House. The architecture embraces the surrounding forest through generous glazing and warm timber cladding. Note how the large panes frame seasonal light and create a living painting for the interior.",
  },
  {
    title: "Interior Design",
    subtitle: "Urban Lounge",
    mainImage:
      "https://s3-blog.homelane.com/design-ideas/wp-content/uploads/2025/07/03044926/modern-wallpaper-design-living-room-classy-golden-accents.png",
    gallery: [
      "https://cdn.home-designing.com/wp-content/uploads/2025/04/simple-wall-mounted-tv-600x450.jpg",
      "https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2022/07/Cover-Inspiration-1-5-1400x933.png",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=687",
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&q=80&w=687",
    ],
    narration:
      "Interior Design — Urban Lounge. High ceilings and layered textures define this lounge. Subtle gold accents and curated furnishings provide warmth while maintaining a clean, architectural silhouette.",
  },
  {
    title: "Home Decor",
    subtitle: "Open House View",
    mainImage:
      "https://hips.hearstapps.com/hmg-prod/images/edc080123reddkaihoi-009-645aba4daf6e1.jpg",
    gallery: [
    "https://images.unsplash.com/photo-1758448511255-ac2a24a135d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
      "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2024-01-25-at-12-12-51-pm-65b29696e9721.png?crop=0.752xw%3A1.00xh%3B0.103xw%2C0&resize=1120%3A%2A",
      "https://media.houseandgarden.co.uk/photos/67dc464c0f2847aedf2da20b/16%3A9/w_1280%2Cc_limit/Shot05117_RT-production_digital.jpg",
      "https://images.unsplash.com/photo-1761971975886-57975f99ce99?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1179",
    ],
    narration:
      "Home Decor — Open House View. Curated artworks and bespoke pieces punctuate a serene neutral canvas. Observe the interplay of material and scale that produces a lived-in gallery ambience.",
  },

  {
    title: "Urban Design",
    subtitle: "City Loft Serenity",
    mainImage:
      "https://hips.hearstapps.com/hmg-prod/images/edc100123egan-002-6500742f5feb7.jpg?crop=1xw%3A0.8209281961471103xh%3Bcenter%2Ctop&resize=1200%3A%2A",
    gallery: [
      "https://images.unsplash.com/photo-1635483496741-75eb49e545f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
      "https://images.unsplash.com/photo-1708517196691-b1d75c483e4b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
      "https://images.unsplash.com/photo-1587209255846-ab7eae1c3e97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
      "https://images.unsplash.com/photo-1649429710616-dad56ce9a076?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    ],
    narration:
      "Urban Design — City Loft Serenity. Industrial bones softened by natural fabrics and controlled lighting create an intimate, refined retreat in the heart of the city.",
  },
];

export default function ProjectPage() {
  const speakRef = useRef(false);
  const ambientRef = useRef<HTMLAudioElement | null>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number | null>(
    null
  );
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt?: string;
    projectIndex: number;
    imgIndex: number;
  } | null>(null);

  const speak = (text: string) => {
    if (!("speechSynthesis" in window) || !speakRef.current) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.95;
    u.pitch = 1.05;
    u.lang = "en-GB";
    speechSynthesis.speak(u);
  };

  const playAmbient = () => {
    if (!ambientRef.current) {
      ambientRef.current = new Audio(
        "https://cdn.pixabay.com/audio/2023/02/28/audio_57d3797fa9.mp3"
      );
      ambientRef.current.volume = 0.12;
    }
    ambientRef.current.currentTime = 0;
    ambientRef.current.play().catch(() => {});
  };

  useEffect(() => {
    const onToggle = (e: CustomEvent) => {
      speakRef.current = e.detail.enabled;
      if (!speakRef.current) {
        setCurrentProjectIndex(null);
        speechSynthesis.cancel();
        ambientRef.current?.pause();
      } else {
        playAmbient();
        speak("Welcome to Lumé Interiors. Starting the guided tour now.");
        startAutoTour();
      }
    };
    window.addEventListener("toggleVoice", onToggle as EventListener);
    return () =>
      window.removeEventListener("toggleVoice", onToggle as EventListener);
  }, []);

  const startAutoTour = async () => {
    await new Promise((r) => setTimeout(r, 1400));
    for (let i = 0; i < projects.length; i++) {
      if (!speakRef.current) break;
      setCurrentProjectIndex(i);
      playAmbient();
      speak(projects[i].narration);
      await new Promise((r) => setTimeout(r, 3000));
    }
    if (speakRef.current) {
      speak(
        "That concludes the guided tour. Thank you for visiting Lumé Interiors."
      );
      setCurrentProjectIndex(null);
    }
  };

  const stopNarration = () => {
    speechSynthesis.cancel();
    speakRef.current = false;
    setCurrentProjectIndex(null);
    ambientRef.current?.pause();
    window.dispatchEvent(
      new CustomEvent("toggleVoice", { detail: { enabled: false } })
    );
  };

  // 🧭 Arrow navigation
  const handlePrev = () => {
    if (!lightbox) return;
    const { projectIndex, imgIndex } = lightbox;
    const gallery = projects[projectIndex].gallery;
    const prevIndex = (imgIndex - 1 + gallery.length) % gallery.length;
    setLightbox({
      src: gallery[prevIndex],
      alt: `${projects[projectIndex].title} view ${prevIndex + 1}`,
      projectIndex,
      imgIndex: prevIndex,
    });
  };

  const handleNext = () => {
    if (!lightbox) return;
    const { projectIndex, imgIndex } = lightbox;
    const gallery = projects[projectIndex].gallery;
    const nextIndex = (imgIndex + 1) % gallery.length;
    setLightbox({
      src: gallery[nextIndex],
      alt: `${projects[projectIndex].title} view ${nextIndex + 1}`,
      projectIndex,
      imgIndex: nextIndex,
    });
  };

  return (
    <section className="bg-[#f9f6f3] min-h-screen py-20 px-6 md:px-16 text-center relative overflow-visible">
      <h2 className="text-4xl md:text-5xl font-cinzel text-gray-800 mb-12">
        Featured Interior Design Projects
      </h2>

      <div className="space-y-20 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <article key={i} className="flex flex-col items-center">
            <motion.div
              animate={{
                scale: currentProjectIndex === i ? 1.025 : 1,
                opacity: currentProjectIndex === i ? 1 : 0.95,
              }}
              transition={{ duration: 0.6 }}
              className="relative w-full rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src={p.mainImage}
                alt={`${p.title} - ${p.subtitle}`}
                width={1400}
                height={700}
                className="object-cover w-full h-[420px] rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex flex-col justify-end p-6 text-left">
                <h3 className="text-3xl font-cinzel text-[#E0C097] mb-1">
                  {p.title}
                </h3>
                <p className="text-white text-lg">{p.subtitle}</p>
              </div>
            </motion.div>

            <InViewNarrator
              text={p.narration}
              onSpeak={(text) => {
                if (speakRef.current) {
                  playAmbient();
                  setCurrentProjectIndex(i);
                  speak(text);
                }
              }}
            />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 w-full">
              {p.gallery.map((g, idx) => {
                const isActive = currentProjectIndex === i;
                return (
                  <motion.button
                    key={g}
                    onClick={() =>
                      setLightbox({
                        src: g,
                        alt: `${p.title} view ${idx + 1}`,
                        projectIndex: i,
                        imgIndex: idx,
                      })
                    }
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.25 }}
                    className={`relative rounded-xl overflow-hidden border-2 ${
                      isActive ? "border-[#E0C097]" : "border-transparent"
                    } focus:outline-none`}
                  >
                    <Image
                      src={g}
                      alt={`${p.title} view ${idx + 1}`}
                      width={600}
                      height={420}
                      className="object-cover w-full h-[180px]"
                    />
                    {isActive && (
                      <div className="absolute inset-0 ring-2 ring-[#E0C097]/30 pointer-events-none" />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </article>
        ))}
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
          <div className="relative max-w-4xl w-full rounded-xl overflow-hidden bg-white">
            <Image
              src={lightbox.src}
              alt={lightbox.alt || ""}
              width={1600}
              height={1000}
              className="object-cover w-full h-[70vh]"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 bg-white/80 hover:bg-white text-black px-3 py-1 rounded-full font-semibold shadow-md"
            >
              ✕
            </button>

            {/* Left Arrow */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              whileHover={{ scale: 1.1 }}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md"
            >
              ←
            </motion.button>

            {/* Right Arrow */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              whileHover={{ scale: 1.1 }}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md"
            >
              →
            </motion.button>
          </div>
        </div>
      )}

      <button
        onClick={stopNarration}
        className="fixed bottom-6 right-6 font-semibold px-5 py-3 rounded-full shadow-lg hover:bg-[#a27b66] transition-all z-50 bg-gradient-to-r from-[#E0C097] to-[#bba27d] text-black"
        aria-label="Stop narration"
      >
        Stop Narration
      </button>
    </section>
  );
}

function InViewNarrator({
  text,
  onSpeak,
}: {
  text: string;
  onSpeak: (t: string) => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onSpeak(text);
      },
      { threshold: 0.55 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [text, onSpeak]);

  return <div ref={ref} className="h-1" />;
}
