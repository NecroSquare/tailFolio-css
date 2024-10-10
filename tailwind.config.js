/** @type {import('tailwindcss').Config} */
module.exports = {
content: ['index.html'],
darkMode: "class",
theme: {
    container: {
        center: true,
        padding: '16px',
    },
extend: {
    fontFamily: {
    nunito: ["Nunito"],
    },
    colors: {
        prime: '#38bdf8',
        sec: '#06b6d4',
        text: '#64748b', 
    },
    screens: {
        '2xl': '1320px',
    },
},
},
}


