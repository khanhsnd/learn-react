import { PreviewCard } from "../../components/preview/Preview";
import TreeView from "react-jstree-table";
import React, { Fragment } from "react";

const OrgTree = ({ ...props }) => {
  return (
    <Fragment>
      <PreviewCard>
        <TreeView treeData={props.treeData} treeSearchData={props.treeData}></TreeView>
      </PreviewCard>
    </Fragment>
  );
};
export default OrgTree;