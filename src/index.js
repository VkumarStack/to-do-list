export default renderer() = function() {
    const projectButton = document.querySelector('button.add-project');
    projectButton.addEventListener('click', () => {
        projectButton.nextSibling.style.visibility = 'visible';
    })

}();