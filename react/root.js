var root = React.createElement(
    "nav",
    { "class": "navbar navbar-expand-md navbar-light bg-light" },
    React.createElement(
        "a",
        { href: "#", "class": "navbar-brand" },
        "Brand"
    ),
    React.createElement(
        "button",
        { type: "button", "class": "navbar-toggler", "data-toggle": "collapse", "data-target": "#navbarCollapse" },
        React.createElement("span", { "class": "navbar-toggler-icon" })
    ),
    React.createElement(
        "div",
        { "class": "collapse navbar-collapse", id: "navbarCollapse" },
        React.createElement(
            "div",
            { "class": "navbar-nav" },
            React.createElement(
                "a",
                { href: "#", "class": "nav-item nav-link active" },
                "Home"
            ),
            React.createElement(
                "a",
                { href: "#", "class": "nav-item nav-link" },
                "Profile"
            ),
            React.createElement(
                "a",
                { href: "#", "class": "nav-item nav-link" },
                "Messages"
            ),
            React.createElement(
                "a",
                { href: "#", "class": "nav-item nav-link disabled", tabindex: "-1" },
                "Reports"
            )
        ),
        React.createElement(
            "div",
            { "class": "navbar-nav ml-auto" },
            React.createElement(
                "a",
                { href: "#", "class": "nav-item nav-link" },
                "Login"
            )
        )
    )
);

ReactDOM.render(React.createElement("div", { className: "animateMe" }), document.getElementById('root'));