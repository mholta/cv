const months = [
  { long: 'Januar', short: 'Jan' },
  { long: 'Februar', short: 'Feb' },
  { long: 'Mars', short: 'Mars' },
  { long: 'April', short: 'Apr' },
  { long: 'Mai', short: 'Mai' },
  { long: 'Juni', short: 'Jun' },
  { long: 'Juli', short: 'Jul' },
  { long: 'August', short: 'Aug' },
  { long: 'September', short: 'Sept' },
  { long: 'Oktober', short: 'Okt' },
  { long: 'November', short: 'Nov' },
  { long: 'Desember', short: 'Des' },
];

const getDateString = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  return `${months[month].short} ${year}`;
};

const mo = (month) => month - 1;

const isOverflown = ({
  clientWidth,
  clientHeight,
  scrollWidth,
  scrollHeight,
}) => scrollHeight > clientHeight || scrollWidth > clientWidth;

const E = (elementType, ...classes) => {
  const DOMElement = document.createElement(elementType);
  for (const c of classes) DOMElement.classList.add(c);
  return DOMElement;
};
