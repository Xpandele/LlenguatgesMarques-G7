document.addEventListener('DOMContentLoaded', () => {
    const footer = document.createElement('footer');
  
    const linkElement = document.createElement('a');
    linkElement.href = 'https://github.com/Xpandele/LlenguatgesMarques-G7';
    linkElement.target = '_blank';
  
    const imageElement = document.createElement('img');
    imageElement.src = 'https://cdn-icons-png.flaticon.com/512/25/25231.png';
    imageElement.alt = 'GitHub';
  
    linkElement.appendChild(imageElement);
  
    footer.appendChild(linkElement);
  
    document.body.appendChild(footer);
  });
  