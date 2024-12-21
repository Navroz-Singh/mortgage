/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}",],
    theme: {
        extend: {
            fontFamily: {
                "project": ["Plus Jakarta Sans"],
            },
            colors:{
                Lime: "hsl(61, 70%, 52%)",
                Red: "hsl(4, 69%, 50%)",
                slate_100:"hsl(202, 86%, 94%)",
                slate_300:"hsl(203, 41%, 72%)",
                slate_500:"hsl(200, 26%, 54%)",
                slate_700:"hsl(200, 24%, 40%)",
                slate_900:"hsl(202, 55%, 16%)"
            },
            boxShadow:{
                "custom-shadow":"0px -3px 0px 0px hsl(61, 70%, 52%)"
            }
        },
    },
    plugins: [],
}

