// භාෂා දෙකේම තියෙන වචන සහ වාක්‍ය (Translation Data)
const translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About Us",
        "nav-companies": "Our Companies",
        "nav-edu": "Education",
        "nav-careers": "Careers",
        "nav-gallery": "Gallery",
        "nav-news": "News",
        "nav-contact": "Contact",
        "hero-title": "Shaping the Future of Business",
        "hero-desc": "Discover innovation, strategic growth, and excellence with Ceylon Direxa International.",
        "hero-btn": "Explore Our Businesses",
        "about-title": "Who We Are",
        "about-desc": "Ceylon International is a leading diversified conglomerate, driven by innovation and excellence in corporate management, direct marketing, and educational services."
    },
    si: {
        "nav-home": "ප්‍රධාන පිටුව",
        "nav-about": "අප ගැන",
        "nav-companies": "අපගේ සමාගම්",
        "nav-edu": "අධ්‍යාපනික සේවා",
        "nav-careers": "වෘත්තීය අවස්ථා",
        "nav-gallery": "ඡායාරූප එකතුව",
        "nav-news": "පුවත්",
        "nav-contact": "සම්බන්ධ වන්න",
        "hero-title": "ව්‍යාපාරික ලෝකයේ අනාගතය වෙනස් කරමින්",
        "hero-desc": "සීලෝන් ඩිරෙක්සා ඉන්ටර්නැෂනල් සමඟින් නවෝත්පාදනය, උපායමාර්ගික වර්ධනය සහ විශිෂ්ටත්වය අත්විඳින්න.",
        "hero-btn": "අපගේ ව්‍යාපාර ගවේෂණය කරන්න",
        "about-title": "අප කවුද?",
        "about-desc": "සීලෝන් ඉන්ටර්නැෂනල් යනු ආයතනික කළමනාකරණය, සෘජු අලෙවිකරණය සහ අධ්‍යාපනික සේවාවන්හි නවෝත්පාදනය සහ විශිෂ්ටත්වය පෙරදැරි කරගත් ප්‍රමුඛ පෙළේ විවිධාංගීකරණය වූ සමාගම් ජාලයකි."
    }
};

// භාෂාව මාරු කරන ප්‍රධාන ෆන්ක්ෂන් එක
function setLanguage(lang) {
    // හැම element එකකම තියෙන data-key එක බලලා අකුරු මාරු කිරීම
    document.querySelectorAll("[data-key]").forEach(element => {
        const key = element.getAttribute("data-key");
        if (translations[lang] && translations[lang][key]) {
            // බටන් එකක් හෝ ලින්ක් එකක් නෙමෙයි නම් (සාමාන්‍ය text නම්) කෙළින්ම අකුරු මාරු කරනවා
            if (element.id === "hero-btn") {
                element.textContent = translations[lang][key];
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });

    // ID එක අනුව තියෙන elements වෙන වෙනම මාරු කිරීම (id="hero-title" වගේ ඒවා)
    const elementsWithId = ["hero-title", "hero-desc", "about-title", "about-desc", "hero-btn"];
    elementsWithId.forEach(id => {
        const element = document.getElementById(id);
        if (element && translations[lang] && translations[lang][id]) {
            element.textContent = translations[lang][id];
        }
    });

    // බටන් වල Active ක්ලාස් එක මාරු කිරීම (පාට වෙනස් වෙන්න)
    if (lang === "en") {
        document.getElementById("btn-en").classList.add("active");
        document.getElementById("btn-si").classList.remove("active");
    } else {
        document.getElementById("btn-si").classList.add("active");
        document.getElementById("btn-en").classList.remove("active");
    }

    // පාවිච්චි කරන භාෂාව බ්‍රවුසර් එකේ සේව් කර තබා ගැනීම (Refresh කරත් පරණ භාෂාවම තියෙන්න)
    localStorage.setItem("selectedLanguage", lang);
}

// බටන් ක්ලික් කරද්දී වැඩ කරන Event Listeners
document.getElementById("btn-en").addEventListener("click", () => setLanguage("en"));
document.getElementById("btn-si").addEventListener("click", () => setLanguage("si"));

// පිටුව ලෝඩ් වෙද්දීම කලින් සිලෙක්ට් කරපු භාෂාව ඇක්ටිව් කිරීම
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("selectedLanguage") || "en";
    setLanguage(savedLang);
});
