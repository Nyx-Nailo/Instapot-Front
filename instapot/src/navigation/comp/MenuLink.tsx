import { Link } from "react-router-dom";

type TMenuLink = {
  path?: string;
  icon: JSX.Element;
  title: string;
  func?: () => void;
  hidden?: boolean;
};

const MenuLink = ({ path = "", icon, title, func, hidden }: TMenuLink) => {
  const isFunc = (
    <button onClick={func} className={`${hidden ? "hidden lg:" : ""}flex flex-row gap-2 hover:text-gray-300`}>
      {icon}
      <span className='hidden md:flex'>{title}</span>
    </button>
  );

  const noFunc = (
    <Link to={path} className={`${hidden ? "hidden lg:" : ""}flex flex-row gap-2 hover:text-gray-300`}>
      {icon}
      <span className='hidden md:flex'>{title}</span>
    </Link>
  );

  return func ? isFunc : noFunc;
};

export default MenuLink;
