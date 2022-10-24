export class Polybius {
  private data: string[][] = [
    ["A", "B", "C", "D", "E", "F"],
    ["G", "H", "I", "J", "K", "L"],
    ["M", "N", "O", "P", "Q", "R"],
    ["S", "T", "U", "V", "W", "X"],
    ["Y", "Z", "!", "@", "#", "$"],
    ["%", "^", "&", "*", "(", ")"],
  ];

  encrypt = (text: string = "software") => {
    let horizontal = [];
    let vertical = [];
    for (let i = 0; i < text.length; i++) {
      const code = this.getCode(text[i]);
      horizontal.push(code?.x);
      vertical.push(code?.y);
    }

    const mixed = horizontal.concat(vertical);
    let result = "";
    for (let i = 0; i < mixed.length; i += 2) {
      const x = mixed[i] ?? 0;
      const y = mixed[i + 1] ?? 0;
      result = `${result}${this.data[y][x]}`;
    }
    return result;
  };

  decrypt = (encryptedText: string = "MLE$PSDC") => {
    let horizontal = [];
    let vertical = [];
    const half = encryptedText.length / 2;
    for (let i = 0; i < encryptedText.length; i++) {
      const code = this.getCode(encryptedText[i]);
      if (i < half) {
        horizontal.push(code?.x);
        horizontal.push(code?.y);
      } else {
        vertical.push(code?.x);
        vertical.push(code?.y);
      }
    }
    let result = "";
    for (let i = 0; i < encryptedText.length; i++) {
      const x = horizontal[i]??0;
      const y = vertical[i] ?? 0;
      result = `${result}${this.data[y][x]}`;
    }

    return result;
  };

  private getCode = (letter: string) => {
    let code;
    for (let y = 0; y < this.data.length; y++) {
      if (code) {
        break;
      }
      for (let x = 0; x < this.data[y].length; x++) {
        if (this.data[y][x].toLowerCase() === letter.toLowerCase()) {
          code = { x, y };
          break;
        }
      }
    }

    return code;
  };
}
