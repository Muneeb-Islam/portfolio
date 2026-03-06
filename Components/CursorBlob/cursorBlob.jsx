"use client";
import { useEffect, useRef } from "react";

export default function CursorBlob() {
    const blobRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;

        let currentX = 0;
        let currentY = 0;

        const speed = 0.08; // smoothness (lower = smoother)

        const moveBlob = () => {
            currentX += (mouseX - currentX) * speed;
            currentY += (mouseY - currentY) * speed;

            if (blobRef.current) {
                blobRef.current.style.transform =
                    `translate3d(${currentX}px, ${currentY}px, 0)`;
            }

            requestAnimationFrame(moveBlob);
        };

        const handleMouseMove = (e) => {
            const rect = sectionRef.current?.getBoundingClientRect();

            if (!rect) return;

            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        sectionRef.current?.addEventListener("mousemove", handleMouseMove);
        requestAnimationFrame(moveBlob);

        return () => {
            sectionRef.current?.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div ref={sectionRef} className="cursor-section">
            <div ref={blobRef} className="cursor-blob" />
            <h1>Your Section Content</h1>
        </div>
    );
}