var navModal = document.getElementById("navModal");
// script for the navigation modal
function openNavModal() {
    if (!navModal) {
        throw new Error("navModal failed to load");
    }
    navModal.classList.add("navModalFlex");
    document.body.style.position = "fixed";
    document.body.style.top = "-".concat(window.scrollY, "px");
    navModal.showModal();
}
function closeNavModal() {
    if (!navModal) {
        throw new Error("navModal failed to load");
    }
    navModal.classList.remove("navModalFlex");
    document.body.style.position = "";
    document.body.style.top = "";
    navModal.close();
}
