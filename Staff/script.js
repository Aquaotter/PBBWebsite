const staffMembers = [
    { name: "4950", role: "owners", displayrole: "Owner", weight: 100 },
    { name: "_Aquaotter_", role: "dev", displayrole: "Dev", weight: 90 },
    { name: "UntitledGoose", role: "dev", displayrole: "Dev", weight: 90 },
    { name: "Agmass", role: "dev", displayrole: "Dev", weight: 90 },
    { name: "ClownCaked", role: "builders", displayrole: "Builders", weight: 70 },
    { name: "Sanan1010", role: "builders", displayrole: "Builders", weight: 70 },
    { name: "4950", role: "builders", displayrole: "Builders", weight: 70 },
    { name: "SavageCreature", role: "reporter", displayrole: "Reporter", weight: 60 },
    { name: "Hackmeme", role: "reporter", displayrole: "Reporter", weight: 60 },
    { name: "xSqueakpearl", role: "reporter", displayrole: "Reporter", weight: 60 },
    { name: "Toniid", role: "reporter", displayrole: "Reporter", weight: 60 },
    { name: "DevTomi", role: "reporter", displayrole: "Reporter", weight: 60 },
    { name: "I_S_H", role: "reporter", displayrole: "Reporter", weight: 60 },
    { name: "FrikkyLight", role: "helper", displayrole: "Helpers", weight: 50 },
    { name: "Dezova", role: "misc", displayrole: "Misc", weight: 10 },
];/*
            .owners { color: red; }
            .dev { color: gold; }
            .retiredowner { color: aqua; }
            .builders { color: yellow; }
            .reporter { color: green; }
            .op { color: aqua; }
            .buildhelp { color: yellow; }
            .misc { color: yellow; }
*/
/*Owner:

  4950

  Developers
   (Aquaotter, Goose, Agmas)

  Operator
  (NONE, KEEP BLANK TILL WE FIND)

  Builders
  (Clowncaked, Sanan1010, 4950)

  Reporters
  (SavageCreature, Hackmeme, xSqueakpearl, Toniid, DevTomi, I_S_H)

  Helpers
  (FrikkyLight)

  Misc
  (Dezova)*/

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

