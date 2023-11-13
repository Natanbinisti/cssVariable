const inputs =document.querySelectorAll('.controls input');
function miseAJour () {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

inputs.forEach(input =>input.addEventListener('change', miseAJour))
inputs.forEach(input =>input.addEventListener('mousemove', miseAJour))