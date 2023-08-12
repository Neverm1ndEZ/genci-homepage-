import React from "react";

const ContributionsCalendar = () => {
	// Replace this data with your actual contribution data
	const contributionData = [
		[1, 1, 2, 3, 4, 5, 6], // Each array represents a week's data (Sunday to Saturday)
		[2, 1, 1, 2, 3, 4, 5],
		[1, 1, 1, 2, 3, 4, 5],
		[10, 1, 1, 2, 3, 4, 5],
		[3, 2],

		// ... continue with more weeks
	];

	const getColorClass = (count) => {
		// Customize color classes based on your preference
		if (count === 0) return "bg-gray-100";
		if (count <= 3) return "bg-green-200";
		if (count <= 6) return "bg-green-400";
		if (count <= 9) return "bg-green-600";
		return "bg-green-800";
	};

	return (
		<div className="grid grid-cols-7 gap-1">
			{contributionData.map((week, weekIndex) =>
				week.map((count, dayIndex) => (
					<div
						key={`${weekIndex}-${dayIndex}`}
						className={`h-8 w-8 ${getColorClass(count)} rounded`}
					/>
				)),
			)}
		</div>
	);
};

export default ContributionsCalendar;
