"use client";
import React, { useEffect, useState } from "react";
import { Loader } from "./ui/Loader";
import { AnimatePresence, motion } from "framer-motion";

function preloadAssets(assetUrls: string[], timeout = 5000): Promise<void> {
  return Promise.all(
    assetUrls.map((url) => {
      return new Promise((resolve) => {
        if (typeof window === "undefined") return resolve(undefined);
        
        const timeoutId = setTimeout(() => {
          console.warn(`Asset preload timeout: ${url}`);
          resolve(undefined);
        }, timeout);

        if (url.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) {
          const img = new window.Image();
          img.src = url;
          img.onload = () => {
            clearTimeout(timeoutId);
            resolve(undefined);
          };
          img.onerror = () => {
            clearTimeout(timeoutId);
            console.warn(`Failed to preload image: ${url}`);
            resolve(undefined);
          };
        } else if (url.match(/\.(mp4|webm|ogg)$/)) {
          const video = document.createElement("video");
          video.src = url;
          video.onloadeddata = () => {
            clearTimeout(timeoutId);
            resolve(undefined);
          };
          video.onerror = () => {
            clearTimeout(timeoutId);
            console.warn(`Failed to preload video: ${url}`);
            resolve(undefined);
          };
        } else {
          clearTimeout(timeoutId);
          resolve(undefined);
        }
      });
    })
  ).then(() => undefined);
}

// Only preload critical assets that are immediately visible
const CRITICAL_ASSETS = [
  "/Hero/about.jpg", // Hero image - fixed path
  "/partners/logo (1).png", // First few partner logos
  "/partners/logo (2).png",
  "/partners/logo (3).png",
];

// Assets to load after initial render (non-critical)
const SECONDARY_ASSETS = [
  "/Portfolio/project (1).jpg",
  "/Portfolio/project (2).jpg",
  "/Portfolio/project (3).jpg",
  "/Portfolio/project (4).jpg",
  "/Portfolio/project (5).jpg",
  "/Portfolio/project (6).jpg",
  "/Portfolio/project (7).jpg",
  "/Portfolio/project (8).jpg",
  "/partners/logo (4).png",
  "/partners/logo (5).png",
  "/partners/logo (6).png",
  "/partners/logo (7).png",
];

export default function AppWithLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load critical assets first with a shorter timeout
    preloadAssets(CRITICAL_ASSETS, 3000).then(() => {
      // Add a minimum loading time for better UX
      setTimeout(() => setLoading(false), 500);
    });

    // Load secondary assets in the background after initial render
    setTimeout(() => {
      preloadAssets(SECONDARY_ASSETS, 10000);
    }, 1000);
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