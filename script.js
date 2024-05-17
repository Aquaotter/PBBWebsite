const pages = [
    { name: "Back", ref: "../index.html"},
    { name: "Staff", ref: "../Staff/index.html"},
    { name: "Features", ref: "../Features/index.html"},
    { name: "Maps", ref: "../Maps/index.html"},
    { name: "Discord", ref: "https://discord.gg/cAMwGNyBAq"}
]

if (document.title == "PrisonButBad Website") {
    pages.forEach((p)=>{
        p.ref = p.ref.replace("..", ".");
    });
}

const nav = document.getElementById("nav");
// Add staff members to the DOM
pages.forEach(member => {

    const a = document.createElement("a");
    a.href = member.ref;
    a.className = "header-link";
    a.innerText = member.name;
    nav.appendChild(a);

});

