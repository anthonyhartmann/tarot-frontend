import _ from 'lodash';
import {snakeCase} from 'lodash'
export class Card {
    public name: string = "";
    public uprightDescription: string = "";
    public reversedDescription: string = "";
    public suit: string = ""
    public uprightCardTags: string[] = [];
    public reverseCardTags: string[] = [];
    public dateAdded: Date = new Date();
    public reversed: boolean = false

    constructor(instanceData?: Card) {
      if (instanceData) {
        this.deserialize(instanceData);
      }
    }
  
    private deserialize(instanceData: Card) {
      // Note this.active will not be listed in keys since it's declared, but not defined
      const keys = Object.keys(this);
      for (const key of keys) {
        if (instanceData.hasOwnProperty(_.snakeCase(key))) {
          //@ts-ignore
          this[key] = instanceData[_.snakeCase(key)];
        }
      }
    }
  }