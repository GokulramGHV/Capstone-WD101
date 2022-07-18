let darkMode = false;
document.getElementById('sun').style.display = 'none';
function toggle() {
  darkMode = !darkMode;
  if (darkMode) {
    document.getElementById('moon').style.display = 'none';
    document.getElementById('sun').style.display = 'block';
    document.getElementsByTagName('HTML')[0].classList.add('dark');
  } else {
    document.getElementById('moon').style.display = 'block';
    document.getElementById('sun').style.display = 'none';
    document.getElementsByTagName('HTML')[0].classList.remove('dark');
  }
}

let viewProjects = false;
document.getElementById('projects').style.display = 'none';
function setViewProjects() {
  viewProjects = !viewProjects;
  if (viewProjects) {
    document.getElementById('home').classList.add('elementToFadeOut');
    document.getElementById('home').style.display = 'none';
    document.getElementById('projects').style.display = 'block';
    document.getElementById('projects').classList.add('elementToFadeIn');
    document.getElementById('toggle').innerHTML = 'Back to Home';
  } else {
    document.getElementById('projects').classList.add('elementToFadeOut');
    document.getElementById('projects').style.display = 'none';
    document.getElementById('home').style.display = 'block';
    document.getElementById('home').classList.add('elementToFadeIn');
    document.getElementById('toggle').innerHTML = 'View Projects';
  }
}
