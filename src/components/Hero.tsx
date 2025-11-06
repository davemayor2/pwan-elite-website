'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string>("");

  useEffect(() => {
    // Try to fetch as a Blob to avoid proxies/tunnels forcing download behavior
    let objectUrl: string | null = null;
    fetch('/heroSectionVid.mp4', { headers: { Range: 'bytes=0-' } })
      .then(res => res.ok ? res.blob() : Promise.reject(res.statusText))
      .then(blob => {
        objectUrl = URL.createObjectURL(blob);
        setVideoUrl(objectUrl);
      })
      .catch(() => {
        // Fallback to direct src if fetch fails (works on local/dev normally)
        setVideoUrl("");
      });

    const video = videoRef.current;
    if (video) {
      video.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }

    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        src={(videoUrl || '/heroSectionVid.mp4') + '#t=0.001'}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/posterdelay.png"
        className="absolute inset-0 w-full h-full object-cover z-[1] pointer-events-none"
        onCanPlay={() => {
          setIsVideoReady(true);
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
          }
        }}
        onLoadedData={() => {
          setIsVideoReady(true);
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
          }
        }}
        onPlaying={() => setIsVideoReady(true)}
        onError={() => {
          // Keep showing video layer; rely on poster rather than toggling fallback
          console.log('Video error');
        }}
      />

      {/* Image fallback if video can't play */}
      {!isVideoReady && (
        <div className="absolute inset-0 z-0 bg-[url('/posterdelay.png')] bg-cover bg-center" />
      )}
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-20">
        {/* STARLINE above eyebrow */}
        <div className="mb-4 flex justify-center">
          <Image src="/STARLINE.svg" alt="Divider star line" width={418} height={24} />
        </div>

        {/* Eyebrow - Glassmorphism with icon (red tint + rounded) */}
        <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 text-white font-normal text-sm font-heading glass-red rounded-pill">
          <Image src="/Home Page Icon.svg" alt="Home Icon" width={24} height={24} />
          <span>Exposing Clients To A Goldmine</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight font-heading">
          Building Wealth Through Real Estate Ownership
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 font-body">
          Secure your future with premium land investments from Nigeria&apos;s trusted real estate network.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/properties" 
            className="btn-primary px-8 py-4 text-lg font-semibold min-w-[200px] font-body"
          >
            View Land Listings
          </Link>
          <Link 
            href="/contact" 
            className="btn-outline px-8 py-4 text-lg font-semibold min-w-[200px] font-body"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
