/**
 * (A) Define Element
 * (B) Function or EventListener
 * (C) Rendering
 */

/**
 * (A)
 * Define Dom-Element from HTML Component.
 */
const headerElem = document.getElementById("app-header");
const mainFlewItemsWrapperElem = document.getElementById(
  "main-flex-items-wrapper"
);
const footerElem = document.getElementById("app-footer");
const sidebarElem = document.getElementById("app-sidebar");

const modalMaskElem = document.getElementById("modal-mask");
const searchModalElem = document.getElementById("search-modal");
const searchModalInput = document.getElementById("search-modal-input");

/**
 * (B)
 *@description [Function] Define function when the modal is opened.
 */
const openSearchModal = () => {
  // modalMaskElem.style.display = "block";
  searchModalElem.style.display = "block";
};

/**
 * (B)
 *@description [Function] Define function when the modal is closed.
 */
const closeSearchModal = () => {
  // modalMaskElem.style.display = "none";
  searchModalElem.style.display = "none";
};

/**
 * (B)
 *@description [Function] Define function when the collapse-button is clicked.
 */
const handleClickCollapseButton = () => {
  const sidebarVisibleStatus = sidebarElem.style.display || "none";
  if (sidebarVisibleStatus === "none") {
    sidebarElem.style.display = "block";
  } else {
    sidebarElem.style.display = "none";
  }
};

/**
 * (B)
 * Define EventListener when the Search-Modal-Input occured keyup event.
 */
searchModalInput.addEventListener("keyup", (e) => {
  const inputValue = e.target.value;
  if (inputValue.length) {
    searchModalInput.style.borderBottomWidth = "2px";
    searchModalInput.style.borderBottomColor = "skyblue";
  } else {
    searchModalInput.style.borderBottomColor = "silver";
    searchModalInput.style.borderBottomWidth = "1px";
  }
});

/**
 * (C)
 * @description [Function] Rendering header content;
 */
const renderingHeaderContent = () => {
  const headerCollapseButtonWrapperElem = document.createElement("div");
  headerCollapseButtonWrapperElem.setAttribute(
    "id",
    ELEM_ID.HEADER_COLLAPSE_BUTTON_WRAPPER
  );
  headerCollapseButtonWrapperElem.innerHTML = getSvgIconHtml("menu");
  headerCollapseButtonWrapperElem.onclick = handleClickCollapseButton;

  const searchButtonElem = document.createElement("button");
  const searchExitButtonElem = document.getElementById(
    "search-modal-exit-button"
  );
  searchButtonElem.setAttribute("id", ELEM_ID.SEARCH_BUTTON);
  searchButtonElem.innerHTML = "검색";

  searchButtonElem.onclick = openSearchModal;
  searchExitButtonElem.onclick = closeSearchModal;

  const timeNotifyIconHtml = getSvgIconHtml("time");
  const timeNotifyTextHtml = `<div id='${ELEM_ID.TIME_NOTIFY_TEXT}'></div>`;

  const timeNotifyWrapperElem = document.createElement("div");
  timeNotifyWrapperElem.setAttribute("id", ELEM_ID.TIME_NOTIFY_WRAPPER);

  timeNotifyWrapperElem.innerHTML = timeNotifyIconHtml + timeNotifyTextHtml;

  const signoutButtonElem = document.createElement("button");
  signoutButtonElem.setAttribute("id", ELEM_ID.SIGNOUT_BUTTON);
  signoutButtonElem.innerHTML = "Sign-Out";

  const headerContentWrapperElem = document.createElement("div");
  headerContentWrapperElem.setAttribute("id", ELEM_ID.HEADER_CONTENT_WRAPPER);

  headerContentWrapperElem.appendChild(searchButtonElem);
  headerContentWrapperElem.appendChild(timeNotifyWrapperElem);
  headerContentWrapperElem.appendChild(signoutButtonElem);

  headerElem.append(headerCollapseButtonWrapperElem);
  headerElem.append(headerContentWrapperElem);
};
renderingHeaderContent();

/**
 * (C)
 * @description [Function] Rendering Main content;
 */
const renderingMainContent = () => {
  //** Fragment : RealDom에 영향을 끼치지 않는 가상의 엘리먼트 */
  const tmpFragmentElem = document.createDocumentFragment();
  for (let i = 0; i < MAIN_FLEX_ITEM_CNT; i++) {
    const flexItemElem = document.createElement("div");
    flexItemElem.setAttribute("class", "main-flex-item");
    flexItemElem.innerHTML = `item-${i + 1}`;
    tmpFragmentElem.append(flexItemElem);
  }
  mainFlewItemsWrapperElem.append(tmpFragmentElem);
};
renderingMainContent();

/**
 * (C)
 * @description [Function] Rendering Sidebar content;
 */
const renderingSidebarContent = () => {
  const sideUlElem = document.createElement("ul");
  for (let i = 0; i < SIDE_FELX_ITEM_CNT; i++) {
    const sideItemElem = document.createElement("li");
    sideItemElem.setAttribute("class", "side-item");
    sideItemElem.innerHTML = `item-${i + 1}`;
    sideUlElem.append(sideItemElem);
  }
  sidebarElem.append(sideUlElem);
};
renderingSidebarContent();

/**
 * (C)
 * @description [Function] Rendering Realtime text at Header(right-side);
 */
const _setTimeText = () => {
  const timeNotifyTextElem = document.getElementById(ELEM_ID.TIME_NOTIFY_TEXT);
  timeNotifyTextElem.innerHTML = getISOStringTime();
  setInterval(() => {
    timeNotifyTextElem.innerHTML = getISOStringTime();
  }, 1000);
};
_setTimeText();

/**
 * (C)
 * @description [Function] Rendering footer content;
 */
const renderingFooter = () => {
  footerElem.innerHTML = FOOTER_TEXT;
};
renderingFooter();
