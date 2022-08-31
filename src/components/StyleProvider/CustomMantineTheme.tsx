import { MantineThemeOverride } from '@mantine/core';

const CustomTheme: MantineThemeOverride = {
  colors: {
    dark: [
      '#fff', // 0 -> font color || light mode backGroundColor?
      '#a2a2ad', // 1 -> secondary font color
      '#5d5d60', // 2 -> disable control (carousel)
      '#3e3e47', // 3 -> disable controls (media player)
      '#32323d', // 4 -> general containers borderColor
      '#23232d', // 5 -> footer backgroundColor
      '#191922', // 6 -> sideNavbar backgroundColor
      '#121216', // 7 -> backgroundColor
      '#0c0c0f', // 8
      '#000' // 9 -> complete black
    ]
  }
};

export default CustomTheme;
