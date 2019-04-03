import isEmpty from "./isEmpty";
const getTheme = info => {
  /* set theme style */
  //get current preset
  const preset = isEmpty(info) ? null : info.presets[info.selectedPresetIndex];
  // set background color
  const backgroundStyle =
    preset !== null
      ? { backgroundColor: preset.background, color: preset.text }
      : null;
  //set link color
  const linkStyle = preset !== null ? { color: preset.link } : null;
  //set button background color
  const buttonStyle =
    preset !== null
      ? { backgroundColor: preset.button, color: preset.buttonFont }
      : null;
  //set nav style
  const navStyle =
    preset !== null
      ? { backgroundColor: preset.background, color: preset.link }
      : null;
  return { backgroundStyle, linkStyle, buttonStyle, navStyle };
};
export default getTheme;
