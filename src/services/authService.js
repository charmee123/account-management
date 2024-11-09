// authService is an object with methods for user registration, login, and account management
const authService = {
  // Register a new user by saving their email and password in local storage
  register: ({ email, password }) => {
    // Check if a user with this email already exists
    if (localStorage.getItem("user")) {
      throw new Error("User already exists"); // Throw an error if user already exists
    }

    // Save the new user in localStorage
    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user)); // Store user data as a JSON string in local storage
    return user; // Return the user object as the registration response
  },

  // Login an existing user by verifying their credentials
  login: async (email, password) => {
    // Fetch the saved user from local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Check if the user exists and if the password matches
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      return storedUser; // Return the stored user data as a successful login response
    } else {
      throw new Error("Invalid credentials"); // Throw an error if login fails
    }
  },

  // Update the logged-in user's information
  updateUser: ({ email, password }) => {
    // Fetch the user data from local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // If there’s no user data, throw an error
    if (!storedUser) {
      throw new Error("User not found"); // This could mean the user is not logged in
    }

    // Update the stored user's email and password with the new values
    const updatedUser = { email, password };
    localStorage.setItem("user", JSON.stringify(updatedUser)); // Save updated user data in local storage
    return updatedUser; // Return the updated user object as a response
  },

  // Logout by removing user data from local storage
  logout: () => {
    localStorage.removeItem("user"); // Remove the user data from local storage
  },
};

export default authService;
