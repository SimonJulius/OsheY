import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerTitle: "OsheY" }} />
      <Tabs.Screen name="projects" options={{ headerTitle: "Edited" }} />
    </Tabs>
  );
};

export default TabLayout;
