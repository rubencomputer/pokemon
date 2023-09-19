//La primera la hace mayuscula

export const firstUpperCase = (text: string) =>
  `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
