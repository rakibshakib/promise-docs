const apiURL = "https://jsonplaceholder.typicode.com/users";

const fetchUserData = () => {
    return new Promise((resolve, reject) => {
        fetch(apiURL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => resolve(data))
            .catch((error) => reject(error));
    });
};
console.log(fetchUserData())
// Calling the API and handling success and error
fetchUserData()
    .then((data) => {
        console.log("User data fetched successfully:", data);
    })
    .catch((error) => {
        console.error("Error fetching user data:", error.message);
    });
