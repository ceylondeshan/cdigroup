const languages = {
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
        "nav-home": "මුල් පිටුව",
        "nav-about": "අප ගැන",
        "nav-companies": "අපගේ සමාගම්",
        "nav-edu": "අධ්‍යාපන",
        "nav-careers": "වෘත්තීය අවස්ථා",
        "nav-gallery": "ඡායාරූප",
        "nav-news": "පුවත්",
        "nav-contact": "සම්බන්ධ වන්න",
        "hero-title": "ව්‍යාපාරික ලෝකයේ අනාගතය හැඩගස්වන්නන්",
        "hero-desc": "සෙලෝන් ඩිරෙක්සා ඉන්ටර්නැෂනල් සමඟින් නවෝත්පාදනය, උපායමාර්ගික වර්ධනය සහ විශිෂ්ටත්වය අත්විඳින්න.",
        "hero-btn": "අපගේ ව්‍යාපාර ගවේෂණය කරන්න",
        "about-title": "අප කවුද?",
        "about-desc": "සෙලෝන් ඉන්ටර්නැෂනල් යනු ආයතනික කළමනාකරණය, සෘජු අලෙවිකරණය සහ අධ්‍යාපනික සේවාවන්හි විශිෂ්ටත්වය කරා මෙහෙයවනු ලබන ශ්‍රී ලංකාවේ ප්‍රමුඛතම විවිධාංගීකරණය වූ සමාගම් සමූහයකි."
    }
};

const btnEn = document.getElementById('btn-en');
const btnSi = document.getElementById('btn-si');

function changeLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (languages[lang][key]) {
            element.textContent = languages[lang][key];
        }
    });
    
    // Individual elements without data-key (IDs)
    document.getElementById('hero-title').textContent = languages[lang]['hero-title'];
    document.getElementById('hero-desc').textContent = languages[lang]['hero-desc'];
    document.getElementById('hero-btn').textContent = languages[lang]['hero-btn'];
    document.getElementById('about-title').textContent = languages[lang]['about-title'];
    document.getElementById('about-desc').textContent = languages[lang]['about-desc'];
}

btnEn.addEventListener('click', () => {
    btnEn.classList.add('active');
    btnSi.classList.remove('active');
    changeLanguage('en');
});

btnSi.addEventListener('click', () => {
    btnSi.classList.add('active');
    btnEn.classList.remove('active');
    changeLanguage('si');
});
