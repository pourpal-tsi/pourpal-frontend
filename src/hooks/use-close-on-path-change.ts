import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export interface UseCloseOnPathChangeResult {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  pathname?: string;
}

export default function useCloseOnPathChange(): UseCloseOnPathChangeResult {
  const pathname: string = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return { isOpen, setIsOpen, pathname };
}
