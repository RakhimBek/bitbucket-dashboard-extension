console.log('Booo!!');

let folderSvg='<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" viewBox="0 0 128 128" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    <!-- Generator: Sketch 48.2 (47327) - http://www.bohemiancoding.com/sketch --><title>yellow/96</title>    <desc>Created with Sketch.</desc><defs></defs>    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <g id="yellow/96">            <rect id="Rectangle-3" fill="#FFC400" x="0" y="0" width="128" height="128"></rect>            <path d="M60.73,40.45 L60.73,32.29 C60.7080468,30.3300793 59.1100356,28.7543867 57.15,28.76 L27.89,28.76 C25.9299644,28.7543867 24.3319532,30.3300793 24.31,32.29 L24.31,95.77 C24.3319532,97.7299207 25.9299644,99.3056133 27.89,99.3 L100.61,99.3 C102.570036,99.3056133 104.168047,97.7299207 104.19,95.77 L104.19,44 C104.168047,42.0400793 102.570036,40.4643867 100.61,40.47 L60.73,40.47 L60.73,40.45 Z" id="Shape" fill-opacity="0.31" fill="#091E42" fill-rule="nonzero"></path>            <path d="M104.18,51.62 L104.18,96.72 C104.18,98.2719201 102.92192,99.53 101.37,99.53 L27.12,99.53 C25.5680799,99.53 24.31,98.2719201 24.31,96.72 L24.31,51.62 L104.17,51.62 L104.18,51.62 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero"></path>            <path d="M72.8,88.28 L68.88,84.17 L77.64,75 L68.88,65.8 L72.8,61.69 L83.52,72.91 C84.6121103,74.0662147 84.6121103,75.8737853 83.52,77.03 L72.8,88.28 Z" id="Shape" fill="#7A869A" fill-rule="nonzero"></path>            <path d="M55.16,61.66 L59.08,65.77 L50.33,75 L59.09,84.2 L55.17,88.31 L44.45,77 C43.3578897,75.8437853 43.3578897,74.0362147 44.45,72.88 L55.16,61.66 Z" id="Shape" fill="#7A869A" fill-rule="nonzero"></path></g></g></svg>'

function createLi(href, name) {    
    // project avatar
    let projectAvatar = document.createElement("div");
    projectAvatar.innerHTML = `<div class="project-avatar"><div style="display: inline-block; position: relative; outline: 0px;">${folderSvg}</div></div>`;

    let repositoryName = document.createElement("div");
    repositoryName.innerText = name;
    repositoryName.className = "repository-name";

    // repository details
    let repositoryDetails = document.createElement("div");
    repositoryDetails.className = "repository-details";
    repositoryDetails.appendChild(repositoryName);

    let aElement = document.createElement("a");
    aElement.href = href;
    aElement.appendChild(projectAvatar);
    aElement.appendChild(repositoryDetails);

    let liElement = document.createElement("li");
    liElement.appendChild(aElement);
    return liElement;
};


let dashboardMyProjectsList = document.createElement("ol");
dashboardMyProjectsList.className = "dashboard-repositories-list";

dashboardMyProjectsList.appendChild(createLi("/browse", "bir"));
dashboardMyProjectsList.appendChild(createLi("/browse", "eki"));
dashboardMyProjectsList.appendChild(createLi("/browse", "ush"));
dashboardMyProjectsList.appendChild(createLi("/browse", "tort"));

let dashboardMyProjectsHeader = document.createElement("h3");
dashboardMyProjectsHeader.textContent = "My Projects";

let dashboardMyProjects = document.createElement("div");
dashboardMyProjects.className = "dashboard-my-repositories";
dashboardMyProjects.style = "margin: 10px 0px 0 24px;";
dashboardMyProjects.appendChild(dashboardMyProjectsHeader);
dashboardMyProjects.appendChild(dashboardMyProjectsList);

let section = document.querySelector('.side-panel')
section.insertBefore(dashboardMyProjects, section.firstChild);