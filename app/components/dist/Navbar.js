"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var fa_1 = require("react-icons/fa");
function Navbar() {
    return (React.createElement("nav", { className: "bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10" },
        React.createElement("div", { className: "prose prose-xl mx-auto flex justify-between flex-col sm:flex-row" },
            React.createElement("h1", { className: "text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0" },
                React.createElement(link_1["default"], { href: "/", className: "text-white/90 no-underline hover:text-white" }, "CBC SRG")),
            React.createElement("div", { className: "flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl" },
                React.createElement(link_1["default"], { className: "text-white/90 hover:text-white", href: "https://www.youtube.com" },
                    React.createElement(fa_1.FaYoutube, null)),
                React.createElement(link_1["default"], { className: "text-white/90 hover:text-white", href: "https://www.reddit.com/" },
                    React.createElement(fa_1.FaLaptop, null)),
                React.createElement(link_1["default"], { className: "text-white/90 hover:text-white", href: "https://github.com/eavoutdom" },
                    React.createElement(fa_1.FaGithub, null)),
                React.createElement(link_1["default"], { className: "text-white/90 hover:text-white", href: "https://twitter.com/elonmusk" },
                    React.createElement(fa_1.FaTwitter, null))))));
}
exports["default"] = Navbar;
