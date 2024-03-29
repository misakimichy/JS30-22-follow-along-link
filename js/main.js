(function(){
    const triggers = document.querySelectorAll('a');
    const highlight = document.createElement('span');
    highlight.classList.add('highlight');
    document.body.append(highlight);

    const highlightLink = (e) => {
        // figure out the width of hovered element
        const linkCoords = e.currentTarget.getBoundingClientRect();
        highlight.style.width = `${linkCoords.width}px`;
        highlight.style.height = `${linkCoords.height}px`;
        highlight.style.transform = `translate(${linkCoords.left}px, ${linkCoords.top}px)`;
    };

    triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
}());