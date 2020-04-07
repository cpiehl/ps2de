
export class StringUtils {

    public static isNullOrWhitespace(input: string): boolean {
      return !input || !input.trim();
    }
    
    public static firstIsVowel(s: string): boolean {
      return ['a', 'e', 'i', 'o', 'u'].indexOf(s[0].toLowerCase()) !== -1
    }
    
    public static makeCommaSeparatedString(arr: string[], useOxfordComma: boolean) {
      const listStart = arr.slice(0, -1).join(', ');
      const listEnd = arr.slice(-1);
      const conjunction = arr.length <= 1 ? '' :
          useOxfordComma && arr.length > 2 ? ', and ' : ' and ';
  
      return [listStart, listEnd].join(conjunction);
    }
  
  }
  