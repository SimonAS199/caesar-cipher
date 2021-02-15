const interactiveContainers = document.querySelectorAll(".interactiveContainer");
const encryptInputs = document.querySelectorAll(".invisible");
const decryptInputs = document.querySelectorAll(".invisible2");

const openContainer = (container) => {

    container.children.item(0).classList.remove("appear");
    container.children.item(0).classList.add("dissipate");

    setTimeout(() => {
        container.classList.remove("closed");
        container.classList.add("opened");
    }, 500)

    setTimeout(() => {
        container.children.item(0).classList.remove("dissipate");
        container.children.item(0).classList.add("appear");

        if (container === interactiveContainers[0]){
            encryptInputs.forEach(input => {
                input.classList.remove("invisible");
                input.classList.remove("dissipate");
                input.classList.add("appear");
            })
        } else {
            decryptInputs.forEach(input => {
                input.classList.remove("invisible2");
                input.classList.remove("dissipate");
                input.classList.add("appear");
            })
        }
    }, 1500)

}

const closeContainer = (container) => {

    
    container.classList.remove("opened");
    container.classList.add("closed");

    container.children.item(0).classList.remove("appear");
    container.children.item(0).classList.add("dissipate");

    if (container === interactiveContainers[0]){
        encryptInputs.forEach(input => {
            input.classList.remove("appear");
            input.classList.add("dissipate");

            setTimeout(() => {
                input.classList.add("invisible");
            },500)
        })
    } else {
        decryptInputs.forEach(input => {
            input.classList.remove("appear");
            input.classList.add("dissipate");

            setTimeout(() => {
                input.classList.add("invisible2");
            },500)
        })
    }

    setTimeout(() => {
        container.children.item(0).classList.remove("dissipate");
        container.children.item(0).classList.add("appear");
    }, 1500)

}

interactiveContainers.forEach(container => {
    container.addEventListener("click", () => {
            if (container === interactiveContainers[0]) {

                if (interactiveContainers[1].classList.contains("opened")) {
                    closeContainer(interactiveContainers[1]);

                    setTimeout(() => {
                        openContainer(container);
                    }, 1500)
                } else if (container.classList.contains("opened")) {
                    return;
                } else /*if (container.classList.contains("closed") || !container.classList.contains("opened"))*/{
                    openContainer(container);
                }

            } else {

                if (interactiveContainers[0].classList.contains("opened")) {
                    closeContainer(interactiveContainers[0]);

                    setTimeout(() => {
                        openContainer(container);
                    }, 1500)
                } else if (container.classList.contains("opened")) {
                    return;
                } else /*if (container.classList.contains("closed") || !container.classList.contains("opened"))*/
                {
                    openContainer(container);
                }

            }
        }
    )
})

