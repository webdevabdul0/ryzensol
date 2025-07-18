"use client";
import React, { useEffect, useState } from "react";
import { Loader } from "./ui/Loader";
import { AnimatePresence, motion } from "framer-motion";

function preloadAssets(assetUrls: string[]): Promise<void> {
  return Promise.all(
    assetUrls.map((url) => {
      return new Promise((resolve) => {
        if (typeof window === "undefined") return resolve(undefined);
        if (url.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) {
          const img = new window.Image();
          img.src = url;
          img.onload = () => resolve(undefined);
          img.onerror = () => resolve(undefined);
        } else if (url.match(/\.(mp4|webm|ogg)$/)) {
          const video = document.createElement("video");
          video.src = url;
          video.onloadeddata = () => resolve(undefined);
          video.onerror = () => resolve(undefined);
        } else {
          resolve(undefined);
        }
      });
    })
  ).then(() => undefined);
}

const ASSETS = [
  "/logo.png",
  "/Hero/video/2.mp4",
  "/Hero/video/4.mp4",
  "/Portfolio/project (1).jpg",
  "/Portfolio/project (2).jpg",
  "/Portfolio/project (3).jpg",
  "/Portfolio/project (4).jpg",
  "/Portfolio/project (5).jpg",
  "/Portfolio/project (6).jpg",
  "/Portfolio/project (7).jpg",
  "/Portfolio/project (8).jpg",
  "/partners/logo (1).png",
  "/partners/logo (2).png",
  "/partners/logo (3).png",
  "/partners/logo (4).png",
  "/partners/logo (5).png",
  "/partners/logo (6).png",
  "/partners/logo (7).png",
];

export default function AppWithLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    preloadAssets(ASSETS).then(() => {
      setTimeout(() => setLoading(false), 800);
    });
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ y: 0, opacity: 1 }}
            exit={{ y: -1000, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>
      {!loading && children}
    </>
  );
} 