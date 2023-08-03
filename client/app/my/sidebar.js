import Link from "next/link";

export default function SideBar({ children }) {
  const NavLink = ({ children, href }) => {
    return (
      <Link href={href} className="flex flex-row items-center gap-4 px-2.5 py-1 rounded-lg duration-200 hover:cursor-pointer hover:bg-zinc-700/40">
        {children}
      </Link>
    );
  }

  return (
    <>
      <div className="flex flex-row h-full px-5 md:px-10 py-10 duration-200">
        <div className="hidden md:flex md:flex-col gap-2 w-60 h-min mr-8 p-3 rounded-xl bg-zinc-800">
          <NavLink href="/my/settings">
            <div className="p-1.5 rounded-lg bg-zinc-600/80">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.145 22h1.72c.564 0 .986-.338 1.109-.893l.47-1.983c.32-.113.62-.235.902-.366l1.739 1.071c.46.291 1.015.244 1.4-.141l1.213-1.212c.385-.386.441-.96.13-1.429l-1.061-1.72c.131-.282.254-.583.348-.874l2.002-.47c.554-.122.883-.545.883-1.109v-1.692c0-.554-.329-.987-.883-1.109l-1.983-.479c-.104-.329-.236-.62-.348-.874l1.062-1.758c.3-.479.263-1.015-.141-1.41L18.485 4.34c-.395-.357-.893-.423-1.372-.16l-1.767 1.09a8.81 8.81 0 0 0-.893-.366l-.48-2.011C13.852 2.338 13.43 2 12.866 2h-1.72c-.574 0-.996.338-1.119.893l-.47 2.002c-.32.103-.63.225-.911.366l-1.758-1.08c-.48-.264-.968-.207-1.372.16L4.293 5.552c-.404.394-.441.93-.14 1.41L5.213 8.72c-.113.254-.235.545-.347.874l-1.984.48c-.554.121-.883.554-.883 1.108v1.692c0 .564.329.987.883 1.11l2.002.469c.094.291.216.592.348.874l-1.062 1.72c-.31.47-.254 1.043.141 1.429l1.203 1.212c.385.385.94.432 1.41.141l1.73-1.072c.281.132.582.254.901.367l.47 1.983c.123.555.545.893 1.119.893ZM12 15.29c-1.805 0-3.28-1.485-3.28-3.3A3.287 3.287 0 0 1 12 8.72c1.814 0 3.29 1.475 3.29 3.27a3.301 3.301 0 0 1-3.29 3.3Z"></path>
              </svg>
            </div>
            <p className="text-base">Настройки</p>
          </NavLink>
          <NavLink href="/my/notifications">
            <div className="p-1.5 rounded-lg bg-zinc-600/80">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.72 18H5.28C4.483 18 4 17.569 4 16.936c0-.776.672-1.483 1.331-2.177.089-.093.177-.185.263-.278.568-.607.712-1.856.78-2.868.06-3.378.924-5.71 3.18-6.554C9.876 3.915 10.749 3 12.004 3c1.247 0 2.129.915 2.442 2.059 2.264.844 3.12 3.176 3.188 6.554.06 1.012.212 2.26.772 2.868l.235.247c.673.703 1.359 1.42 1.359 2.208 0 .633-.475 1.064-1.28 1.064ZM12 21c-1.672 0-2.882-.91-3-2h6c-.128 1.09-1.338 2-3 2Z"></path>
              </svg>
            </div>
            <p className="text-base">Уведомления</p>
          </NavLink>
          {/* <NavLink href="/my/documents">
            <div className="p-1.5 rounded-lg bg-zinc-600/80">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.07 21h11.86c2.053 0 3.07-1.017 3.07-3.031V6.031C21 4.017 19.983 3 17.93 3H6.07C4.027 3 3 4.007 3 6.031v11.938C3 19.993 4.027 21 6.07 21ZM7.977 6.324c.528 0 .928.303 1.173.753.244-.45.655-.753 1.154-.753.83 0 1.427.636 1.427 1.486 0 1.271-1.34 2.455-2.327 3.07-.098.05-.176.108-.244.108-.059 0-.157-.049-.245-.107-.968-.685-2.337-1.8-2.337-3.07 0-.851.587-1.487 1.399-1.487ZM7 14v-1h10v1H7Zm0 3v-1.025h7V17H7Z"></path>
              </svg>
            </div>
            <p className="text-base">Документы</p>
          </NavLink> */}
          <NavLink href="/my/organisations">
            <div className="p-1.5 rounded-lg bg-zinc-600/80">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.778 4.862h4.444c.614 0 1.111.475 1.111 1.062V7.25h2.223V5.924c0-1.76-1.493-3.187-3.334-3.187H9.778c-1.841 0-3.334 1.427-3.334 3.187V7.25h2.223V5.924c0-.587.497-1.062 1.11-1.062Z" stroke="#9EA9B7" stroke-width="0.4"></path>
                <path d="M20 7c1.1 0 2 .9 2 2v3H2V9c0-1.1.9-2 2-2h16Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 17c1.105 0 2-.96 2-2.143V14h8v5c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-5h8v.857c0 1.184.895 2.143 2 2.143Z"></path>
              </svg>
            </div>
            <p className="text-base">Организации</p>
          </NavLink>
        </div>
        { children }
      </div>
    </>
  );
}