const axios = require("axios");

const fetchUserData = async (userId) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    return null;
  }
};

const displayUserInfo = async (userId) => {
  console.log(`Fetching data for user ${userId}...`);
  const userData = await fetchUserData(userId);

  if (userData) {
    console.log(`Name: ${userData.name}`);
    console.log(`Email: ${userData.email}`);
    console.log(`Company: ${userData.company.name}`);
  } else {
    console.log(`Failed to fetch data for user ${userId}`);
  }
};

const fetchMultipleUsers = async () => {
  const userIds = [1, 2, 3];
  for (const userId of userIds) {
    await displayUserInfo(userId);
    console.log("---");
  }
};

fetchMultipleUsers().catch((error) =>
  console.error("An error occurred:", error)
);
