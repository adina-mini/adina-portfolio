import { useEffect } from 'react';

// Olive-colored arrow cursor via CSS — no ring, no extra elements
const OLIVE_CURSOR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath d='M2 2 L2 16 L6 12 L9 19 L11 18 L8 11 L14 11 Z' fill='%236B8A6B' stroke='%230B0B0B' stroke-width='1' stroke-linejoin='round'/%3E%3C/svg%3E") 2 2, auto`;

const CustomCursor = () => {
  useEffect(() => {
    document.documentElement.style.cursor = OLIVE_CURSOR;
    return () => { document.documentElement.style.cursor = ''; };
  }, []);

  return null; // no DOM elements needed
};

export default CustomCursor;
