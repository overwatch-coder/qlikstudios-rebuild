const getSelectedEventOptions = (
  type: "photography" | "videography" | "both"
) => {
  switch (type) {
    case "photography":
      return ["Graduation", "Wedding", "Birthday", "Events", "Others"];
    case "videography":
      return ["Graduation", "Wedding", "Content-Creation", "Events", "Others"];
    case "both":
      return ["Graduation", "Wedding", "Birthday", "Events", "Others"];
  }
};
