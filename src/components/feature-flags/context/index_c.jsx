import { createContext, useState, useEffect } from "react";
import featureFlagDataServiceCall from "../data.js";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enableFlags, setEnableFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      const res = await featureFlagDataServiceCall(); // make sure this exists
      setEnableFlags(res);
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagContext.Provider value={{ loading, enableFlags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
