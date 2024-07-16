import React from "react";

export const Notification = ({ message }) => {
	if (message === null) {
		return null;
	}
	return (
		<div
			style={{
				width: "fit-content",
				color: "green",
				fontSize: "15px",
				backgroundColor: "#e4e6eb",
				padding: "20px",
				border: "2px solid green",
				margin: "5px",
			}}
		>
			{message}
		</div>
	);
};
