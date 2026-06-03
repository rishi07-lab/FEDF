// =======================================
// TypeScript-like Interface (for understanding)
// interface User {
//    id: number;
//    name: string;
//    email: string;
// }
// =======================================
// API Layer (Async Programming)
const UserAPI = {
    fetchUsers: async function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = true;
                if (success) {
                    resolve([
                        { id: 1, name: "Rishitha", email: "rishitha@gmail.com" },
                        { id: 2, name: "Shravya", email: "shravya@gmail.com" },
                        { id: 3, name: "Geethika", email: "geethika@gmail.com" },
                        { id: 4, name: "Siri", email: "siri@gmail.com" },
                        { id: 5, name: "Bhavitha", email: "bhavitha@gmail.com" },
                        { id: 6, name: "Vinod", email: "vinod@gmail.com" },
                        { id: 7, name: "Abhijay", email: "abhijay@gmail.com" },
                        { id: 8, name: "Shrinitha", email: "shrinitha@gmail.com" },
                        { id: 9, name: "Sahasra", email: "sahasra@gmail.com" },
                        { id: 10, name: "Anvitha", email: "anvitha@gmail.com" },

                    ]);
                } else {
                    reject("Failed to fetch users");
                }
            }, 2000);
        });
    }
};
// UI Layer
const UI = {
    displayUsers(users) {
        const userList = document.getElementById("userList");
        userList.innerHTML = "";
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(li);
        });
    }
};
// Controller Layer
async function loadUsers() {
    try {
        console.log("Loading users...");
        const users = await UserAPI.fetchUsers();
        UI.displayUsers(users);
        console.log("Users loaded successfully");
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong!");
    }
}
