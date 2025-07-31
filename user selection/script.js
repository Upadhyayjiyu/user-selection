document.addEventListener("DOMContentLoaded", () => {
  const profileCards = document.querySelectorAll(".profile-card");
  const selectedUserText = document.getElementById("selected-user-text");

  const savedUser = localStorage.getItem("selectedUser");
  if (savedUser) {
    selectedUserText.textContent = `✅ You previously selected: ${savedUser}`;
    highlightSelected(savedUser);
  }

  profileCards.forEach(card => {
    const button = card.querySelector("button");
    const userName = card.getAttribute("data-name");

    button.addEventListener("click", () => {
      if (userName === "Add Profile") {
        alert("Feature to add new profile coming soon!");
        return;
      }

      // Save to localStorage
      localStorage.setItem("selectedUser", userName);
      selectedUserText.textContent = `✅ You selected: ${userName}`;
      highlightSelected(userName);
    });
  });

  function highlightSelected(name) {
    profileCards.forEach(card => {
      if (card.getAttribute("data-name") === name) {
        card.classList.add("selected");
      } else {
        card.classList.remove("selected");
      }
    });
  }
});
