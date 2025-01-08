const COLOR_THEMES = {
    monochrome: {
        name: "সাদা-কালো",
        light: {
            primary: "bg-white",
            secondary: "bg-gray-50",
            text: "text-gray-900",
            textSecondary: "text-gray-600",
            accent: "bg-gray-900",
            accentHover: "hover:bg-gray-800",
            accentText: "text-white",
            border: "border-gray-200",
            card: "bg-white",
        },
        dark: {
            primary: "bg-[#222]",
            secondary: "bg-[#262626]",
            text: "text-[#dedede]",
            textSecondary: "text-gray-300",
            accent: "bg-[#ccc]",
            accentHover: "hover:bg-gray-100",
            accentText: "text-gray-900",
            border: "border-[#222]",
            card: "bg-[#323232]",
        },
    },
    warmEarth: {
        name: "ক্রিম",
        light: {
            primary: "bg-[#F3E9DC]", // Cream
            secondary: "bg-[#EAD5C0]", // Light Peach
            text: "text-[#5A3D2B]", // Dark Brown
            textSecondary: "text-[#8B5A3C]", // Medium Brown
            accent: "bg-[#D8A47F]", // Warm Orange-Brown
            accentHover: "hover:bg-[#C18D69]", // Darker Orange-Brown
            accentText: "text-[#FDF6F0]", // Soft White
            border: "border-[#E7C7A3]", // Muted Peach
            card: "bg-[#FFFFFF]", // White
        },
        dark: {
            primary: "bg-[#5A3D2B]", // Dark Brown
            secondary: "bg-[#8B5A3C]", // Medium Brown
            text: "text-[#F3E9DC]", // Cream
            textSecondary: "text-[#D8A47F]", // Warm Orange-Brown
            accent: "bg-[#F3E9DC]", // Cream
            accentHover: "hover:bg-[#EAD5C0]", // Light Peach
            accentText: "text-[#5A3D2B]", // Dark Brown
            border: "border-[#8B5A3C]", // Medium Brown
            card: "bg-[#5A3D2B]", // Dark Brown
        },
    },
    forest: {
        name: "বন",
        light: {
            primary: "bg-[#E8F4EA]", // Pale Green
            secondary: "bg-[#D3EADC]", // Soft Mint
            text: "text-[#2F5233]", // Dark Forest Green
            textSecondary: "text-[#5B7945]", // Muted Olive Green
            accent: "bg-[#76C893]", // Vibrant Green
            accentHover: "hover:bg-[#68AE83]", // Slightly Darker Green
            accentText: "text-[#FFFFFF]", // White
            border: "border-[#A9D8B5]", // Soft Green
            card: "bg-[#FFFFFF]", // White
        },
        dark: {
            primary: "bg-[#2F5233]", // Dark Forest Green
            secondary: "bg-[#5B7945]", // Muted Olive Green
            text: "text-[#E8F4EA]", // Pale Green
            textSecondary: "text-[#A9D8B5]", // Soft Green
            accent: "bg-[#D3EADC]", // Soft Mint
            accentHover: "hover:bg-[#C5DFC5]", // Lighter Mint
            accentText: "text-[#2F5233]", // Dark Forest Green
            border: "border-[#5B7945]", // Muted Olive Green
            card: "bg-[#2F5233]", // Dark Forest Green
        },
    },
    ocean: {
        name: "সমুদ্র",
        light: {
            primary: "bg-[#E4F1F9]", // Light Sky Blue
            secondary: "bg-[#CDE5F3]", // Soft Aqua
            text: "text-[#2A4F64]", // Deep Blue
            textSecondary: "text-[#49748D]", // Muted Blue
            accent: "bg-[#54A3D9]", // Vibrant Sky Blue
            accentHover: "hover:bg-[#4288B3]", // Darker Sky Blue
            accentText: "text-[#FFFFFF]", // White
            border: "border-[#94C7E9]", // Soft Blue
            card: "bg-[#FFFFFF]", // White
        },
        dark: {
            primary: "bg-[#2A4F64]", // Deep Blue
            secondary: "bg-[#49748D]", // Muted Blue
            text: "text-[#E4F1F9]", // Light Sky Blue
            textSecondary: "text-[#94C7E9]", // Soft Blue
            accent: "bg-[#CDE5F3]", // Soft Aqua
            accentHover: "hover:bg-[#B7D7EA]", // Lighter Aqua
            accentText: "text-[#2A4F64]", // Deep Blue
            border: "border-[#49748D]", // Muted Blue
            card: "bg-[#2A4F64]", // Deep Blue
        },
    },
};
export default COLOR_THEMES;
