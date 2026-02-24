import { useEffect, useRef, useState } from "react";

const LazyImage = ({ src, alt }: { src: string; alt: string }) => {
    const imgRef = useRef<HTMLImageElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) observer.observe(imgRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <img
            ref={imgRef}
            src={isVisible ? src : ""}
            data-src={src}
            alt={alt}
            className={`w-full h-auto rounded shadow transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
        />
    );
};

export default LazyImage;
