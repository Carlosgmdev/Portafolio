export const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

export const getRandomId = () => {
    return Math.random().toString(36).substr(2, 9);
}