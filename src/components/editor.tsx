import * as React from "react";
import "froala-editor/js/plugins.pkgd.min.js";
// import "froala-editor/js/froala_editor.pkgd.min.js";

// Require Editor CSS files.
// import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

import Froala from "react-froala-wysiwyg";

const defaultContent = `<div>
<section data-element_type="section" data-id="6dad7bdb">
  <div data-element_type="column" data-id="2fdea927">
    <div data-element_type="widget" data-id="1ae5ac6e" data-widget_type="heading.default">
      <h2>Buy Froala Editor</h2>
    </div>
    <div data-element_type="widget" data-id="19f12a3a" data-widget_type="heading.default">
      <h5>Powering web editing for customers ranging from startups to the world's largest companies.</h5>
      <p>
        <br>
        </p>
      </div>
    </div>
  </section>
  <section data-element_type="section" data-id="14f81af">
    <div data-element_type="column" data-id="7cf39a8">
      <p><br></p>
      <div data-element_type="widget" data-id="2f69551" data-widget_type="heading.default">We are proud to announce new flexibility with <strong>perpetual</strong> and <strong>annual</strong> plan options - perfect for any project or team!</div>
      </div>
    </section>
  </div>`;

const froalaEditorConfig = {
  attribution: false,
  height: 400,
  quickInsertEnabled: false,
  imageDefaultWidth: 0,
  imageResizeWithPercent: true,
  imageMultipleStyles: false,
  imageOutputSize: true,
  imageRoundPercent: true,
  imageMaxSize: 1024 * 1024 * 2.5,
  imageEditButtons: [
    "imageReplace",
    "imageAlign",
    "imageRemove",
    "imageSize",
    "-",
    "imageLink",
    "linkOpen",
    "linkEdit",
    "linkRemove"
  ],
  imageAllowedTypes: ["jpeg", "jpg", "png", "gif"],
  imageInsertButtons: ["imageBack", "|", "imageUpload"],
  placeholderText: "Your content goes here!",
  colorsStep: 5,
  colorsText: [
    "#000000",
    "#2C2E2F",
    "#6C7378",
    "#FFFFFF",
    "#009CDE",
    "#003087",
    "#FF9600",
    "#00CF92",
    "#DE0063",
    "#640487",
    "REMOVE"
  ],
  colorsBackground: [
    "#000000",
    "#2C2E2F",
    "#6C7378",
    "#FFFFFF",
    "#009CDE",
    "#003087",
    "#FF9600",
    "#00CF92",
    "#DE0063",
    "#640487",
    "REMOVE"
  ],
  toolbarButtons: {
    moreText: {
      buttons: [
        "paragraphFormat",
        "|",
        "fontSize",
        "textColor",
        "backgroundColor",
        "insertImage",
        "alignLeft",
        "alignRight",
        "alignJustify",
        "formatOL",
        "formatUL",
        "indent",
        "outdent"
      ],
      buttonsVisible: 6
    },
    moreRich: {
      buttons: [
        "|",
        "bold",
        "italic",
        "underline",
        "insertHR",
        "insertLink",
        "insertTable"
      ],
      name: "additionals",
      buttonsVisible: 3
    },
    dummySection: {
      buttons: ["|"]
    },
    moreMisc: {
      buttons: ["|", "undo", "redo", "help", "|"],
      align: "right",
      buttonsVisible: 2
    }
  },
  tableEditButtons: [
    "tableHeader",
    "tableRemove",
    "tableRows",
    "tableColumns",
    "tableStyle",
    "-",
    "tableCells",
    "tableCellBackground",
    "tableCellVerticalAlign",
    "tableCellHorizontalAlign"
  ],
  tableStyles: {
    grayTableBorder: "Gray Table Border",
    blackTableBorder: "Black Table Border",
    noTableBorder: "No Table Border"
  },
  toolbarSticky: true,
  pluginsEnabled: [
    "align",
    "colors",
    "entities",
    "fontSize",
    "help",
    "image",
    "link",
    "lists",
    "paragraphFormat",
    "paragraphStyle",
    "save",
    "table",
    "wordPaste"
  ],
  events: {
    "image.beforeUpload": function (files: string | any[], arg1: any, arg2: any) {
      var editor: any = this;
      if (files.length) {
        if (files[0].size / 1000 > 255) {
          alert("Image file size exceeded the limit");
          return false;
        } else {
          // Create a File Reader.
          var reader = new FileReader();
          // Set the reader to insert images when they are loaded.
          reader.onload = (e: any) => {
            var result = e.target.result;
            editor.image.insert(result, null, null, editor.image.get());
          };
          // Read image as base64.
          reader.readAsDataURL(files[0]);
        }
      }
      editor.popups.hideAll();
      // Stop default upload chain.
      return false;
    }
  }
};

export default class App extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <div className="App">
        <Froala
          model={defaultContent}
          onModelChange={this.onModelChange}
          tag="textarea"
          config={froalaEditorConfig}
        ></Froala>
      </div>
    );
  }

  private onModelChange = (model: any) => {
    let edData = model;
    let elem = document.createElement("div");
    elem.innerHTML = edData;
    console.log(elem);
  };
}
