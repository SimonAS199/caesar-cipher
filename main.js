const interactiveContainers = document.querySelectorAll(".interactiveContainer");
const encryptContainer = interactiveContainers[0];
const decryptContainer = interactiveContainers[1];

const openContainer = (container) => {
    container.children.item(0).classList.add("dissipate");
    setTimeout(() => {
        container.classList.add("opened");
    }, 1000)

    setTimeout(() => {
        container.children.item(0).classList.add("appear");
    }, 3000)
}

const closeContainer = (container) => {
    container.children.item(0).classList.remove("dissipate");
    container.children.item(0).classList.add("dissipate");

    setTimeout(() => {
        container.classList.remove("opened");
        container.classList.add("closed");
    },1000)

    setTimeout(() => {
        container.children.item(0).classList.remove("dissipate");
        container.children.item(0).classList.add("appear");
    }, 3000)
}

interactiveContainers.forEach(container => {
    container.addEventListener("click", () => {
        openContainer(container)
    })
})