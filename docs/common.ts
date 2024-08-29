const navModal = document.getElementById("navModal");

// script for the navigation modal
function openNavModal(): void {
  if (!navModal) {
    throw new Error("navModal failed to load");
  }
  navModal.classList.add("navModalFlex");
  document.body.style.position = "fixed";
  document.body.style.top = `-${window.scrollY}px`;
  (navModal as HTMLDialogElement).showModal();
}

function closeNavModal(): void {
  if (!navModal) {
    throw new Error("navModal failed to load");
  }
  navModal.classList.remove("navModalFlex");
  document.body.style.position = "";
  document.body.style.top = "";
  (navModal as HTMLDialogElement).close();
}
