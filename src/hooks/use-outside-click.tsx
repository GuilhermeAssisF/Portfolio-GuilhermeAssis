import { useEffect } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Não faz nada se o clique for no elemento da ref ou em seus descendentes
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener); // Adiciona suporte a toque

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener); // Limpa o evento de toque
    };
  }, [ref, callback]);
};
