import React, { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: null,
    password: null,
    remember: null,
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });
  const submitLogin = (e) => {
    e.preventDefault();
    // setLoading(true);

    if (validate(e.target.email.value, e.target.email.id) === false) {
      console.log("email error");
      setErrors((errors[e.target.email.id] = true));
      return;
    } else {
      setErrors((errors[e.target.email.id] = false));
    }
    if (validate(e.target.password.value, e.target.password.id) === false) {
      console.log("password error");
      setErrors((errors[e.target.password.id] = true));
      return;
    } else {
      setErrors((errors[e.target.password.id] = false));
    }

    setUser((current) => {
      current[e.target.email.id] = e.target.email.value;
      current[e.target.password.id] = e.target.password.value;
      current[e.target.remember.id] = e.target.remember.checked;
    });

    setTimeout(() => {
      setLoading(false);
      console.log(user);
      console.log(errors);
      localStorage.setItem("data", JSON.stringify(user));
    }, 4000);

    // console.log(loading);
  };

  const validate = (str, el) => {
    if (str.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <div className="flex h-screen w-full justify-center items-center">
        <div className="card md:w-[500px] w-[400px] bg-primary p-10">
          <h1 className="text-4xl font-bold text-white">myBlog Login</h1>
          <form action="#" method="post" onSubmit={submitLogin}>
            <div className="input-group mt-5">
              <label htmlFor="email" className="text-white">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full mb-5 rounded-sm text-xl p-2 text-black"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password" className="text-white">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full mb-5 rounded-sm text-xl p-2 text-black"
                placeholder="••••••••"
              />
            </div>
            <div className="button-group flex justify-between items-center">
              <div className="input-group flex items-center h-full gap-3">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-[20px] w-[20px] rounded-sm text-xl p-2 text-black rounded-xl"
                />
                <label htmlFor="remember" className="text-white">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                id="login"
                className="bg-secondary disabled:bg-primary disabled:border-secondary disabled:border-2 text-white px-6 py-2 rounded-sm"
                disabled={loading ? true : false}
              >
                {loading ? "Loading. . ." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
