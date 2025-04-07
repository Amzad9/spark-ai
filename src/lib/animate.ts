
import anime from 'animejs';

// Animation presets
export const fadeIn = (element: string, delay: number = 0, duration: number = 800) => {
  return anime({
    targets: element,
    opacity: [0, 1],
    translateY: [20, 0],
    easing: 'easeOutExpo',
    duration,
    delay,
  });
};

export const scaleIn = (element: string, delay: number = 0, duration: number = 600) => {
  return anime({
    targets: element,
    scale: [0.85, 1],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration,
    delay,
  });
};

export const slideInLeft = (element: string, delay: number = 0, duration: number = 800) => {
  return anime({
    targets: element,
    translateX: [-100, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration,
    delay,
  });
};

export const slideInRight = (element: string, delay: number = 0, duration: number = 800) => {
  return anime({
    targets: element,
    translateX: [100, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration,
    delay,
  });
};

export const floatAnimation = (element: string) => {
  return anime({
    targets: element,
    translateY: [0, -15],
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
    duration: 3000,
    autoplay: true
  });
};

export const pulseAnimation = (element: string, scale: number = 1.05) => {
  return anime({
    targets: element,
    scale: [1, scale],
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
    duration: 1500,
    autoplay: true
  });
};

export const staggerElements = (elements: string, staggerDelay: number = 100, duration: number = 800) => {
  return anime({
    targets: elements,
    translateY: [20, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration,
    delay: anime.stagger(staggerDelay)
  });
};

export const wavyText = (element: string) => {
  anime({
    targets: `${element} .wavy-letter`,
    translateY: [-5, 5],
    delay: anime.stagger(80),
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
    duration: 1000
  });
};

export const morphBackground = (element: string) => {
  anime({
    targets: element,
    background: [
      'linear-gradient(45deg, rgba(66,99,255,0.1) 0%, rgba(55,47,160,0.05) 100%)',
      'linear-gradient(45deg, rgba(55,47,160,0.05) 0%, rgba(66,99,255,0.1) 100%)'
    ],
    easing: 'easeInOutQuad',
    duration: 8000,
    direction: 'alternate',
    loop: true
  });
};
