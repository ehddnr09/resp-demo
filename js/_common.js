const DEFAULT_SLEEP_TIMEMILLIS = 1000;
const sleep = async () =>
  await new Promise((resolve) =>
    setTimeout(() => resolve(), DEFAULT_SLEEP_TIMEMILLIS)
  );

const ELEM_ID = {
  HEADER_COLLAPSE_BUTTON_WRAPPER: "header-collapse-button-wrapper",
  HEADER_CONTENT_WRAPPER: "header-content-wrapper",
  TIME_NOTIFY_WRAPPER: "time-notify-wrapper",
  TIME_NOTIFY_TEXT: "time-notify-text",
  SIGNOUT_BUTTON: "signout-button",
  SEARCH_BUTTON: "search-button",
};

const HEADER_MENUS = [
  { label: "menu-1", value: "menu1" },
  { label: "menu-2", value: "menu2" },
  { label: "menu-3", value: "menu3" },
];

const MAIN_FLEX_ITEM_CNT = 4;
const SIDE_FELX_ITEM_CNT = 10;

const FOOTER_TEXT = "This is footer content.";

const getISOStringTime = () => {
  const isoTime = new Date(
    new Date().getTime() + 3600 * 9 * 1000
  ).toISOString();
  return isoTime.split("T")[0] + " " + isoTime.split("T")[1].split(".")[0];
};

const getSvgIconHtml = (name) => {
  const mapNameToSvg = {
    time: () => `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        width="30px"
        color="black"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    `,
    menu: () => `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    `,
  };
  return mapNameToSvg[name]();
};
