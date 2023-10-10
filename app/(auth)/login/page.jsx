"use client"
import axios from "axios";

async function submitHandler(formData) {
  console.log(formData);
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  try {
    const response = await axios.post("/login/api/", data);
    console.log("Response data:", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
}

export default function Page() {
  return (
    <>
      <form className="flex flex-col"  action={submitHandler}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" className="text-black" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="text-black"
        />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}
