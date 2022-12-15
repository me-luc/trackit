import { ThreeDots } from "react-loader-spinner";

export default function Loading({ width }) {
	return (
		<ThreeDots
			radius="9"
			color="#fff"
			width={width || 80}
			ariaLabel="three-dots-loading"
			wrapperStyle
			wrapperClass
			visible={true}
		/>
	);
}
