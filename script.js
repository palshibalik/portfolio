// Simple mouse movement effect

const orb = document.querySelector(".orb");

document.addEventListener("mousemove", (event) => {

    const x = (event.clientX / window.innerWidth - 0.5) * 30;
    const y = (event.clientY / window.innerHeight - 0.5) * 30;

    orb.style.transform =
        `translate(${x}px, ${y}px)`;

});
