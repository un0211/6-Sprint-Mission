import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import Device from "@/constants/Device";

const DeviceContext = createContext<Device | undefined>(undefined);
const MAX_MOBILE_WIDTH = 767;
const MAX_TABLET_WIDTH = 1199;

function getDevice() {
  if (typeof window === "undefined") {
    return Device.PC;
  }

  const width = window.innerWidth;

  if (width <= MAX_MOBILE_WIDTH) {
    return Device.Mobile;
  } else if (width <= MAX_TABLET_WIDTH) {
    return Device.Tablet;
  } else {
    return Device.PC;
  }
}

export function DeviceProvider({ children }: { children: ReactNode }) {
  const [device, setDevice] = useState(getDevice());

  useEffect(() => {
    function handleResize() {
      window.requestAnimationFrame(() => {
        setDevice(getDevice());
      });
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <DeviceContext.Provider value={device}>{children}</DeviceContext.Provider>
  );
}

export function useDevice() {
  const deviceContext = useContext(DeviceContext);
  if (!deviceContext) {
    throw new Error("DeviceContext 안에서 써야 합니다");
  }

  return deviceContext;
}
