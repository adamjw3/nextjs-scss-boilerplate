export const fade = {
    initial: { opacity: 0 },
    enter: {
        opacity: 1,
        transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] },
    },
    exit: {
        opacity: 0.5,
        transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] },
    },
};

export const revealInOut = {
    initial: { y: '130%' },
    enter: {
        y: '0%',
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
        y: '130%',
        transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
    },
};
