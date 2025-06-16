export default class InputValidator {
  static minLength(value, min = 3) {
    return value.length >= min
      ? { valid: true }
      : { valid: false, error: `Phải có ít nhất ${min} ký tự` };
  }

}
