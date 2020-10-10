export const debouce = (func: Function, duration: number) => {
  let timeout: ReturnType<typeof setTimeout>;

  return function(...args: any[]) {
    const effect = () => {
      // @ts-ignore-next-line
      timeout = null;
      // @ts-ignore-next-line
      return func.apply(this, args);
    }

    clearTimeout(timeout);
    timeout = setTimeout(effect, duration);
  }
} 