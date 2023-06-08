import React from "react";
import SocialLogin from "../../components/SocialLogin";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPass) {
      return toast.error("Password and confirm password do not match");
    }

    console.log(data);
  };

  return (
    <div className="hero p-10 bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register Here!</h1>
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">Name</span>
              </label>
              <input
                {...register("name", { maxLength: 50 })}
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name?.type === "maxLength" && (
                <p className="text-error" role="alert">
                  Name's maximum Length is 50 characters
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email?.type === "required" && (
                <p className="text-error" role="alert">
                  Email is required
                </p>
              )}
            </div>
            <div className="flex gap-5">
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-lg font-medium">
                    Password
                  </span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /^(?=.*[A-Z])/,
                  })}
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-error" role="alert">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-error" role="alert">
                    Password must be at least 6 characters long
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-error" role="alert">
                    Password must be include at least one capital letter
                  </p>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-lg font-medium">
                    Confirm Password
                  </span>
                </label>
                <input
                  {...register("confirmPass", {
                    required: true,
                    minLength: 6,
                    pattern: /^(?=.*[A-Z])/,
                  })}
                  type="text"
                  placeholder="confirm password"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Photo URL
                </span>
              </label>
              <input
                {...register("photoURL", { maxLength: 2000 })}
                type="text"
                placeholder="photo url"
                className="input input-bordered"
              />
            </div>
            <p className="text-sm">
              Already have an account?{" "}
              <Link to="/login">
                <span className="link font-medium">Login now</span>
              </Link>
            </p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <div>
              <SocialLogin></SocialLogin>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
