const interactiveContainers = document.querySelectorAll(".interactiveContainer");
const encryptContainer = interactiveContainers[0];
const decryptContainer = interactiveContainers[1];

const openContainer = (container) => {
    container.children.item(0).classList.remove("appear");
    container.children.item(0).classList.add("dissipate");

    setTimeout(() => {
        container.classList.remove("closed");
        container.classList.add("opened");
    }, 1000)

    setTimeout(() => {
        container.children.item(0).classList.remove("dissipate");
        container.children.item(0).classList.add("appear");
    }, 3000)

}

const closeContainer = (container) => {
    container.children.item(0).classList.remove("appear");
    container.children.item(0).classList.add("dissipate");

    setTimeout(() => {
        container.classList.remove("opened");
        container.classList.add("closed");
    }, 1000)

    setTimeout(() => {
        container.children.item(0).classList.remove("dissipate");
        container.children.item(0).classList.add("appear");
    }, 3000)

}

interactiveContainers.forEach(container => {
    container.addEventListener("click", () => {
        if (container === interactiveContainers[0]) {

            if (interactiveContainers[1].classList.contains("opened")) {
                closeContainer(interactiveContainers[1]);

                setTimeout(() => {
                    openContainer(container);
                }, 3000)
            } else /*if (container.classList.contains("closed") || !container.classList.contains("opened"))*/{
                openContainer(container);
            }

        } else {

            if (interactiveContainers[0].classList.contains("opened")) {
                closeContainer(interactiveContainers[0]);

                setTimeout(() => {
                    openContainer(container);
                }, 3000)
            } else /*if (container.classList.contains("closed") || !container.classList.contains("opened"))*/{
                openContainer(container);
            }

        }
    })
})

