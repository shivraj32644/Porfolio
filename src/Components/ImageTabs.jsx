import {
  Box,
  Button,
  Image,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useMultiStyleConfig,
  useTab,
} from "@chakra-ui/react";
import React from "react";

export const ImageTabs = () => {
  const CustomTab = React.forwardRef((props, ref) => {
    // 1. Reuse the `useTab` hook
    const tabProps = useTab({ ...props, ref });
    const isSelected = !!tabProps["aria-selected"];

    // 2. Hook into the Tabs `size`, `variant`, props
    const styles = useMultiStyleConfig("Tabs", tabProps);

    return (
      <Button __css={styles.tab} {...tabProps}>
        <Box as="span" mr="2">
          {isSelected ? "😎" : "😐"}
        </Box>
        {tabProps.children}
      </Button>
    );
  });

  return (
    <Tabs>
      <TabList>
        <CustomTab>One</CustomTab>
        <CustomTab>Two</CustomTab>
        <CustomTab>Three</CustomTab>
        <CustomTab>Four</CustomTab>
        <CustomTab>Five</CustomTab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Image
            src="https://c4.wallpaperflare.com/wallpaper/448/174/357/neon-4k-hd-best-for-desktop-wallpaper-preview.jpg"
            alt="img"
          />
        </TabPanel>

        <TabPanel>
          <Image
            src="https://c4.wallpaperflare.com/wallpaper/952/536/1006/winter-4k-pc-desktop-wallpaper-preview.jpg"
            alt="img"
          />
        </TabPanel>

        <TabPanel>
          <Image
            src="https://c4.wallpaperflare.com/wallpaper/312/851/784/dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840%C3%972400-wallpaper-preview.jpg"
            alt="img"
          />
        </TabPanel>

        <TabPanel>
          <Image
            src="https://c4.wallpaperflare.com/wallpaper/83/500/871/waterfall-high-resolution-desktop-wallpaper-preview.jpg"
            alt="img"
          />
        </TabPanel>

        <TabPanel>
          <Image
            src="https://c4.wallpaperflare.com/wallpaper/267/451/736/5bd32e1029d00-wallpaper-preview.jpg"
            alt="img"
          />
        </TabPanel>

        
      </TabPanels>
    </Tabs>
  );
};
