export function hexToRGB(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (!Number.isNaN(alpha)) {
    return `rgba(${String(r)}, ${String(g)} , ${String(b)}, ${String(alpha)})`;
  } else {
    return `rgb(${String(r)}, ${String(g)} , ${String(b)})`;
  }
}
