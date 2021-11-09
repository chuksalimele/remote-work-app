import { createTheme } from "@mui/material/styles";
import { ThemeConstants } from "./../util/ThemeConstants";

var scrollbarCss = `::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background-color: inherit ;
}
::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #777777;
}
`;

const themeOptions = {
  palette: {
    mode: "dark",
    type: "light",
    primary: {
      main: ThemeConstants.lightThemePrimaryColor,
    },
    secondary: {
      main: ThemeConstants.lightThemeSecondaryColor,
    },
  },
  typography: {
    fontSize: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: scrollbarCss,
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    } /*
    MuiButtonBase: {
      defaultProps: {
        dense: true,
        disableRipple: true,
      },
    },
    MuiList: {
      defaultProps: { dense: true },
    },
    MuiMenuItem: {
      defaultProps: { dense: true },
    },
    MuiTable: {
      defaultProps: { size: "small" },
    },
    MuiButtonGroup: {
      defaultProps: { size: "small" },
    },
    MuiToggleButtonGroup: {
      defaultProps: { size: "small" },
    },
    MuiCheckbox: {
      defaultProps: { size: "small" },
    },
    MuiFab: {
      defaultProps: { size: "small" },
    },
    MuiFormControl: {
      defaultProps: { margin: "dense" },
    },
    MuiFormHelperText: {
      defaultProps: { margin: "dense" },
    },
    MuiIconButton: {
      defaultProps: { size: "small" },
    },
    MuiInputBase: {
      defaultProps: { margin: "dense" },
    },
    MuiInputLabel: {
      defaultProps: { margin: "dense" },
    },
    MuiRadio: {
      defaultProps: { size: "small" },
    },
    MuiSwitch: {
      defaultProps: { size: "small" },
    },
    MuiTextField: {
      defaultProps: { size: "small", margin: "dense" },
    },*/,
  },
};

export default createTheme(themeOptions);
