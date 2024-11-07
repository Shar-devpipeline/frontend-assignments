const createHeading = (size, text) => {
  if (size < 1 || size > 6) {
    throw new Error("Heading size must be between 1 and 6");
  }

  const heading = document.createElement(`h${size}`);
  heading.textContent = text;

  return heading;
};

const render = (element, container = document.body) => {
  container.appendChild(element);
};

const firstHeading = createHeading(3, "H3 Tag");
const secondHeading = createHeading(6, "H6 Tag");
