import { createContext } from 'react';


export const featureFlagContext = createContext(null);


export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enableFlags, setEnableFlags] = useState({});
  
  
  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      const res = await featureFlagsDataServiceCall();
      setEnableFlags(res)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      throw new Error(error.message)
    }
  }
  
  useEffect(()=>{
    fetchFeatureFlags();
  }, [])
  return (
    <featureFlagContext.Provider value={{loading, enableFlags}}>
      {children}
    </featureFlagContext.Provider>
  );
}
