import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, SelectBox, Text } from "components";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CartNavbar = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="header-row ">
            <Img
              className="h-[30px] w-[90px]"
              src="images/img_car.svg"
              alt="car"
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex sm:flex-1 flex-row gap-9 sm:hidden items-center justify-between w-[498px] sm:w-full">
            <SelectBox
              className="common-pointer font-rubik leading-[normal] text-black-900 text-left text-lg tracking-[-0.50px] w-[17%] sm:w-full"
              placeholderClassName="text-black-900"
              indicator={
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_black_900.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="frameFour"
              options={homeOptionsList}
              isSearchable={false}
              placeholder="Home"
              onClick={() => navigate("/homepage")}
            />
            <Text
              className="common-pointer text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
              onClick={() => navigate("/shop")}
            >
              Shop
            </Text>
            <Text
              className="common-pointer text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
              onClick={() => navigate("/blog")}
            >
              Blog
            </Text>
            <Text
              className="common-pointer text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
              onClick={() => navigate("/aboutus")}
            >
              About
            </Text>
            <Text
              className="common-pointer text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
              onClick={() => navigate("/contactus")}
            >
              Contact
            </Text>
            <Text
              className="common-pointer text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
              onClick={() => navigate("/team")}
            >
              Team
            </Text>
          </div>
          <Img
            className="h-6 sm:hidden w-[132px]"
            src="images/img_icon.svg"
            alt="icon"
          />
        </div>
      </header>
    </>
  );
};

CartNavbar.defaultProps = {};

export default CartNavbar;
