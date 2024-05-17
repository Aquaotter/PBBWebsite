const staffMembers = [
    { name: "4950", role: "owners", displayrole: "Owner", weight: 100 },
    { name: "_Aquaotter_", role: "dev", displayrole: "Dev", weight: 90 },
    { name: "UntitledGoose", role: "op", displayrole: "OP", weight: 80 },
    { name: "Sanan1010", role: "builders", displayrole: "Builder", weight: 70 },
    { name: "DevTomi", role: "reporter", displayrole: "Reporter", weight: 60 },
    { name: "SavageCreature", role: "reporter", displayrole: "Reporter", weight: 60 },
    //{ name: "Kingdarksword", role: "buildhelp", displayrole: "Build Help", weight: 50 },
    { name: "Agmass", role: "retiredowner", displayrole: "Retired Owner", weight: 50 },
];

// Sort staff members based on role and weight
staffMembers.sort((a, b) => {
    if (a.role !== b.role) {
        return a.weight > b.weight ? -1 : 1;
    } else {
        return a.weight > b.weight ? -1 : 1;
    }
});

const staffList = document.getElementById("staffList");

// Add staff members to the DOM
staffMembers.forEach(member => {
    const div = document.createElement("div");
    div.classList.add("staff-member");
    div.classList.add(member.role);
    const img = document.createElement("img");
    img.src = "../Images/MinecraftFaces/"+member.name+".png";
    const nameHeading = document.createElement("h4");
    nameHeading.textContent = member.name;
    const roleParagraph = document.createElement("p");
    roleParagraph.textContent = member.displayrole;
    div.appendChild(img);
    div.appendChild(nameHeading);
    div.appendChild(roleParagraph);
    staffList.appendChild(div);
});

