export const passwordStrength = (password: string) => {
  let value = 0;
  const conditions = {
    length: password.length >= 6,
    hasNumber: /\d/.test(password),
    hasUppercase: /[A-Z]/.test(password),
    hasSpecial: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
  };

  if (conditions.length) value += 25;
  if (conditions.hasNumber) value += 25;
  if (conditions.hasUppercase) value += 25;
  if (conditions.hasSpecial) value += 25;

  return { value, conditions };
};
