import PropTypes from "prop-types";

const GridBackground = ({
    className = "",
    gridOpacity = 0.2,
    color = "gray",
    spacing = 16,
    // primaryColor = "#333",
    // secondaryColor = "#fff",
    pattern = "grid",
    dotSize = 1,
}) => {
    // const colorMap = {
    //     gray: {
    //         primary: "from-gray-400",
    //         secondary: "to-gray-500",
    //     },
    //     blue: {
    //         primary: "from-blue-400",
    //         secondary: "to-blue-500",
    //     },
    //     amber: {
    //         primary: "from-amber-400",
    //         secondary: "to-amber-500",
    //     },
    //     emerald: {
    //         primary: "from-emerald-400",
    //         secondary: "to-emerald-500",
    //     },
    // };

    // const gradientColors = {
    //     primary:
    //         primaryColor || colorMap[color]?.primary || colorMap.gray.primary,
    //     secondary:
    //         secondaryColor ||
    //         colorMap[color]?.secondary ||
    //         colorMap.gray.secondary,
    // };

    if (pattern === "dots") {
        return (
            <div className={`fixed inset-0 -z-10 h-full w-full ${className}`}>
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at center, ${color} ${dotSize}px, transparent ${dotSize}px)`,
                        backgroundSize: `${spacing}px ${spacing}px`,
                        opacity: gridOpacity,
                    }}
                />
            </div>
        );
    }

    return (
        <div className={`fixed inset-0 -z-10 h-full w-full ${className}`}>
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                    linear-gradient(to right, ${color} 1px, transparent 1px),
                    linear-gradient(to bottom, ${color} 1px, transparent 1px)
                  `,
                    backgroundSize: `${spacing}px ${spacing}px`,
                    opacity: gridOpacity,
                }}
            />
        </div>
    );
};

GridBackground.propTypes = {
    className: PropTypes.node,
    gridOpacity: PropTypes.node,
    color: PropTypes.node,
    spacing: PropTypes.node,
    pattern: PropTypes.node,
    dotSize: PropTypes.node,
    // primaryColor: PropTypes.node,
    // secondaryColor: PropTypes.node,
};

export default GridBackground;
