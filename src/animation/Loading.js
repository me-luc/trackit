import { ThreeDots } from "react-loader-spinner";

export default function Loading() {
	return (
		<ThreeDots
			radius="9"
			color="#fff"
			ariaLabel="three-dots-loading"
			wrapperStyle
			wrapperClass
			visible={true}
		/>
	);
}
