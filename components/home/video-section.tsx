'use client';

import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function VideoSection() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [userMutedManually, setUserMutedManually] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const updateTime = () => setCurrentTime(video.currentTime);
        const updateDuration = () => setDuration(video.duration);

        video.addEventListener('timeupdate', updateTime);
        video.addEventListener('loadedmetadata', updateDuration);

        return () => {
            video.removeEventListener('timeupdate', updateTime);
            video.removeEventListener('loadedmetadata', updateDuration);
        };
    }, []);

    // Intersection Observer to auto-mute/unmute based on visibility
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Only auto-mute/unmute if user hasn't manually toggled
                    if (!userMutedManually) {
                        if (entry.isIntersecting) {
                            // Video is in viewport - unmute
                            video.muted = false;
                            setIsMuted(false);
                        } else {
                            // Video is out of viewport - mute
                            video.muted = true;
                            setIsMuted(true);
                        }
                    }
                });
            },
            {
                threshold: 0.5, // Trigger when 50% of video is visible
            }
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, [userMutedManually]);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
            // Mark that user manually toggled mute
            setUserMutedManually(true);
        }
    };

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(e.target.value);
        if (videoRef.current) {
            videoRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <section className="py-8 sm:py-14 lg:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="font-display text-4xl sm:text-5xl font-semibold text-[#1a2b4a] text-center mb-6 sm:mb-10 tracking-tight leading-tight sm:leading-tight leading-[1.15]">
                    See Pong Party Games in Action
                </h2>
                <div
                    className="max-w-[1200px] mx-auto overflow-hidden rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.2)] relative group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-auto max-h-[70vh] block"
                    >
                        <source src="/Pong-Party-Games.mov" type="video/mp4" />
                        <div className="bg-gray-100 p-12 text-center">
                            <p className="text-gray-600">Video not available. Please add Pong-Party-Games.mov or Pong-Party-Games.mp4 to the public folder.</p>
                        </div>
                    </video>

                    {/* Video Controls Overlay */}
                    <div
                        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        {/* Progress Bar */}
                        <div className="mb-3">
                            <input
                                type="range"
                                min="0"
                                max={duration || 0}
                                value={currentTime}
                                onChange={handleSeek}
                                aria-label="Video progress"
                                className="w-full h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:w-3.5 [&::-moz-range-thumb]:h-3.5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-lg hover:[&::-webkit-slider-thumb]:scale-110 hover:[&::-moz-range-thumb]:scale-110 transition-all"
                                style={{
                                    background: `linear-gradient(to right, white ${(currentTime / duration) * 100}%, rgba(255,255,255,0.3) ${(currentTime / duration) * 100}%)`
                                }}
                            />
                        </div>

                        {/* Controls Bar */}
                        <div className="flex items-center justify-between text-white">
                            <div className="flex items-center gap-3">
                                {/* Play/Pause Button */}
                                <button
                                    onClick={togglePlayPause}
                                    className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                                    aria-label={isPlaying ? 'Pause' : 'Play'}
                                >
                                    {isPlaying ? (
                                        <Pause className="w-5 h-5" />
                                    ) : (
                                        <Play className="w-5 h-5" />
                                    )}
                                </button>

                                {/* Mute/Unmute Button */}
                                <button
                                    onClick={toggleMute}
                                    className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                                >
                                    {isMuted ? (
                                        <VolumeX className="w-5 h-5" />
                                    ) : (
                                        <Volume2 className="w-5 h-5" />
                                    )}
                                </button>

                                {/* Time Display */}
                                <div className="text-sm font-medium">
                                    {formatTime(currentTime)} / {formatTime(duration)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
