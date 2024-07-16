import React from "react";

export const Notification = ({ message }) => {
	if (message.message === null) {
		return null;
	}
	return (
		<>
			{message.type === "success" ? (
				<div
					style={{
						width: "fit-content",
						color: "green",
						fontSize: "15px",
						backgroundColor: "#e4e6eb",
						borderRadius: "5px",
						padding: "15px",
						border: "2px solid green",
						margin: "5px",
					}}
				>
					{message.message}
				</div>
			) : (
				<div
					style={{
						width: "fit-content",
						color: "red",
						fontSize: "15px",
						backgroundColor: "#e4e6eb",
						borderRadius: "5px",
						padding: "15px",
						border: "2px solid red",
						margin: "5px",
					}}
				>
					{message.message}
				</div>
			)}
		</>
	);
};
