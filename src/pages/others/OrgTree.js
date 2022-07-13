import { PreviewCard } from "../../components/preview/Preview";
import TreeView from "react-jstree-table";
import React, { Fragment, useState } from "react";
import { jsTreeData } from "../components/misc/Data";
const OrgTree = ({...props}) => {
  const [state] = useState({
    data:jsTreeData
  })
  return(
    <Fragment>
      <PreviewCard>
        <TreeView treeData={state.data} treeSearchData={state.data}></TreeView>
      </PreviewCard>
    </Fragment>
  )
}
export default OrgTree