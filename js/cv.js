/* Personalia */
document.querySelector('#personalia').innerHTML = personaliaLines
  .map(
    (e) => `
  <${e.link ? `a href="${e.link}"` : 'div'} class="personalia--item-wrapper">
    ${
      (e.icon ?? '') &&
      `<div class="personalia--icon-wrapper">
    ${e.icon}
    </div>`
    }
    <div class="personalia--content">
    ${e.content}
    </div>
  </${e.link ? 'a' : 'div'}>`
  )
  .join('');

/* ListItems */
document.querySelector('#lists-target').innerHTML += listItems
  .map(
    (listItem) => `
    <section class="category-section js-wrap-me">
        <div class="category-title-wrapper">
            <h2>${listItem.title}</h2>
            <div class="line"></div>
        </div>
        <ul>
            ${(() => {
              return listItem.items
                .sort((a, b) =>
                  listItem.type === DATE_BASED // Only sort if type is DATE_BASED
                    ? (a.until ?? new Date()) < (b.until ?? new Date())
                    : listItem.type === PROJECT
                    ? a.date < b.date
                    : true
                )
                .map((item) => {
                  switch (listItem.type) {
                    case PROJECT:
                      return `
                    <li class="list-item__project">
                      <h3 class="item__title">${item.title} (${
                        (item.date ?? '') &&
                        `<span class="item__date__project">${getDateString(
                          item.date
                        )}</span>`
                      })</h3>
                        ${
                          (item.technologies ?? '') &&
                          `<div class="item__description italic">${item.technologies}</div>`
                        }
                        ${
                          (item.description ?? '') &&
                          `<div class="item__description">${item.description}</div>`
                        }
                        ${`<div class="item__description">
                          ${
                            (item.live ?? '') &&
                            `<a href="${item.live}">Live</a>`
                          } · 
                          ${
                            (item.github ?? '') &&
                            `<a href="${item.github}">GitHub</a>`
                          }
                          </div>`}
                    </li>`;

                    case REGULAR_LINE:
                      return `
                    <li class="list-item__project">
                      ${
                        (item.content ?? '') &&
                        `<div class="item__description">${item.content}</div>`
                      }
                      ${
                        (item.contact ?? '') &&
                        `<div class="item__description">${item.contact}</div>`
                      }
                    </li>`;

                    default:
                      return `
                <li class="list-item">
                <div class="item__date">${
                  listItem.type === DATE_BASED
                    ? `${getDateString(item.since)} - ${
                        item.until ? getDateString(item.until) : 'd.d.'
                      }`
                    : item.title
                }
                </div>
                <div>
                    ${
                      listItem.type === DATE_BASED
                        ? `<h3 class="item__title">${item.title}</h3>`
                        : ''
                    }
                    ${
                      (item.description ?? '') &&
                      `<div class="item__description">${item.description}</div>`
                    }
                </div>
            </li>`;
                  }
                })
                .join('');
            })()}
        </ul>
    </section>`
  )
  .join('');

const wrapPages = () => {
  const PagesWrapper = document.getElementById('pages-wrapper');

  const initialContent = document.querySelector('#initialContent');
  const wrapElements = document.querySelectorAll('#content .js-wrap-me');

  let LastPage = document.querySelector('.page:last-child');
  let LastPageInnerWrapper = LastPage.querySelector('.page__inner-wrapper');

  LastPageInnerWrapper.appendChild(initialContent);

  const newPage = () => {
    const Page = E('div', 'page');
    const PageInnerGrid = E('div', 'page__inner-grid');
    Page.appendChild(PageInnerGrid);
    const PageInnerWrapper = E('div', 'page__inner-wrapper');
    const Footer = E('footer');
    PageInnerGrid.appendChild(PageInnerWrapper);
    PageInnerGrid.appendChild(Footer);
    PagesWrapper.appendChild(Page);
  };

  wrapElements.forEach((wrapElement) => {
    LastPageInnerWrapper.appendChild(wrapElement);

    if (isOverflown(LastPageInnerWrapper)) {
      newPage();

      LastPageInnerWrapper = document.querySelector(
        '.page:last-child .page__inner-wrapper'
      );

      LastPageInnerWrapper.appendChild(wrapElement);
    }
  });

  const fillFooterContent = () => {
    const footers = PagesWrapper.querySelectorAll('footer');
    const count = footers.length;

    footers.forEach((Footer, index) => {
      Footer.innerHTML = `Side ${index + 1} av ${count}`;
    });
  };

  fillFooterContent();
};

wrapPages();
