import Logo from "./assets/SkinCheckLogo.png";

export function Logo() {
  return (
    <img src={typeof Logo === "string" ? Logo : ""} />
  );
}