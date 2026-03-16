"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type TiltCard3DProps = {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
};

export default function TiltCard3D({
  children,
  className = "",
  intensity = 12,
}: TiltCard3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 300, damping: 25 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), spring);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), spring);
  const [hovering, setHovering] = useState(false);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    const cx = rect.left + w / 2;
    const cy = rect.top + h / 2;
    const px = (e.clientX - cx) / w;
    const py = (e.clientY - cy) / h;
    x.set(px);
    y.set(py);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
    setHovering(false);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onPointerMove={handleMove}
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={handleLeave}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
        transformOrigin: "center center",
        ...(hovering && { scale: 1.02 }),
      }}
    >
      <motion.div
        style={{ transformStyle: "preserve-3d" }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
