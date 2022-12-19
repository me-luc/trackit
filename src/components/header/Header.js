import styled from "styled-components";
import { darkBlue } from "../../constants/colors";
import headerLogo from "../../assets/name-header.png";
import { useContext } from "react";
import errorImg from "../../assets/image-error.png";
import { UserContext } from "../../context/UserContext";

export default function Header() {
	const { user } = useContext(UserContext);

	return (
		<StyledPage>
			<img src={headerLogo} alt="logo" />
			<ProfileImg
				src={user.image ? user.image : errorImg}
				alt="personal profile"
			/>
		</StyledPage>
	);

	//let userImg = handleUserImg(user.image);
	// function handleUserImg(img) {
	// 	console.log(typeof img);
	// 	if (img == null) {
	// 		return errorImg;
	// 	}
	// 	return img;
	// }
}

const StyledPage = styled.div`
	width: 100vw;
	height: 70px;
	position: fixed;
	top: 0;
	left: 0;

	background: ${darkBlue};
	display: flex;
	justify-content: space-between;
	align-items: center;

	box-sizing: border-box;
	padding: 0 30px;
`;

const ProfileImg = styled.img`
	width: 51px;
	height: 51px;
	border-radius: 98.5px;
	overflow: hidden;
	object-fit: cover;
`;
