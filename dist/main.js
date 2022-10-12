let renderer = function() {
    document.querySelector('button.add-project').addEventListener('click', () => {
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

    this.clearProjects = function() {
        
    }

    this.renderProjects = function(projects) {
        const projectsButton = document.querySelector('div.projects button.add-project');
        const keys = Object.keys(projects);
        for (let i = 1; i < keys.length; i++)
        {
            if (keys[i] !== 'General')
            {
                let btn = document.createElement('button');
                btn.setAttribute('type', 'button');
                btn.textContent = keys[i];
                document.querySelector('div.projects').insertBefore(btn, projectsButton);
            }
        }
    }

    return {renderProjects};

}();

let data = function() {
    // Objects: Projects are objects mapping the project name to a list of task objects
    let projects = { 'General': [] };

    this.addProject = function(project) {
        if (project in this.projects)
            return;
        projects[project] = [];
        renderer.renderProjects(projects);
    } 

    return {projects, addProject};
}();
