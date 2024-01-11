import './Button.css';
type ButtonProps = {
  message: string,
  type: "submit" | "button"
}
export const Button = ({message, type}: ButtonProps) => {
  return (
    <>
      <button className="button-submit" type={type}>{message}</button>

    </>
  );
};
