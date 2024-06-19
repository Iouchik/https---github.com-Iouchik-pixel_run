export const keyboard = {
    get(key) {
        return this[key]
    }
}

document.addEventListener("keydown", (event) => {
    keyboard[event.code] = true;
});

document.addEventListener("keyup", (event) => {
    keyboard[event.code] = false;
});