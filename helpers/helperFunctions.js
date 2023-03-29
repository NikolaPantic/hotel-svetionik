export const smoothScrollToForm = (e) => {
  e.preventDefault();
  const element = document.getElementById("form-mini");
  element.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
};
