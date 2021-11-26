import React, { useState } from "react";
import { HeadingToolbar, Plate } from "@udecode/plate";
import { Editable } from "slate-react";

export const MessageEditor = ({
  id,
  autoFocus,
  spellCheck,
  placeholder,
  editableStyle,
  create,
}) => {
  const editableProps = {
    // autoFocus: process.env.NODE_ENV !== 'production',
    autoFocus: !!autoFocus,
    spellCheck: !!spellCheck,
    placeholder: placeholder || "Type in something...",
    //style: editableStyle,// bug. Placehoder is causing height display problems here
    //so the workaround is to wrap Plate in div below and
    //apply the style there instead . The bug behaviour is that if
    //the Placeholder property is set the display height
    //malfunctions - does not work properly - weird behaviour
  };
  const initialValue = [
    {
      children: [
        {
          text: "",
        },
      ],
    },
  ];

  return (
    <>
      <Plate
        id={id}
        editableProps={editableProps}
        initialValue={initialValue}
        renderEditable={() => (
          /*As noted above, apply the style of Editable in this div that wraps Plate as a workaround of
          a particular bug observed if Placeholder is set where the display height malfunction - not working correctly
        */

          <div
            style={
              editableStyle || {
                //backgroundColor: "greenyellow",
                padding: "10px",
                minHeight: "50px",
                maxHeight: "200px",
                overflowY: "auto",
              }
            }
          >
            <Editable {...editableProps} />
          </div>
        )}
      />
      <HeadingToolbar>{/*<AlignToolbarButtons />*/}</HeadingToolbar>
    </>
  );
};
