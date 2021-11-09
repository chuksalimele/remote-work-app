import * as React from "react";

import { DoubleArrow } from "@mui/icons-material";
import MenuExt from "../../components/MenuExt";
import { Button, Tooltip } from "@mui/material";

export default function LeftMoreMenu({ items, tooltip }) {
  var [anchor, setAnchor] = React.useState(null);
  var [flag, setFlag] = React.useState(false);
  const handleClick = (evt) => {
    setAnchor(evt.currentTarget);
    setFlag(!flag); //toggle the flag
  };

  const moreButton = (
    <Button onClick={handleClick} sx={{ width: "100%" }}>
      More <DoubleArrow />
    </Button>
  );

  return (
    <>
      {tooltip ? (
        <Tooltip title="More" placement="right">
          {moreButton}
        </Tooltip>
      ) : (
        moreButton
      )}

      <MenuExt
        inverse
        flag={flag}
        anchor={anchor}
        items={items.filter((obj) => obj.overflow)}
        marginLeft="5px"
        anchorVertical="bottom"
        anchorHorizontal="right"
        menuVertical="bottom"
        menuHorizontal="left"
        arrowDirection="left"
      />
    </>
  );
}
