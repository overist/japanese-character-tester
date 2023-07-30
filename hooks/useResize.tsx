import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isMobileState } from "@/recoil/atoms";

const useResize = () => {
  const [isMobile, setIsMobile] = useRecoilState(isMobileState);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // 컴포넌트가 마운트될 때 초기 너비 설정

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};

export default useResize;
