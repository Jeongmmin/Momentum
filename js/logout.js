const logoutBtn = document.querySelector("#logoutBtn");
console.log(logoutBtn);

const hiddenclass = "hidden";
const saveduser = localStorage.getItem("username");

function userLogout() {
        logoutBtn.classList.remove("hidden");
        localStorage.removeItem("username");
        window.location.reload();
}

logoutBtn.addEventListener("click", userLogout);