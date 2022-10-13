let renderer = function() {
    document.querySelector('button#add-project').addEventListener('click', () => {
        const form = document.querySelector('div.project-form');
        if (form.style.visibility !== 'visible')
            form.style.visibility = 'visible';
        else
            form.style.visibility = 'hidden';
    });

    document.querySelector('div.project-form button').addEventListener('click', () => {
        const input = document.querySelector('div.project-form input');
        if (input.matches(':valid'))
        {
            data.addProject(input.value);
            document.querySelector('div.project-form').style.visibility = 'hidden';
            document.querySelector('div.project-form form').reset();
        }
    });

    document.querySelector('button.projects-dropdown').addEventListener('click', () => {
        const container = document.querySelector('div.generated-projects');
        if (container.style.display !== 'none')
            container.style.display = 'none';
        else
            container.style.display = 'flex';
    });

    function renderAllProjects(projects) {
        const container = document.querySelector('div.generated-projects');
        const keys = Object.keys(projects);
        for (let i = 1; i < keys.length; i++)
        {
            let btn = document.createElement('button');
            btn.setAttribute('type', 'button');
            btn.textContent = keys[i];
            container.appendChild(btn);

        }
    }

    function renderAProject(project) {
        const container = document.querySelector('div.generated-projects');
        let btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.textContent = project;
        container.appendChild(btn);
    }

    return {renderAllProjects, renderAProject};

}();

let data = function() {
    // Objects: Projects are objects mapping the project name to a list of task objects
    let projects = { 'General': [] };

    function addProject(project) {
        if (project in projects)
            return;
        projects[project] = [];
        renderer.renderAProject(project);
    } 

    return {addProject};
}();
