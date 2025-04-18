import { fetchData } from "./fetchData";

export async function add(a: number, b: number): Promise<number> {
  if (a === 0) {
    return 100;
  }

  if (a === 1) {
    await fetchData("http://localhost/");
  }

  if (a === 2) {
    return 17;
  }

  return a + b;
}
