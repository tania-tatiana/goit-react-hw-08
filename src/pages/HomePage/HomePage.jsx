import css from "./HomePage.module.css";
export default function HomePage() {
  return (
    <div>
      <h1 className={css.title}>Hello, User!</h1>
      <h2 className={css.text}>
        Welcome to our app! Here you can register or log in to your account to
        access personalized features and convenient management of your profile.
        We care about your security and comfort, providing a fast and easy user
        experience.
      </h2>
    </div>
  );
}
