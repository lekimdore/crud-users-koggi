class TextUtils {
  public pluralize(word: string, itemsQuantity?: number): string {
    if (itemsQuantity === undefined) {
      return `${word}s`;
    }

    return `${word}s`;
  }
}

export default TextUtils;
