import User from "./user.model";

export const createUserService = async () => {
  try {
    const user = new User({
      id: "2",
      role: "student",
      password: "password",
      name: {
        firstName: "John",
        middleName: "Doe",
        lastName: "Doe",
      },
      dateOfBirth: "1990-01-01",
      gender: "male",
      email: "k2x2k@example.com",
      contactNo: "1234567890",
      emergencyContactNo: "9876543210",
      presentAddress: "123 Main St",
      permanentAddress: "456 Elm St",
    });

    await user.save();
    console.log("User created successfully:", user);
    return user; // Return the created user
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
};
