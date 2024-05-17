const staffMembers = [
    { name: "4950", role: "owners", pronouns: "4950 ", displayrole: "Owner", mcuuid:"98d7aec4-341a-44cc-9652-4ffa3b75be46", weight: 100 },
    { name: "_Aquaotter_", role: "dev", pronouns: "he/him", displayrole: "Dev", mcuuid:"70b05929-c09f-4c6e-8d68-e8b1a8c02cbc", weight: 90},
    { name: "UntitledGoose", role: "op", pronouns: "she/her", displayrole: "OP", mcuuid:"ac94d512-c072-41db-984f-e1203783d362", weight: 80 },
    { name: "Sanan1010", role: "builders", pronouns: "he/him", displayrole: "Builder", mcuuid:"5ee7b861-1b72-46eb-b512-4a9c61b5a5e3", weight: 70, links: [{name: "rick grimes(?)", ref: "https://www.google.com/search?q=Rick+Grimes&sca_esv=6965cced8725ff61&sca_upv=1&sxsrf=ADLYWIK2Q4ACLfLy_79MrtPB2KwtcKXgvg%3A1715969725449&source=hp&ei=vZ5HZv_1GJOAi-gP7f-48AQ&iflsig=AL9hbdgAAAAAZkeszW92FZ7n0kFbFgpgOp0wO41bygRN&ved=0ahUKEwi_yLavpZWGAxUTwAIHHe0_Dk4Q4dUDCBU&uact=5&oq=Rick+Grimes&gs_lp=Egdnd3Mtd2l6IgtSaWNrIEdyaW1lczIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI1glQAFiTCXAAeACQAQCYAeYBoAHWDqoBBTAuMi43uAEDyAEA-AEBmAIJoALwDsICChAjGIAEGCcYigXCAgsQLhiABBixAxiDAcICCxAAGIAEGLEDGIMBwgIOEAAYgAQYsQMYgwEYigXCAhQQLhiABBixAxjRAxiDARjHARiKBcICCBAuGIAEGLEDwgIOEC4YgAQYsQMYxwEYrwHCAggQABiABBixA8ICDhAuGIAEGLEDGNEDGMcBwgIFEC4YgATCAg4QLhiABBixAxiDARiKBZgDAJIHBTAuMS44oAf8Zg&sclient=gws-wiz"}] },
    { name: "DevTomi", role: "reporter", pronouns: "", displayrole: "Reporter", mcuuid:"9c746457-9e0e-4926-a394-260eb14a8762", weight: 60 },
    { name: "Toniid", role: "reporter", pronouns: "", displayrole: "Reporter", mcuuid:"11f21694-da0b-4b6d-ba37-0da178d66b73", weight: 60 },
    { name: "xSqueakPearl", role: "reporter", pronouns: "", displayrole: "Reporter", mcuuid:"f7a34611-fed0-49f9-af37-17f93c782b17", weight: 60 },
    { name: "Dezova", role: "misc", pronouns: "", displayrole: "Misc", mcuuid:"339c99b8-f68e-4b46-b86f-4b66756348c8", weight: 60 },
    { name: "ClownCaked", role: "builders", pronouns: "he/him", displayrole: "Builder", mcuuid:"2949ea5b-0e99-4a5b-90bf-4c389e09950d", weight: 70 },
    { name: "I_S_H", role: "reporter", pronouns: "Fuck you ish /pos", displayrole: "Reporter", mcuuid:"2dddbad0-818a-48c8-b8eb-ff21afeb2440", weight: 60 },
    { name: "Hackmeme", role: "reporter", displayrole: "Reporter", pronouns: "", mcuuid: "e45a9ad1-4f5c-449f-8203-730a918d4c3f", weight: 60 },
    { name: "SavageCreature", role: "reporter", pronouns: "", displayrole: "Reporter", mcuuid:"1630333d-f6e3-4d47-8161-b2a88928ee23", weight: 60 },
    //{ name: "Kingdarksword", role: "buildhelp", displayrole: "Build Help", weight: 50 },
    { name: "Deejeen256", pronouns: "", mcuuid: "c054a35a-df37-4ca9-8f35-a07ca2b914a7", role: "helper", displayrole: "Helpers", weight: 50 },
    { name: "agmas", role: "retiredowner", pronouns: "she/her", displayrole: "Retired", mcuuid:"a36800f5-62b5-49a8-b669-b7c061ea594e",weight: 50, links: [{name: "Website", ref: "https://agmas.org/"}] }

    // the pronouns are just set by whatever they have on discord! if they don't have anything clearly set, i just used nothing; to not be disrespectful. please change before release as it looks off with someone people not having them
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
let lastMemberRole = "";

// Add staff members to the DOM
staffMembers.forEach(member => {

    const div = document.createElement("div");
    
    div.classList.add("staff-member");
    div.classList.add(member.role);
    const img = document.createElement("img");
    img.src = "https://crafatar.com/renders/head/" + member.mcuuid;
    const nameHeading = document.createElement("h4");
    nameHeading.textContent = member.name;
    const roleParagraph = document.createElement("p");
    roleParagraph.textContent = member.displayrole;
    const pronounParagraph = document.createElement("p");
    pronounParagraph.textContent = member.pronouns;
    pronounParagraph.style.fontSize = "12px";

    pronounParagraph.style.margin = "0px";
    roleParagraph.style.margin = "3px";
    roleParagraph.style.fontSize = "15px";
    nameHeading.style.fontSize = "20px";

    
    div.appendChild(img);
    div.appendChild(nameHeading);
    div.appendChild(pronounParagraph);
    div.appendChild(roleParagraph);
    if (member.links != null) {
    member.links.forEach((p)=>{

        const link = document.createElement("a");
        link.textContent = p.name;
        link.href = p.ref;
        link.style.fontSize = "10px";
        div.appendChild(link);
        
    })
    }
    staffList   .appendChild(div);
    lastMemberRole = member.role;
});

