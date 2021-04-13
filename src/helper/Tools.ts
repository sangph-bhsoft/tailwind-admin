import { ColumnInterface } from "../interfaces/table";
import { FIELD_TYPE } from "../lib/constants";

export default class Tools {
  static dateFormat(date: string, locale = "FR-FR") {
    try {
      if (!date) return null;
      let dateString = "";
      if (typeof date === "string") {
        dateString = date.replace(" ", "T");
      }

      try {
        let result = new Date(dateString);
        const formater = new Intl.DateTimeFormat(locale);
        return formater.format(result);
      } catch (error) {
        return new Date().toDateString();
      }
    } catch (error) {
      return date;
    }
  }

  static numberFormat(number: number | bigint) {
    if (!number) return 0;
    const formater = new Intl.NumberFormat();
    return formater.format(number); // "1,234,567,890"
  }

  static numberMoneyFormat(number: number) {
    if (!number) return 0;
    number = Math.round(number);
    const formater = new Intl.NumberFormat();
    return formater.format(number);
  }

  static formatTableData(column: ColumnInterface, row: any) {
    let value = null;
    const { key } = column;
    switch (column.type) {
      case FIELD_TYPE.STRING:
        value = row[key];
        if (typeof column.date !== "undefined" && column.date) {
          value = Tools.dateFormat(value);
        }
        break;
      case FIELD_TYPE.EMAIL:
        value = row[key];
        break;
      case FIELD_TYPE.INTEGER:
        if (typeof row[key] === "undefined" || row["key"] === null) {
          value = null;
        } else {
          value = this.numberFormat(row[key]);
          if (typeof column.suffix !== "undefined") {
            value = value + " " + column.suffix;
          }
          if (typeof column.prefix !== "undefined") {
            value = column.prefix + " " + value;
          }
        }
        break;
      case FIELD_TYPE.FLOAT:
        if (typeof row[key] === "undefined" || row["key"] === null) {
          value = null;
        } else {
          value = this.numberFormat(Math.round(row[key] * 10) / 10);
          if (typeof column.suffix !== "undefined") {
            value = value + " " + column.suffix;
          }
          if (typeof column.prefix !== "undefined") {
            value = column.prefix + " " + value;
          }
        }
        break;
      case FIELD_TYPE.BOOLEAN:
        value = row[key];
        break;
      case FIELD_TYPE.DATE:
        value = this.dateFormat(row[key]);

        break;

      default:
        value = row[key];
    }
    return value;
  }
}
