import Content from "../../layout/content/Content";
import React, { Fragment, useEffect, useState } from "react";
import Head from "../../layout/head/Head";
import { contacts, inboxLabels, inboxList } from "../app/inbox/InboxData";
import OrgTree from "./OrgTree";

const Org = () => {
  const [aside, setAside] = useState(false);
  // Resizes
  useEffect(() => {
    resizeFunc();
    window.addEventListener("resize", resizeFunc);
    return () => {
      window.removeEventListener("resize", resizeFunc);
    };
  }, []);

  const resizeFunc = () => {
    setAside(false);
  };

  return (
    <Fragment>
      <Head title="Organization"></Head>
      <Content>
        <div className="nk-ibx">
          <div className={`nk-ibx-aside toggle-screen-lg`}>
            <OrgTree></OrgTree>
          </div>
          {aside && <div className="toggle-overlay" onClick={() => setAside(!aside)}></div>}

        </div>
      </Content>
    </Fragment>
  );
};
export default Org;