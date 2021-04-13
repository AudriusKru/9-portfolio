const headerData = {
    topText: {
        isVisible: true,
        content: [
            {
                type: 'link',
                href: '#',
                Text: 'Now hirind'
            },
            {
                type: 'text',
                text: "blablaa"
            },
        ]
    },
    logo: {
        imgPath: './img',
        mobile: 'logo-mobile.png',
        default: 'logo.png',
    },
    nav: [
        {
            type: 'link',
            text: 'Home',
        },
        {
            type: 'link',
            text: 'Compony',
        },
        {
            type: 'link',
            text: 'IT',
        },
        {
            type: 'link',
            text: 'Elements',
        },
        {
            type: 'link',
            text: 'case',
        },
        {
            type: 'link',
            text: 'Blog',
        },
    ],
    languages: {
        imgPath: './img/laguages/',
        default: 'en',
        list: [
            {
                short: 'en',
                full: 'English',
                img: 'en.jpg',
            },
            {
                short: 'fr',
                full: 'Francais',
                img: 'fr.jpg',
            },
            {
                short: 'de',
                full: 'Deutsc',
                img: 'de.jpg',
            },
        ]
    }
}

export { headerData }