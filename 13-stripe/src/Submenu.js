import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();

  const [columns, setColumns] = useState("col-2");
  const [isDescriptionExist, setIsDescriptionExist] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    setColumns("col-2");

    const value = links.every((link) => link.description);

    console.log(links);
    console.log(value);
    setIsDescriptionExist(value);

    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.lenght === 3) {
      setColumns("col-3");
    }

    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]);

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      {/* <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, url, icon } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div> */}

      {isDescriptionExist ? (
        <div className="great">
          {links.map((link, index) => {
            const { label, url, icon, description } = link;
            return (
              <a href={url} className="link-item">
                <span className="icon-container">{icon}</span>
                <span className="title-container">
                  <span className="title">{label}</span>
                  <span className="description">{description}</span>
                </span>
              </a>
            );
          })}
        </div>
      ) : (
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { label, url, icon } = link;
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      )}
    </aside>
  );
};

export default Submenu;
