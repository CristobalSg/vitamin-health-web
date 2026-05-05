import {
  createElement,
  type CSSProperties,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
};

export default function Reveal({ children, className = "", delay = 0, as: Component = "div", ...props }: RevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
      if (mediaQuery.matches) {
        setIsVisible(true);
      }
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    const element = elementRef.current;

    if (!element || prefersReducedMotion || isVisible) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isVisible, prefersReducedMotion]);

  const style: CSSProperties = prefersReducedMotion ? {} : { transitionDelay: `${delay}ms` };
  const motionClassName = prefersReducedMotion
    ? ""
    : "transform transition-all duration-700 ease-out will-change-transform";
  const visibilityClassName = isVisible || prefersReducedMotion ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";

  return createElement(
    Component,
    {
      ...props,
      ref: elementRef,
      className: `${motionClassName} ${visibilityClassName} ${className}`.trim(),
      style,
    },
    children,
  );
}
