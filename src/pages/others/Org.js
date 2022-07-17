import Content from "../../layout/content/Content";
import React, { Fragment, useEffect, useState } from "react";
import Head from "../../layout/head/Head";
import OrgTree from "./OrgTree";
import { Button, Col, FormGroup, Label, Row } from "reactstrap";
import { PreviewCard } from "../../components/Component";
import { useQuill } from "react-quilljs";

const Org = () => {
  const { quillRef } = useQuill();
  const [aside, setAside] = useState(false);
  const [treeData, setTreeData] = useState({});
  const [isLoadingTree, setIsLoadingTree] = useState(true);
  // Resizes
  useEffect(() => {
    getTreeData();
    resizeFunc();
    window.addEventListener("resize", resizeFunc);
    return () => {
      window.removeEventListener("resize", resizeFunc);
    };
  }, []);

  const resizeFunc = () => {
    setAside(false);
  };
  const getTreeData = () => {
    const res = {
      core: {
        data: [
          {
            text: "Root node 1",
            state: {
              opened: true
            },
            children: [
              { text: "Child node 1" },
              {
                text: "Initially selected",
                state: {
                  selected: true
                }
              },
              {
                text: "Initially Open",
                state: {
                  opened: true
                },
                children: [
                  {
                    text: "Disabled Node",
                    state: {
                      disabled: true
                    }
                  },
                  { text: "Another Node" }
                ]
              }
            ]
          },
          {
            text: "Root node 2"
          }
        ]
      }
    };
    setTreeData(res);
    setIsLoadingTree(false);
  }

  const [file, setFile] = useState("");
  return (
    <Fragment>
      <Head title="Organization"></Head>
      <Content>
        <div className="nk-ibx">
          <div className={`nk-ibx-aside toggle-screen-lg`}>
            {isLoadingTree}
            {!isLoadingTree && <OrgTree treeData={treeData} treeSearchData={treeData}></OrgTree>}
          </div>
          {aside && <div className="toggle-overlay" onClick={() => setAside(!aside)}></div>}
          <PreviewCard>
            <Row className="gy-4">
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="name" className="form-label">
                    Name
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="name" placeholder="Input placeholder" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="code" className="form-label">
                    Code
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="code" placeholder="Input placeholder" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-textarea" className="form-label">
                    Textarea
                  </Label>
                  <div className="form-control-wrap">
                    <input
                      className="no-resize form-control"
                      type="textarea"
                      id="default-textarea"
                      defaultValue="Large text area content"
                    />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="icon" className="form-label">
                    Default File Upload
                  </Label>
                  <div className="form-control-wrap">
                    <div className="custom-file">
                      <input
                        type="file"
                        multiple
                        className="custom-file-input form-control"
                        id="customFile"
                        onChange={(e) => setFile(e.target.files[0].name)}
                      />
                      <Label className="custom-file-label" htmlFor="customFile">
                        {file === "" ? "Choose file" : file}
                      </Label>
                    </div>
                  </div>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label htmlFor="icon" className="form-label">
                    Content
                  </Label>
                  <div className="form-control-wrap">
                    <div style={{ width: "100%", height: "100%" }}>
                      <div ref={quillRef} />
                    </div>
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <Button className="float-right mt-2" color="primary">Primary</Button>
          </PreviewCard>
        </div>
      </Content>
    </Fragment>
  );
};
export default Org;