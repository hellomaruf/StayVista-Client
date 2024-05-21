import PropTypes from "prop-types";
import queryString from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoryBox = ({ label, icon: Icon }) => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const category = params.get("category");
  const handleClick = () => {
    const currentQuery = { category: label };
    const uri = queryString.stringifyUrl({
      url: "/",
      query: currentQuery,
    });
    navigate(uri);
  };
  return (
    <div
      onClick={handleClick}
      className={`flex 
  flex-col 
  items-center 
  justify-center 
  gap-2
  p-3
  border-b-2
  hover:text-[#3c8a8d]
  text-[#29ADB2]
  transition
  cursor-pointer ${
    category === label && "border-b-[#29ADB2] text-neutral-800"
  }`}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

CategoryBox.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.elementType,
};

export default CategoryBox;
