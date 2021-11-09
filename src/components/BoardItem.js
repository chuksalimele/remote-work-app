import {
  Button,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";
import { isFunction, isObject, isString, getPageUrl } from "../util/Util";
import { Link as RouterLink } from "react-router-dom";
import { DoubleArrow } from "@mui/icons-material";
export default function BoardItem(props) {
  const {
    items,
    maxShowItems,
    showSeeMorePath,
    showSeeMoreLabel,
    showSeeMoreRenderer,
    itemRenderer,
    header,
    headerRenderer,
    content,
    contentRenderer,
    footer,
    footerRenderer,
    sx,
  } = props;
  var requiredItems = maxShowItems > 0 ? items.slice(0, maxShowItems) : items;

  return (
    <Stack spacing={1} direction="column" sx={sx ? sx : {}}>
      {isString(header) && !isFunction(headerRenderer) ? (
        <div>
          <Typography variant="subtite2" component="div">
            {header}
          </Typography>
          <Divider />
        </div>
      ) : isObject(header) && !isFunction(headerRenderer) ? (
        <div>
          {header}
          <Divider />
        </div>
      ) : isFunction(headerRenderer) ? (
        headerRenderer(header)
      ) : null}

      {requiredItems && requiredItems.length > 0 ? (
        requiredItems.map((item, index) => {
          if (isFunction(itemRenderer)) {
            return itemRenderer(item, index);
          } else {
            return <Stack key={index}>{item}</Stack>;
          }
        })
      ) : isString(content) && !isFunction(contentRenderer) ? (
        <div>
          <Typography variant="subtite2" component="div">
            {content}
          </Typography>
        </div>
      ) : isObject(content) && !isFunction(contentRenderer) ? (
        { content }
      ) : isFunction(contentRenderer) ? (
        contentRenderer(content)
      ) : null}

      {isString(showSeeMorePath) ? (
        <Link component={RouterLink} to={getPageUrl(showSeeMorePath)}>
          {isString(showSeeMoreLabel) || isObject(showSeeMoreLabel) ? (
            showSeeMoreLabel
          ) : (
            <Button endIcon={<DoubleArrow />}>{"See More"}</Button>
          )}
        </Link>
      ) : isFunction(showSeeMoreRenderer) ? (
        showSeeMoreRenderer(showSeeMorePath)
      ) : null}

      {isString(footer) && !isFunction(footerRenderer) ? (
        <div>
          <Divider />
          <Typography variant="subtite2" component="div">
            {footer}
          </Typography>
        </div>
      ) : isObject(footer) && !isFunction(footerRenderer) ? (
        <div>
          <Divider />
          {footer}
        </div>
      ) : isFunction(footerRenderer) ? (
        footerRenderer(footer)
      ) : null}
    </Stack>
  );
}
